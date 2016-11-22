import React, {PropTypes, Component} from 'react';
import {Grid, Loader, Segment, Message} from 'semantic-ui-react';
import SideMenu from './components/SideMenu';
import View from './components/View';
import List from './components/List';
import './components/styles.css';


export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.query = ::this.query;
    this.create = ::this.create;
    this.update = ::this.update;
    this.remove = ::this.remove;
    this.initCMS = ::this.initCMS;
    this._nextPage = ::this._nextPage;
    this._addNewItem = ::this._addNewItem;
    this.getListData = ::this.getListData;
    this.getViewData = ::this.getViewData;
    this._routeToList = ::this._routeToList;
    this._routeToView = ::this._routeToView;
    this._uploadImage = ::this._uploadImage;
    this._previewsPage = ::this._previewsPage;
    this.validateFields = ::this.validateFields;
    this.getRequestString = ::this.getRequestString;
    this.objOfFieldsToArray = ::this.objOfFieldsToArray;
    this._collectFieldsData = ::this._collectFieldsData;
    this._handleNewMenuClick = ::this._handleNewMenuClick;
    this.getCurrentViewFields = ::this.getCurrentViewFields;
  }
  
  static propTypes = {
    route: PropTypes.shape({
      graphql: PropTypes.string,
      endpoint: PropTypes.string,
      newMenuItems: PropTypes.array
    }),
    graphql: PropTypes.string,
    endpoint: PropTypes.string,
    newMenuItems: PropTypes.array
  }
  
  state = {
    newMenuItemSecret: false,
    viewData: false,
    listData: false,
    schema: false,
    currentPathSchema: false,
    currentPathName: false,
    SideMenuItems: false,
    viewMode: false,
    currentItemId: false,
    limit: 50,
    offset: 0,
    lastPage: false,
    fields: false
  }
  
  componentDidMount() {
    this.initCMS();
  }
  
  shouldComponentUpdate(p, n) {
    return n.currentPathSchema && n.schema;
  }
  
  query(type, request, resolver, variables) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest(),
        graphql = this.props.graphql ? this.props.graphql : this.props.route.graphql;
      xhr.responseType = 'json';
      xhr.open('POST', graphql);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = (err) => {
        reject(err.error);
      };
      if (!variables) {
        xhr.send(JSON.stringify({query: `${type} { ${resolver} {${request}} }`}));
      } else {
        let varTypes = '',
          varForRequest = '';
        for (let key in variables.types) {
          if (variables.types.hasOwnProperty(key)) {
            varTypes += `$${[key]}: ${variables.types[key]} `;
            varForRequest += `${[key]}: $${[key]} `;
          }
        }
        xhr.send(JSON.stringify({
          query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
          variables: variables.values
        }));
      }
    });
  }
  
  create(data) {
    if (this.state.currentPathSchema.resolvers.create) {
      let schema = this.state.currentPathSchema,
        currentList = this.state.currentPathName,
        resolver = schema.resolvers.create.resolver,
        req = '';
      
      schema.fields.forEach(prop => {
        if (Object.keys(prop)[0] === '_id' || Object.keys(prop)[0] === 'id') {
          req += `${Object.keys(prop)[0]} `;
        }
      });
      
      if (!data) {
        console.log('data wasn\'t provided');
      } else {
        if (schema.resolvers.create) {
          this.query('mutation', req, resolver, data)
            .then(() => {
              this.forceUpdate();
              this.showSuccessMs();
              this._routeToList(currentList);
            })
            .catch(err => {
              this.showErrorMs();
              console.log(`create error: ${err}`);
            });
        }
      }
    }
  }
  
  update() {
    if (this.state.currentPathSchema.resolvers.update) {
      let schema = this.state.currentPathSchema,
        resolver = schema.resolvers.update.resolver,
        id = this.state.currentItemId,
        req = id ? id.split(':')[0] : '',
        fields = this.state.fields,
        data = this._collectFieldsData(fields, id, 'update');
      
      if (!id && data) {
        data = this._collectFieldsData(fields, id, 'create');
        this.create(data);
      } else if (data) {
        if (schema.resolvers.update) {
          this.query('mutation', req, resolver, data)
            .then(this.showSuccessMs)
            .catch(err => {
              this.showErrorMs();
              console.log(`update error: ${err}`);
            });
        }
      }
    }
  }
  
  remove(e) {
    if (this.state.currentPathSchema.resolvers.remove) {
      let id = e.target.id,
        schema = this.state.currentPathSchema,
        currentList = this.state.currentPathName,
        resolver = schema.resolvers.remove.resolver,
        req = id.split(':')[0],
        data = {values: {}, types: {}};
      
      data.values[id.split(':')[0]] = id.split(':')[1];
      data.types[id.split(':')[0]] = id.split(':')[2];
      
      if (!id) {
        console.log('id wasn\'t provided');
      } else {
        if (schema.resolvers.remove) {
          this.query('mutation', req, resolver, data)
            .then(() => {
              this.forceUpdate();
              this.showSuccessMs();
              this._routeToList(currentList);
            })
            .catch(err => {
              this.showErrorMs();
              console.log(`remove error: ${err}`);
            });
        }
      }
    }
  }
  
  getListData() {
    let d = this.state.currentPathSchema,
      h = this.state.currentPathSchema.listHeader,
      resolver = d.resolvers.find.resolver,
      {offset, limit} = this.state,
      data = {
        values: {offset: offset, limit: limit},
        types: {offset: 'Int!', limit: 'Int!'}
      },
      req = `${h.id.join(' ')} ${h.title.join(' ')}`;
    this.query('query', req, resolver, data)
      .then(res => {
        res.errors ? console.log(res) : null;
        this.setState({
          listData: res,
          lastPage: res.data[resolver].length < 50
        }, this.forceUpdate);
      })
      .catch(err => console.log(`error: ${err}`));
  }
  
  getRequestString(fields) {
    let request = '';
    fields.forEach(prop => {
      if (!prop[Object.keys(prop)[0]].nestedFields) {
        request += `${Object.keys(prop)[0]} `;
      } else {
        let nestedReqFields = this.getRequestString(prop[Object.keys(prop)[0]].nestedFields);
        request += `${Object.keys(prop)[0]} {${nestedReqFields}} `;
      }
    });
    
    return request;
  }
  
  getViewData(id) {
    let resolver = this.state.currentPathSchema.resolvers.find.resolver,
      queryArgs = this.state.currentPathSchema.resolvers.find.args,
      queryId = '',
      request = this.getRequestString(this.state.fields);
    
    for (let key in queryArgs) {
      if (key === 'id' || key === '_id') {
        !queryId || queryId === 'id' ? queryId = key : null;
      }
    }
    
    let variables = {
      values: {[queryId]: id.split(':')[1]},
      types: {[queryId]: queryArgs[queryId]}
    };
    
    this.query('query', request, resolver, variables)
      .then(res => this.setState({viewData: res, viewMode: true, currentItemId: id}))
      .catch(err => console.log(`error: ${err}`));
  }
  
  objOfFieldsToArray(fields) {
    let array = [],
      tmpFields = {...fields};
    
    for (let key in tmpFields) {
      if (tmpFields.hasOwnProperty(key)) {
        if (!tmpFields[key].exclude && !tmpFields[key].nestedFields) {
          array.push({[key]: tmpFields[key]});
        } else if (!tmpFields[key].exclude && tmpFields[key].nestedFields) {
          let newObj = {...tmpFields[key]};
          newObj.nestedFields = this.objOfFieldsToArray(tmpFields[key].nestedFields);
          array.push({[key]: newObj});
        }
      }
    }
    return array;
  }
  
  getCurrentViewFields(schema, currentRout) {
    let array = [],
      obj = {...schema};
    for (let key in obj.fields) {
      if (obj.fields.hasOwnProperty(key)) {
        if (!obj.fields[key].exclude) {
          array.push({[key]: obj.fields[key]});
        }
      }
    }
    
    this.setState({
      currentPathSchema: {
        typeName: currentRout[0],
        label: obj.label,
        resolvers: obj.resolvers,
        fields: array,
        listHeader: obj.listHeader,
        uploadPath: obj.uploadPath,
        uploadRoot: obj.uploadRoot
      },
      fields: this.objOfFieldsToArray(obj.fields)
    }, this.getListData);
  }
  
  initCMS() {
    let endpoint = this.props.endpoint ? this.props.endpoint : this.props.route.endpoint;
    fetch(endpoint, {method: 'GET'})
      .then(json => json.json())
      .then(res => {
        let menuItems = [],
          newMenuItems = this.props.newMenuItems ?
            this.props.newMenuItems : this.props.route.newMenuItems;
        for (let type in res) {
          if (res.hasOwnProperty(type)) {
            menuItems.push({label: res[type].label, typeName: type});
          }
        }
        
        this.setState({
          schema: res,
          SideMenuItems: menuItems,
          newMenuItemSecret: newMenuItems ? newMenuItems[0].secret : false
        }, () => {
          if (!this.state.newMenuItemSecret) {
            let prop = this.state.SideMenuItems[0].typeName;
            this.getCurrentViewFields(this.state.schema[prop], prop);
          } else {
            this.forceUpdate();
          }
        });
      })
      .catch(err => console.log(err));
  }
  
  showErrorMs() {
    document.getElementById('ms-error').style.visibility = 'visible';
    document.getElementById('ms-error').style.opacity = 1;
    setTimeout(() => {
      document.getElementById('ms-error').style.visibility = 'hidden';
      document.getElementById('ms-error').style.opacity = 0;
    }, 3000);
  }
  
  showSuccessMs() {
    document.getElementById('ms-success').style.visibility = 'visible';
    document.getElementById('ms-success').style.opacity = 1;
    setTimeout(() => {
      document.getElementById('ms-success').style.visibility = 'hidden';
      document.getElementById('ms-success').style.opacity = 0;
    }, 3000);
  }
  
  validateFields(data) {
    let response = true;
    
    for (let arg in data.types) {
      if (data.types.hasOwnProperty(arg) && data.types[arg].slice(-1) === '!') {
        if (typeof (data.values[arg]) !== 'boolean' && !data.values[arg]) {
          response = false;
          this.showErrorMs();
          document.getElementById(arg).classList.add('error');
          document.getElementById(arg).parentNode.classList.add('error');
          document.getElementById(arg).placeholder = 'FIELD IS REQUIRED!';
        } else {
          response = true;
          document.getElementById(arg).classList.remove('error');
          document.getElementById(arg).parentNode.classList.remove('error');
          document.getElementById(arg).placeholder = arg;
        }
      }
    }
    
    return response;
  }
  
  _nextPage() {
    let {offset, lastPage} = this.state;
    
    if (!lastPage) {
      this.setState({
        offset: offset + 50
      }, this.getListData);
    }
  }
  
  _previewsPage() {
    let {offset} = this.state;
    if (offset) {
      this.setState({
        offset: offset - 50
      }, this.getListData);
    }
  }
  
  _addNewItem() {
    if (this.state.currentPathSchema.resolvers.create) {
      this.setState({
        viewMode: true,
        viewData: false,
        currentItemId: false
      }, this.forceUpdate);
    }
  }
  
  _routeToList(path) {
    this.setState({
      currentPathName: path,
      newMenuItemSecret: false,
      viewData: false,
      viewMode: false,
      listData: false,
      currentPathSchema: false,
      currentItemId: false,
      limit: 50,
      fields: false,
      offset: 0
    }, () => {
      this.getCurrentViewFields(this.state.schema[this.state.currentPathName], [this.state.currentPathName]);
    });
  }
  
  _routeToView(e) {
    this.getViewData(e.target.id);
  }
  
  _collectFieldsData(fields, id, action, prefix) {
    let schema = {...this.state.currentPathSchema},
      data = {values: {}, types: {}};
    
    function getCurrentFieldData(id, type, prefix) {
      let pr = prefix ? `${prefix}/` : '';
      
      switch (type || type.slice(0, -1)) {
      case 'Int':
        return document.getElementById(`${pr}${id}`).value;
      case 'Float':
        return document.getElementById(`${pr}${id}`).value;
      case 'Boolean':
        return document.getElementById(`${pr}${id}`).checked;
      case 'String':
        return document.getElementById(`${pr}${id}`).value;
      case 'file':
        return document.getElementById(`${pr}${id}-p`).innerHTML;
      case 'selection':
        return document.getElementById(`${pr}${id}`).firstChild.selectedOptions;
      default:
        return document.getElementById(`${pr}${id}`).value;
      }
    }
    
    function getCurrentFieldMutationType(propName, schema, type, action) {
      let response = type;
      if (schema.resolvers.create.args[propName] && action === 'create') {
        response = schema.resolvers.create.args[propName];
      } else if (schema.resolvers.update.args[propName] && action === 'update') {
        response = schema.resolvers.update.args[propName];
      }
      return response;
    }
    
    function getNestedFieldsData(nestedFields, propName) {
      let tmpData = {};
      nestedFields.forEach(field => {
        if (!field.nestedFields) {
          tmpData[Object.keys(field)[0]] =
            getCurrentFieldData(Object.keys(field)[0], field[Object.keys(field)[0]].fieldType, propName, prefix);
        } else {
          let key = Object.keys(field)[0];
          tmpData[key] = getNestedFieldsData(field[key].nestedFields, key);
        }
      });
      
      return tmpData;
    }
    
    function checkIfDisabled(field, propName) {
      let method = action && action === 'update' ?
        schema.resolvers.update.args : schema.resolvers.create.args;
      let result = method[propName] ? field[propName].disabled : true;
      prefix ? result = false : null;
      return result;
    }
    
    if (!action) {
      data = {};
      fields.forEach(fieldObj => {
        let propName = Object.keys(fieldObj)[0],
          type = fieldObj[propName].fieldType;
        if (fieldObj[propName].nestedFields &&
          fieldObj[propName].inputControl !== 'selection') {
          data[propName] = JSON.stringify(getNestedFieldsData(fieldObj[propName].nestedFields, propName));
        } else if (!checkIfDisabled(fieldObj, propName)) {
          if (propName !== 'id' &&
            propName !== '_id' &&
            propName !== 'offset' &&
            propName !== 'limit' &&
            fieldObj[propName].inputType !== 'file' &&
            fieldObj[propName].inputControl !== 'selection') {
            data[propName] = getCurrentFieldData(propName, type, prefix);
          } else if (fieldObj[propName].inputType === 'file') {
            data.values[propName] = getCurrentFieldData(propName, 'file', prefix);
            data.types[propName] = 'String';
          } else if (fieldObj[propName].inputControl === 'selection') {
            let ref = this.refs.View,
              selectValue = getCurrentFieldData(propName, 'selection', prefix),
              valuesData = [];
            
            for (let node of selectValue) {
              valuesData.push(ref.state[`${propName}Data`][node.value]);
            }
            data[propName] = JSON.stringify(valuesData);
          }
        }
      });
      return data;
    } else {
      fields.forEach(fieldObj => {
        let propName = Object.keys(fieldObj)[0],
          type = fieldObj[propName].fieldType;
        
        if (fieldObj[propName].nestedFields && fieldObj[propName].inputControl !== 'selection') {
          data.values[propName] = JSON.stringify(getNestedFieldsData(fieldObj[propName].nestedFields, propName));
          data.types[propName] = 'String';
        } else if (!checkIfDisabled(fieldObj, propName)) {
          if (propName !== 'id' &&
            propName !== '_id' &&
            propName !== 'offset' &&
            propName !== 'limit' &&
            fieldObj[propName].inputType !== 'file' &&
            fieldObj[propName].inputControl !== 'selection') {
            data.values[propName] = getCurrentFieldData(propName, type, prefix);
            data.types[propName] = getCurrentFieldMutationType(propName, schema, type, action);
          } else if (fieldObj[propName].inputType === 'file') {
            data.values[propName] = getCurrentFieldData(propName, 'file', prefix);
            data.types[propName] = 'String';
          } else if (fieldObj[propName].inputControl === 'selection') {
            let ref = this.refs.View,
              selectValue = getCurrentFieldData(propName, 'selection', prefix),
              valuesData = [];
            
            for (let node of selectValue) {
              valuesData.push(ref.state[`${propName}Data`][node.value]);
            }
            
            data.values[propName] = JSON.stringify(valuesData);
            data.types[propName] = 'String';
          } else if (id) {
            if (!data.values[id.split(':')[0]]) {
              data.values[id.split(':')[0]] = id.split(':')[1];
              data.types[id.split(':')[0]] = id.split(':')[2];
            } else {
              data.values[propName] = getCurrentFieldData(propName, type);
              data.types[propName] = getCurrentFieldMutationType(propName, schema, type, action);
            }
          }
        }
      });
      
      if (this.validateFields(data)) {
        return data;
      }
    }
  }
  
  _handleNewMenuClick(label) {
    this.setState({
      newMenuItemSecret: label,
      viewData: false,
      listData: false,
      currentPathSchema: false,
      currentPathName: false,
      viewMode: false,
      currentItemId: false,
      limit: 50,
      offset: 0,
      lastPage: false
    }, this.forceUpdate);
  }
  
  _uploadImage(e) {
    e.preventDefault();
    if (e.currentTarget.files[0]) {
      let endpoint = this.props.endpoint ? this.props.endpoint : this.props.route.endpoint,
        fileFromInput = e.currentTarget.files[0],
        folderPath = this.state.currentPathSchema.uploadPath ?
          `/${this.state.currentPathSchema.uploadPath}` : `/${this.state.currentPathSchema.typeName}`,
        massage = e.currentTarget.previousElementSibling,
        fd = new FormData();
      
      fd.append('file', fileFromInput, [fileFromInput.name, folderPath]);
      massage.innerHTML = fileFromInput.name;
      fetch(endpoint, {method: 'POST', body: fd})
        .catch(err => console.log(`error: ${err}`));
    }
  }
  
  render() {
    const {Column} = Grid;
    const {
      schema, currentPathSchema, fields, viewData, offset, lastPage,
      listData, SideMenuItems, viewMode, currentItemId, newMenuItemSecret
    } = this.state;
    let {
        _routeToList, _routeToView, _routeToAdd, _addNewItem, _uploadImage, getRequestString,
        _nextPage, _previewsPage, query, update, remove, _handleNewMenuClick, _collectFieldsData
      } = this,
      newMenuItems = this.props.newMenuItems ? this.props.newMenuItems : this.props.route.newMenuItems;
    
    if (!schema) {
      return (
        <Segment className='loading-block'>
            <div className='ui active dimmer'>
                <Loader content='Loading'/>
            </div>
        </Segment>
      );
    } else {
      let resolverForList = false,
        NewMenuView = false;
      if (newMenuItemSecret) {
        NewMenuView = newMenuItems.find(item => item.secret === newMenuItemSecret).view.component;
      } else {
        resolverForList = currentPathSchema.resolvers.find.resolver;
      }
      
      return (
        <Grid className='graphql-cms'>
            <Column computer={3} mobile={16}>
                <SideMenu
                  setState={this.setState}
                  newMenuItems={newMenuItems}
                  items={SideMenuItems}
                  _handleNewMenuClick={_handleNewMenuClick}
                  _routeToList={_routeToList}
                />
            </Column>
            <Message color='green' id='ms-success'>Success!</Message>
            <Message color='red' id='ms-error'>Error!</Message>
            <Column computer={13} mobile={16}>
              {viewMode ?
                (!viewData && currentItemId ?
                  <Segment className='loading-block'>
                      <div className='ui active dimmer'>
                          <Loader content='Loading'/>
                      </div>
                  </Segment> :
                  <View
                    ref='View'
                    query={query}
                    data={!viewData ? false : viewData.data[resolverForList][0] ?
                      viewData.data[resolverForList][0] : viewData.data[resolverForList]}
                    fields={fields}
                    update={update}
                    remove={remove}
                    currentItemId={currentItemId}
                    _addNewItem={_addNewItem}
                    _routeToAdd={_routeToAdd}
                    _uploadImage={_uploadImage}
                    _collectFieldsData={_collectFieldsData}
                    getRequestString={getRequestString}
                    schema={currentPathSchema}
                  />) :
                (!listData ?
                  (!newMenuItemSecret ?
                    <Segment className='loading-block'>
                        <div className='ui active dimmer'>
                            <Loader content='Loading'/>
                        </div>
                    </Segment> :
                    <Segment color='black' className='View'>
                        <NewMenuView/>
                    </Segment>) :
                  <List
                    query={query}
                    remove={remove}
                    offset={offset}
                    lastPage={lastPage}
                    _nextPage={_nextPage}
                    _previewsPage={_previewsPage}
                    _addNewItem={_addNewItem}
                    _routeToView={_routeToView}
                    data={listData.data[resolverForList]}
                    schema={currentPathSchema}
                  />)}
            </Column>
        </Grid>
      );
    }
  }
}