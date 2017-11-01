import React, { Component } from 'react';
import { Grid, Loader, Message, Segment } from 'semantic-ui-react';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import SideMenu from './components/SideMenu';
import View from './components/View';
import List from './components/List';

if (!window.Promise) {
  window.Promise = Promise;
}

// const propTypes = {
//   route: PropTypes.shape({
//     graphql: PropTypes.string,
//     endpoint: PropTypes.string,
//     newMenuItems: PropTypes.array,
//   }),
//   graphql: PropTypes.string,
//   endpoint: PropTypes.string,
//   newMenuItems: PropTypes.array,
// };

class Layout extends Component {
  constructor(...args) {
    super(...args);
    this.query = this.query.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.initCMS = this.initCMS.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.getListData = this.getListData.bind(this);
    this.getViewData = this.getViewData.bind(this);
    this.routeToList = this.routeToList.bind(this);
    this.routeToView = this.routeToView.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.previewsPage = this.previewsPage.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.getRequestString = this.getRequestString.bind(this);
    this.collectFieldsData = this.collectFieldsData.bind(this);
    this.objOfFieldsToArray = this.objOfFieldsToArray.bind(this);
    this.handleNewMenuClick = this.handleNewMenuClick.bind(this);
    this.getCurrentViewFields = this.getCurrentViewFields.bind(this);
    this.state = {
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
      fields: false,
    };
  }

  componentDidMount() {
    this.initCMS();
  }

  shouldComponentUpdate(p, n) {
    return n.currentPathSchema && n.schema;
  }

  getCurrentViewFields(schema, currentRout) {
    const array = [];
    const obj = { ...schema };
    Object.keys(obj.fields).forEach((key) => {
      if (!obj.fields[key].exclude) {
        array.push({ [key]: obj.fields[key] });
      }
    });
    const h = obj.listHeader;
    const tb1 = Array.isArray(h.id)
      ? h.id
      : Object.keys(h.id).map(key => h.id[key]);
    const tb2 = Array.isArray(h.title)
      ? h.title
      : Object.keys(h.title).map(key => h.title[key]);
    this.setState(
      {
        currentPathSchema: {
          typeName: currentRout[0],
          label: obj.label,
          resolvers: obj.resolvers,
          fields: array,
          listHeader: { id: tb1, title: tb2 },
          uploadPath: obj.uploadPath,
          uploadRoot: obj.uploadRoot,
        },
        fields: this.objOfFieldsToArray(obj.fields),
      },
      this.getListData,
    );
  }

  getViewData(id) {
    const resolver = this.state.currentPathSchema.resolvers.find.resolver;
    const queryArgs = this.state.currentPathSchema.resolvers.find.args;
    const request = this.getRequestString(this.state.fields);
    let queryId = '';
    Object.keys(queryArgs).forEach((key) => {
      if ((key === 'id' || key === '_id') && !queryId) {
        queryId = key;
      }
    });
    const variables = {
      values: { [queryId]: id.split(':')[1] },
      types: { [queryId]: queryArgs[queryId] },
    };
    this.query('query', request, resolver, variables)
      .then(res =>
        this.setState({ viewData: res, viewMode: true, currentItemId: id }),
      )
      .catch(err => console.log(`getViewData error: ${err}`));
  }

  getRequestString(fields) {
    let request = '';
    fields.forEach((prop) => {
      if (!prop[Object.keys(prop)[0]].nestedFields) {
        request += `${Object.keys(prop)[0]} `;
      } else {
        const nestedReqFields = this.getRequestString(
          prop[Object.keys(prop)[0]].nestedFields,
        );
        request += `${Object.keys(prop)[0]} {${nestedReqFields}} `;
      }
    });
    return request;
  }

  getListData() {
    const d = this.state.currentPathSchema;
    const h = this.state.currentPathSchema.listHeader;
    const fields = d.fields.map(objKey => Object.keys(objKey)[0]);
    const resolver = d.resolvers.find.resolver;
    const { offset, limit } = this.state;
    const data = {
      values: { offset, limit },
      types: { offset: 'Int!', limit: 'Int!' },
    };
    const req = `${h.id.join(' ')} ${h.title.join(' ')} ${fields.find(
      key => key === '_id',
    )
      ? '_id'
      : 'id'}`;
    this.query('query', req, resolver, data)
      .then((res) => {
        if (res.errors) throw new Error(res);
        this.setState(
          {
            listData: res,
            lastPage: res.data[resolver].length < 50,
          },
          this.forceUpdate,
        );
      })
      .catch((err) => {
        throw new Error(`error: ${err}`);
      });
  }

  objOfFieldsToArray(fields) {
    const array = [];
    const tmpFields = { ...fields };
    Object.keys(tmpFields).forEach((key) => {
      if (!tmpFields[key].exclude && !tmpFields[key].nestedFields) {
        array.push({ [key]: tmpFields[key] });
      } else if (!tmpFields[key].exclude && tmpFields[key].nestedFields) {
        const newObj = { ...tmpFields[key] };
        newObj.nestedFields = this.objOfFieldsToArray(
          tmpFields[key].nestedFields,
        );
        array.push({ [key]: newObj });
      }
    });
    return array;
  }

  query(type, request, resolver, variables) {
    return new Promise((resolve, reject) => {
      const graphql = this.props.graphql
        ? this.props.graphql
        : this.props.route.graphql;
      const xhr = new XMLHttpRequest();
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
        xhr.send(
          JSON.stringify({ query: `${type} { ${resolver} {${request}} }` }),
        );
      } else {
        let varTypes = '';
        let varForRequest = '';
        Object.keys(variables.types).forEach((key) => {
          varTypes += `$${[key]}: ${variables.types[key]} `;
          varForRequest += `${[key]}: $${[key]} `;
        });
        xhr.send(
          JSON.stringify({
            query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
            variables: variables.values,
          }),
        );
      }
    });
  }

  create(data) {
    if (this.state.currentPathSchema.resolvers.create) {
      const schema = this.state.currentPathSchema;
      const currentList = this.state.currentPathName;
      const resolver = schema.resolvers.create.resolver;
      let req = '';
      schema.fields.forEach((prop) => {
        if (Object.keys(prop)[0] === '_id' || Object.keys(prop)[0] === 'id') {
          req += `${Object.keys(prop)[0]} `;
        }
      });
      if (!data) {
        throw new Error("data wasn't provided");
      } else if (schema.resolvers.create) {
        this.query('mutation', req, resolver, data)
          .then(() => {
            this.forceUpdate();
            this.showSuccessMs();
            this.routeToList(currentList);
          })
          .catch((err) => {
            this.showErrorMs();
            throw new Error(`create error: ${err}`);
          });
      }
    }
  }

  update() {
    if (this.state.currentPathSchema.resolvers.update) {
      const schema = this.state.currentPathSchema;
      const resolver = schema.resolvers.update.resolver;
      const id = this.state.currentItemId;
      const req = id ? id.split(':')[0] : '';
      const fields = this.state.fields;
      let data = this.collectFieldsData(fields, id, 'update');
      if (!id && data) {
        data = this.collectFieldsData(fields, id, 'create');
        this.create(data);
      } else if (data) {
        if (schema.resolvers.update) {
          this.query('mutation', req, resolver, data)
            .then(() => {
              this.showSuccessMs;
              this.getViewData(id);
            })
            .catch((err) => {
              this.showErrorMs();
              throw new Error(`update error: ${err}`);
            });
        }
      }
    }
  }

  remove(e) {
    if (this.state.currentPathSchema.resolvers.remove) {
      const id = e.target.id;
      const schema = this.state.currentPathSchema;
      const currentList = this.state.currentPathName;
      const resolver = schema.resolvers.remove.resolver;
      const req = id.split(':')[0];
      const data = { values: {}, types: {} };
      data.values[id.split(':')[0]] = id.split(':')[1];
      data.types[id.split(':')[0]] = id.split(':')[2];
      if (!id) {
        throw new Error("id wasn't provided");
      } else if (schema.resolvers.remove) {
        this.query('mutation', req, resolver, data)
          .then(() => {
            this.forceUpdate();
            this.showSuccessMs();
            this.routeToList(currentList);
          })
          .catch((err) => {
            this.showErrorMs();
            throw new Error(`remove error: ${err}`);
          });
      }
    }
  }

  initCMS() {
    const endpoint = this.props.endpoint
      ? this.props.endpoint
      : this.props.route.endpoint;
    fetch(endpoint, { method: 'GET' })
      .then(json => json.json())
      .then((res) => {
        const menuItems = [];
        let newMenuItems = false;
        if (this.props.newMenuItems) {
          newMenuItems = this.props.newMenuItems;
        } else if (this.props.route && this.props.route.newMenuItems) {
          newMenuItems = this.props.route.newMenuItems;
        }
        Object.keys(res).forEach((type) => {
          menuItems.push({ label: res[type].label, typeName: type });
        });
        this.setState(
          {
            schema: res,
            SideMenuItems: menuItems,
            newMenuItemSecret:
              newMenuItems && newMenuItems[0] ? newMenuItems[0].secret : false,
          },
          () => {
            if (!this.state.newMenuItemSecret) {
              const prop = this.state.SideMenuItems[0].typeName;
              this.getCurrentViewFields(this.state.schema[prop], prop);
            } else {
              this.forceUpdate();
            }
          },
        );
      })
      .catch((err) => {
        throw new Error(err);
      });
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
    Object.keys(data.types).forEach((arg) => {
      if (data.types[arg].slice(-1) === '!') {
        if (typeof data.values[arg] !== 'boolean' && !data.values[arg]) {
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
    });
    return response;
  }

  nextPage() {
    const { offset, lastPage } = this.state;
    if (!lastPage) {
      this.setState(
        {
          offset: offset + 50,
        },
        this.getListData,
      );
    }
  }

  previewsPage() {
    const { offset } = this.state;
    if (offset) {
      this.setState(
        {
          offset: offset - 50,
        },
        this.getListData,
      );
    }
  }

  addNewItem() {
    if (this.state.currentPathSchema.resolvers.create) {
      this.setState(
        {
          viewMode: true,
          viewData: false,
          currentItemId: false,
        },
        this.forceUpdate,
      );
    }
  }

  routeToList(path) {
    this.setState(
      {
        currentPathName: path,
        newMenuItemSecret: false,
        viewData: false,
        viewMode: false,
        listData: false,
        currentPathSchema: false,
        currentItemId: false,
        limit: 50,
        fields: false,
        offset: 0,
      },
      () => {
        this.getCurrentViewFields(
          this.state.schema[this.state.currentPathName],
          [this.state.currentPathName],
        );
      },
    );
  }

  routeToView(e) {
    this.getViewData(e.target.id);
  }

  collectFieldsData(fields, id, action, prefix) {
    const schema = { ...this.state.currentPathSchema };
    let data = { values: {}, types: {} };

    function getCurrentFieldData(id, type, prefix) {
      const pr = prefix ? `${prefix}/` : '';
      switch (type || type.slice(0, -1)) {
        case 'Int':
          return Number(document.getElementById(`${pr}${id}`).value);
        case 'Float':
          return Number(document.getElementById(`${pr}${id}`).value);
        case 'Boolean':
          return document.getElementById(`${pr}${id}`).checked;
        case 'String':
          return document.getElementById(`${pr}${id}`).value;
        case 'file':
          return document.getElementById(`${pr}${id}-p`).innerHTML;
        case 'selection':
          return document.getElementById(`${pr}${id}`).firstChild
            .selectedOptions;
        default:
          return document.getElementById(`${pr}${id}`).value;
      }
    }

    function getCurrentFieldMutationType(propName, schema, type, action) {
      let response = type;
      if (
        schema.resolvers.create &&
        schema.resolvers.create.args[propName] &&
        action === 'create'
      ) {
        response = schema.resolvers.create.args[propName];
      } else if (
        schema.resolvers.update &&
        schema.resolvers.update.args[propName] &&
        action === 'update'
      ) {
        response = schema.resolvers.update.args[propName];
      }
      return response;
    }

    function getNestedFieldsData(nestedFields, propName) {
      const tmpData = {};
      nestedFields.forEach((field) => {
        if (!field.nestedFields) {
          tmpData[Object.keys(field)[0]] = getCurrentFieldData(
            Object.keys(field)[0],
            field[Object.keys(field)[0]].fieldType,
            propName,
            prefix,
          );
        } else {
          const key = Object.keys(field)[0];
          tmpData[key] = getNestedFieldsData(field[key].nestedFields, key);
        }
      });
      return tmpData;
    }

    function checkIfDisabled(field, propName) {
      let method = false;
      if (action && action === 'update' && schema.resolvers.update) {
        method = schema.resolvers.update.args;
      } else if (action && action === 'create' && schema.resolvers.create) {
        method = schema.resolvers.create.args;
      }
      let result = method && method[propName] ? field[propName].disabled : true;
      if (prefix) result = false;
      return result;
    }

    if (!action) {
      data = {};
      fields.forEach((fieldObj) => {
        const propName = Object.keys(fieldObj)[0];
        const type = fieldObj[propName].fieldType;
        if (
          fieldObj[propName].nestedFields &&
          fieldObj[propName].inputControl !== 'selection'
        ) {
          data[propName] = JSON.stringify(
            getNestedFieldsData(fieldObj[propName].nestedFields, propName),
          );
        } else if (!checkIfDisabled(fieldObj, propName)) {
          if (
            propName !== 'id' &&
            propName !== '_id' &&
            propName !== 'offset' &&
            propName !== 'limit' &&
            fieldObj[propName].inputType !== 'file' &&
            fieldObj[propName].inputControl !== 'selection'
          ) {
            data[propName] = getCurrentFieldData(propName, type, prefix);
          } else if (fieldObj[propName].inputType === 'file') {
            data.values[propName] = getCurrentFieldData(
              propName,
              'file',
              prefix,
            );
            data.types[propName] = 'String';
          } else if (fieldObj[propName].inputControl === 'selection') {
            const ref = this.refs.View;
            const selectValue = getCurrentFieldData(
              propName,
              'selection',
              prefix,
            );
            const valuesData = [];
            Object.keys(selectValue).forEach((node) => {
              valuesData.push(
                ref.state[`${propName}Data`][selectValue[node].value],
              );
            });
            data[propName] = JSON.stringify(valuesData);
          }
        }
      });
    } else {
      fields.forEach((fieldObj) => {
        const propName = Object.keys(fieldObj)[0];
        const type = fieldObj[propName].fieldType;
        if (
          fieldObj[propName].nestedFields &&
          fieldObj[propName].inputControl !== 'selection'
        ) {
          data.values[propName] = JSON.stringify(
            getNestedFieldsData(fieldObj[propName].nestedFields, propName),
          );
          data.types[propName] = 'String';
        } else if (!checkIfDisabled(fieldObj, propName)) {
          if (
            propName !== 'id' &&
            propName !== '_id' &&
            propName !== 'offset' &&
            propName !== 'limit' &&
            fieldObj[propName].inputType !== 'file' &&
            fieldObj[propName].inputControl !== 'selection'
          ) {
            data.values[propName] = getCurrentFieldData(propName, type, prefix);
            data.types[propName] = getCurrentFieldMutationType(
              propName,
              schema,
              type,
              action,
            );
          } else if (fieldObj[propName].inputType === 'file') {
            data.values[propName] = getCurrentFieldData(
              propName,
              'file',
              prefix,
            );
            data.types[propName] = 'String';
          } else if (fieldObj[propName].inputControl === 'selection') {
            const ref = this.refs.View;
            const selectValue = getCurrentFieldData(
              propName,
              'selection',
              prefix,
            );
            const valuesData = [];
            Object.keys(selectValue).forEach((node) => {
              valuesData.push(
                ref.state[`${propName}Data`][selectValue[node].value],
              );
            });
            data.values[propName] = JSON.stringify(valuesData);
            data.types[propName] = 'String';
          } else if (id) {
            if (!data.values[id.split(':')[0]]) {
              data.values[id.split(':')[0]] = id.split(':')[1];
              data.types[id.split(':')[0]] = id.split(':')[2];
            } else {
              data.values[propName] = getCurrentFieldData(propName, type);
              data.types[propName] = getCurrentFieldMutationType(
                propName,
                schema,
                type,
                action,
              );
            }
          }
        }
      });
    }
    if (action && this.validateFields(data)) {
      return data;
    }
    return data;
  }

  handleNewMenuClick(label) {
    this.setState(
      {
        newMenuItemSecret: label,
        viewData: false,
        listData: false,
        currentPathSchema: false,
        currentPathName: false,
        viewMode: false,
        currentItemId: false,
        limit: 50,
        offset: 0,
        lastPage: false,
      },
      this.forceUpdate,
    );
  }

  uploadImage(e) {
    e.preventDefault();
    if (e.currentTarget.files[0]) {
      const endpoint = this.props.endpoint
        ? this.props.endpoint
        : this.props.route.endpoint;
      const fileFromInput = e.currentTarget.files[0];
      const folderPath = this.state.currentPathSchema.uploadPath
        ? `/${this.state.currentPathSchema.uploadPath}`
        : `/${this.state.currentPathSchema.typeName}`;
      const massage = e.currentTarget.previousElementSibling;
      const fd = new FormData();
      fd.append('file', fileFromInput, [fileFromInput.name, folderPath]);
      massage.innerHTML = fileFromInput.name;
      fetch(endpoint, { method: 'POST', body: fd }).catch((err) => {
        throw new Error(`error: ${err}`);
      });
    }
  }

  uploadFile(file) {
    const endpoint = this.props.endpoint
      ? this.props.endpoint
      : this.props.route.endpoint;
    const fileFromInput = file;
    const folderPath = this.state.currentPathSchema.uploadPath
      ? `/${this.state.currentPathSchema.uploadPath}`
      : `/${this.state.currentPathSchema.typeName}`;
    // const message = e.currentTarget.previousElementSibling;
    const fd = new FormData();
    fd.append('file', fileFromInput, [fileFromInput.name, folderPath]);
    return fetch(endpoint, { method: 'POST', body: fd })

  }

  test() {
    const {
      schema,
      currentPathSchema,
      fields,
      viewData,
      offset,
      lastPage,
      listData,
      SideMenuItems,
      viewMode,
      currentItemId,
      newMenuItemSecret,
    } = this.state;
    const {
      routeToList,
      routeToView,
      routeToAdd,
      addNewItem,
      uploadImage,
      getRequestString,
      nextPage,
      previewsPage,
      query,
      update,
      remove,
      handleNewMenuClick,
      collectFieldsData,
    } = this;
    let newMenuItems = false;
    if (this.props.newMenuItems) {
      newMenuItems = this.props.newMenuItems;
    } else if (this.props.route && this.props.route.newMenuItems) {
      newMenuItems = this.props.route.newMenuItems;
    }

    let resolverForList = false;
    let NewMenuView = false;
    if (newMenuItemSecret && newMenuItems) {
      NewMenuView = newMenuItems.find(item => item.secret === newMenuItemSecret)
        .view.component;
    } else {
      resolverForList = currentPathSchema.resolvers.find.resolver;
    }

    console.log(
      JSON.stringify(
        {
          state: this.state,
          data: !viewData
            ? false
            : viewData.data[resolverForList][0]
              ? viewData.data[resolverForList][0]
              : viewData.data[resolverForList],
          listD: listData.data[resolverForList],
        },
        null,
        2,
      ),
    );
  }

  render() {
    const { Column } = Grid;
    const {
      schema,
      currentPathSchema,
      fields,
      viewData,
      offset,
      lastPage,
      listData,
      SideMenuItems,
      viewMode,
      currentItemId,
      newMenuItemSecret,
    } = this.state;
    const {
      routeToList,
      routeToView,
      routeToAdd,
      addNewItem,
      uploadImage,
      uploadFile,
      getRequestString,
      nextPage,
      previewsPage,
      query,
      update,
      remove,
      handleNewMenuClick,
      collectFieldsData,
    } = this;
    let newMenuItems = false;
    if (this.props.newMenuItems) {
      newMenuItems = this.props.newMenuItems;
    } else if (this.props.route && this.props.route.newMenuItems) {
      newMenuItems = this.props.route.newMenuItems;
    }
    if (!schema) {
      return (
        <Segment className="loading-block">
          <div className="ui active dimmer">
            <Loader content="Loading" />
          </div>
        </Segment>
      );
    }
    let resolverForList = false;
    let NewMenuView = false;
    if (newMenuItemSecret && newMenuItems) {
      NewMenuView = newMenuItems.find(item => item.secret === newMenuItemSecret)
        .view.component;
    } else {
      resolverForList = currentPathSchema.resolvers.find.resolver;
    }

    return (
      <Grid className="graphql-cms">
        <Column computer={3} mobile={16}>
          {/*<button onClick={this.test.bind(this)}>click</button>*/}
          <SideMenu
            newMenuItems={newMenuItems}
            items={SideMenuItems}
            handleNewMenuClick={handleNewMenuClick}
            routeToList={routeToList}
          />
        </Column>
        <Message color="green" id="ms-success">
          Success!
        </Message>
        <Message color="red" id="ms-error">
          Error!
        </Message>
        <Column computer={13} mobile={16}>
          {viewMode ? (
            !viewData && currentItemId ? (
              <Segment className="loading-block">
                <div className="ui active dimmer">
                  <Loader content="Loading" />
                </div>
              </Segment>
            ) : (
              <View
                ref="View"
                query={query}
                data={
                  !viewData
                    ? false
                    : viewData.data[resolverForList][0]
                      ? viewData.data[resolverForList][0]
                      : viewData.data[resolverForList]
                }
                fields={fields}
                update={update}
                remove={remove}
                currentItemId={currentItemId}
                addNewItem={addNewItem}
                routeToAdd={routeToAdd}
                uploadImage={uploadImage}
                uploadFile={uploadFile}
                collectFieldsData={collectFieldsData}
                getRequestString={getRequestString}
                schema={currentPathSchema}
              />
            )
          ) : !listData ? (
            !newMenuItemSecret ? (
              <Segment className="loading-block">
                <div className="ui active dimmer">
                  <Loader content="Loading" />
                </div>
              </Segment>
            ) : (
              <Segment color="black" className="View">
                <NewMenuView />
              </Segment>
            )
          ) : (
            <List
              remove={remove}
              offset={offset}
              lastPage={lastPage}
              nextPage={nextPage}
              previewsPage={previewsPage}
              addNewItem={addNewItem}
              routeToView={routeToView}
              data={listData.data[resolverForList]}
              schema={currentPathSchema}
            />
          )}
        </Column>
      </Grid>
    );
  }
}

export default Layout;
