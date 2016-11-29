import React, { PropTypes, Component } from 'react';
import {
  Segment,
  Grid,
  Form,
  Button,
  Divider,
  Icon,
  Popup,
  Dropdown,
  Modal
} from 'semantic-ui-react';

const propTypes = {
  schema: PropTypes.object,
  query: PropTypes.func,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.boolean
  ]),
  fields: PropTypes.array,
  update: PropTypes.func,
  _collectFieldsData: PropTypes.func,
  getRequestString: PropTypes.func,
  remove: PropTypes.func,
  currentItemId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean
  ]),
  _uploadImage: PropTypes.func,
  _addNewItem: PropTypes.func
};

class View extends Component {
  constructor(...args) {
    super(...args);
    this.getOptionsForModal = ::this.getOptionsForModal;
    this.generateModal = ::this.generateModal;
    this.getSelectData = ::this.getSelectData;
    this.generateFields = ::this.generateFields;
    this.checkIfDisabled = ::this.checkIfDisabled;
    this.initStatesForSelector = ::this.initStatesForSelector;
    
    this.state = {
      schema: this.props.schema,
      fields: this.props.fields,
      data: this.props.data,
      currentItemId: this.props.currentItemId,
      popupImgLink: false
    };
    
    this.initStatesForSelector(this.props.fields);
  }
  
  componentWillMount() {
    let { fields, data } = this.state;
    this.getSelectData(fields, data);
  }
  
  componentWillReceiveProps() {
    this.setState({
      data: this.props.data,
      currentItemId: this.props.currentItemId
    });
  }
  
  initStatesForSelector(fields) {
    fields.forEach(field => {
      if (field[Object.keys(field)[0]].inputControl === 'selection') {
        this.state[Object.keys(field)[0]] = [];
      }
    });
  }
  
  getDateValue(arg) {
    let date = new Date(arg),
      y = date.getFullYear(),
      m = (date.getMonth() + 1).toString().length === 2 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
      d = date.getDate().toString().length === 2 ? date.getDate() : `0${date.getDate()}`;
    return `${y}-${m}-${d}`;
  }
  
  checkOnEnterIfTextarea(e) {
    if (e.target.nodeName === 'INPUT' && e.target.value.length > 100) {
      let textarea = document.createElement('textarea');
      textarea.id = e.target.id;
      textarea.placeholder = e.target.placeholder;
      textarea.innerText = e.target.value;
      
      e.target.parentNode.insertBefore(textarea, e.target);
      e.target.parentNode.removeChild(e.target);
      document.getElementById(textarea.id).focus();
    }
  }
  
  checkIfDisabled(field, propName) {
    let method = this.state.data ?
      this.state.schema.resolvers.update.args : this.state.schema.resolvers.create.args;
    
    return method[propName] ? field[propName].disabled : true;
  }
  
  getOptionsForModal(fields, e) {
    e.preventDefault();
    this.getSelectData(fields);
  }
  
  addSelectOption({ label, fields }, e) {
    let propName = e.currentTarget.name,
      data = this.props._collectFieldsData(fields, false, false, propName),
      newState = this.state[propName],
      newData = this.state[`${propName}Data`] ? this.state[`${propName}Data`] : [];
    
    newState.push({
      text: label ? data[label] : data[Object.keys(data)[1]],
      value: +newState.length
    });
    newData.push(data);
    
    this.setState({
      [propName]: newState,
      [`${propName}Data`]: newData
    }, () => {
      document.querySelector('.modals').click();
    });
  }
  
  isDate(val) {
    var d = new Date(val);
    return !isNaN(d.valueOf()) &&
      typeof (val) !== 'boolean' &&
      typeof (val) !== 'number' &&
      typeof (+val) !== 'number';
  }
  
  fixPath(string) {
    let result = '';
    string.slice(0, 1) === '/' || string.slice(0, 1) === '.' ? result = string : result = `/${string}`;
    result.slice(-1) === '/' ? result = result.slice(0, -1) : null;
    return result;
  }
  
  getPopupImgPath(propName) {
    if (propName) {
      let p = document.getElementById(`${propName}-p`),
        uploadPath = this.props.schema.uploadPath ?
          this.fixPath(this.props.schema.uploadPath) : this.props.schema.typeName;
      
      this.setState({ popupImgLink: `${uploadPath}/${p.innerText}` });
    }
  }
  
  getSelectData(fields, data) {
    fields.forEach(field => {
      let propName = Object.keys(field)[0];
      
      if (field[propName].inputControl === 'selection') {
        let options = [],
          defaultOptions = [],
          dataForOptions = [],
          label = field[propName].list.label ?
            field[propName].list.label : Object.keys(field[propName].nestedFields[1])[0],
          hasOwnAPI = Object.keys(field[propName].list.resolvers.find.args).length !== 0 &&
            Object.keys(field[propName].list.resolvers.create.args).length !== 0;
        
        if (!hasOwnAPI && data) {
          data[propName].forEach((obj, idx) => {
            defaultOptions.push(idx);
            dataForOptions.push(obj);
            options.push({ text: obj[label], value: idx });
          });
        } else if (hasOwnAPI) {
          let resolver = field[propName].list.resolvers.find.resolver,
            request = this.props.getRequestString(field[propName].nestedFields);
          
          this.props.query('query', request, resolver)
            .then(res => {
              res.data[field[propName].list.resolvers.find.resolver].forEach((obj, idx) => {
                dataForOptions.push(obj);
                options.push({ text: obj[label], value: idx });
                
                if (data && data[propName].find(item => {
                    if (item.id) {
                      return item.id === obj.id;
                    } else if (item._id) {
                      return item._id === obj._id;
                    }
                  })) {
                  defaultOptions.push(idx);
                }
              });
            })
            .catch(err => console.log(`${propName}, getSelectData, error: ${err}`));
        }
        
        this.setState({
          [`${propName}DefaultValue`]: defaultOptions,
          [`${propName}Data`]: dataForOptions,
          [propName]: options
        }, () => {
          setTimeout(() => this.refs[propName].forceUpdate(), 1);
        });
      }
    });
  }
  
  generateModal(field, propName) {
    let to = (field[propName].nestedFields.length / 2).toFixed(0),
      from = field[propName].nestedFields.length - to;
    
    return (
      <Modal
        id={`${propName}Modal`}
        trigger={
          <Button icon
                  className='selector-add'
                  onClick={this.getOptionsForModal.bind(this, field[propName].nestedFields)}>
            <Icon name='plus'/>
          </Button>
        }
        className='graphql-cms_modal graphql-cms'>
        <Modal.Header>
          Add new select option for "{propName}"
          <div className='btn-row'>
            <Button type='submit' color='black'
                    name={propName}
                    onClick={this.addSelectOption.bind(this, {
                      fields: field[propName].nestedFields,
                      label: field[propName].list.label
                    })}>
              add
            </Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <Grid as={Form}>
            <Grid.Column computer={8} mobile={16}>
              {field[propName].nestedFields.slice(0, to).map((field, idx) =>
                this.generateFields(field, idx, false, false, `${propName}/`)
              )}
            </Grid.Column>
            <Grid.Column computer={8} mobile={16}>
              {field[propName].nestedFields.slice(-from).map((field, idx) =>
                this.generateFields(field, idx, false, false, `${propName}/`)
              )}
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
  
  generateFields(obj, idx, data, dis, prefix) {
    let pr = prefix ? prefix : '',
      field = { ...obj },
      propName = Object.keys(field)[0],
      value = '',
      checked = '',
      dateInput = false,
      disabled = typeof (dis) === 'boolean' ? dis : this.checkIfDisabled(field, propName),
      control = field[propName].inputControl,
      _uploadImage = this.props._uploadImage,
      { popupImgLink } = this.state;
    
    if (field[propName].nestedFields &&
      field[propName].nestedFields[0] &&
      field[propName].inputControl !== 'selection') {
      disabled = field[propName].disabled;
      let newData = data ? data[propName] : false;
      
      return (
        <div className='nestedFields' key={idx}>
          <Divider horizontal>{propName} <Icon name='level down'/></Divider>
          {field[propName].nestedFields.map((field, idx) =>
            this.generateFields(field, idx + 300, newData, disabled, `${propName}/`)
          )}
          <Divider horizontal>{propName} <Icon name='level up'/></Divider>
        </div>
      );
    }
    
    if (data && (data[propName] ||
      typeof (data[propName]) === 'boolean') &&
      field[propName].inputType !== 'file') {
      value = data[propName];
      if (value.length > 100) {
        control = 'textarea';
      }
    } else {
      value = '';
    }
    if (data && field[propName].inputType === 'checkbox') {
      checked = !data ? false : data[propName];
    } else {
      checked = false;
    }
    
    if (this.isDate(value) ||
      propName === 'createdAt' ||
      propName === 'updatedAt' ||
      propName === 'deletedAt' ||
      field[propName].inputType === 'date') {
      dateInput = 'date';
      value = !data ? '' : this.getDateValue(value);
    }
    
    let type = dateInput || field[propName].inputType;
    
    if (data || (propName !== 'id' && propName !== '_id' && propName !== 'offset' && propName !== 'limit')) {
      if (type === 'file') {
        return (
          <div className='file-form' key={idx}>
            <Button
              as='label'
              content={field[propName].label}
              className='file-form-btn'
              icon='upload'
              disabled={disabled}
              labelPosition='right'
              htmlFor={`${pr}${propName}-input`}
            />
            <Popup onMount={this.getPopupImgPath.bind(this, propName)}
                   onClose={this.getPopupImgPath.bind(this, false)}
                   name={propName}
                   trigger={<p className='file-name'
                               id={`${pr}${propName}-p`}>{data[propName]}</p>}>
              <img id={`${pr}${propName}-img`} src={popupImgLink}/>
            </Popup>
            <input disabled={disabled} onChange={_uploadImage} id={`${pr}${propName}-input`}
                   type="file"/>
          </div>
        );
      } else if (field[propName].inputControl === 'selection') {
        let options = this.state[propName],
          defaultOptions = data ? this.state[`${propName}DefaultValue`] : [],
          hasOwnAPI = Object.keys(field[propName].list.resolvers.find.args).length !== 0 &&
            Object.keys(field[propName].list.resolvers.create.args).length !== 0;
        
        return (
          <div className='file-form' key={idx}>
            <label>{field[propName].label}</label>
            {!hasOwnAPI ? this.generateModal(field, propName) : null}
            {options ?
              <Dropdown
                ref={propName}
                placeholder={field[propName].label}
                id={`${pr}${propName}`}
                fluid
                multiple
                selection
                search
                defaultValue={defaultOptions}
                options={options}
              /> : null}
          </div>
        );
      } else {
        return (
          <Form.Field
            key={idx}
            label={field[propName].label}
            control={control}
            type={type}
            id={`${pr}${propName}`}
            defaultValue={value}
            defaultChecked={checked}
            onInput={this.checkOnEnterIfTextarea}
            disabled={disabled}
            placeholder={propName}/>
        );
      }
      
    }
  }
  
  render() {
    const { Column } = Grid;
    const { fields, schema, currentItemId, data } = this.state;
    let { update, remove, _addNewItem } = this.props,
      { generateFields } = this,
      to = (fields.length / 2).toFixed(0),
      from = fields.length - to;
    
    return (
      <Segment color='black' className='View'>
        <div className='btn-row'>
          {currentItemId ?
            <Button type='submit' color='black'
                    onClick={_addNewItem}
                    disabled={!schema.resolvers.create}>
              add new
            </Button> : null}
          <Button type='submit' color='black'
                  onClick={!schema.resolvers.update ? null : update}
                  disabled={!schema.resolvers.update}>
            save
          </Button>
          <Button type='submit' color='black'
                  id={currentItemId}
                  onClick={!schema.resolvers.remove ? null : remove}
                  disabled={!schema.resolvers.remove}>
            remove
          </Button>
        </div>
        <Grid as={Form}>
          <Column computer={8} mobile={16}>
            {fields.slice(0, to).map((field, idx) =>
              generateFields(field, idx, data)
            )}
          </Column>
          <Column computer={8} mobile={16}>
            {fields.slice(-from).map((field, idx) =>
              generateFields(field, idx, data)
            )}
          </Column>
        </Grid>
      </Segment>
    );
  }
}

View.propTypes = propTypes;

export default View;