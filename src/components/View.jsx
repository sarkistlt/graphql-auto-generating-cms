import React, { Component } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  Form,
  Grid,
  Icon,
  Modal,
  Popup,
  Segment,
  Container,
  TextArea,
  Card,
} from 'semantic-ui-react';

// const propTypes = {
//   schema: PropTypes.object,
//   query: PropTypes.func,
//   data: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.bool,
//   ]),
//   fields: PropTypes.array,
//   update: PropTypes.func,
//   collectFieldsData: PropTypes.func,
//   getRequestString: PropTypes.func,
//   remove: PropTypes.func,
//   currentItemId: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.bool,
//   ]),
//   uploadImage: PropTypes.func,
//   addNewItem: PropTypes.func,
// };
import Editor from './Editor';
import Markdown from './Markdown';

class View extends Component {
  constructor(...args) {
    super(...args);
    this.getOptionsForModal = this.getOptionsForModal.bind(this);
    this.addSelectOption = this.addSelectOption.bind(this);
    this.generateModal = this.generateModal.bind(this);
    this.getSelectData = this.getSelectData.bind(this);
    this.generateFields = this.generateFields.bind(this);
    this.checkIfDisabled = this.checkIfDisabled.bind(this);
    this.getPopupImgPath = this.getPopupImgPath.bind(this);
    this.initStatesForSelector = this.initStatesForSelector.bind(this);
    this.editText = this.editText.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      schema: this.props.schema,
      fields: this.props.fields,
      data: this.props.data,
      currentItemId: this.props.currentItemId,
      popupImgLink: false,
    };
    this.initStatesForSelector(this.props.fields);
  }

  componentWillMount() {
    const { fields, data } = this.state;
    this.getSelectData(fields, data);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.data)
    this.setState({
      data: nextProps.data,
      currentItemId: nextProps.currentItemId,
    });
  }

  getDateValue(arg) {
    const date = new Date(arg);
    const y = `0000${date.getFullYear()}`.slice(-4);
    const m = `00${date.getMonth() + 1}`.slice(-2);
    const d = `00${date.getDate()}`.slice(-2);
    return `${y}-${m}-${d}`;
  }

  getSelectData(fields, data) {
    fields.forEach((field) => {
      const propName = Object.keys(field)[0];
      if (field[propName].inputControl === 'selection') {
        const options = [];
        const defaultOptions = [];
        const dataForOptions = [];
        const label = field[propName].list.label
          ? field[propName].list.label
          : Object.keys(field[propName].nestedFields[1])[0];
        let hasOwnAPI = false;
        if (
          Object.keys(field[propName].list.resolvers.find.args).length !== 0 &&
          ((field[propName].list.resolvers.create &&
            Object.keys(field[propName].list.resolvers.create.args).length !==
              0) ||
            (field[propName].list.resolvers.update &&
              Object.keys(field[propName].list.resolvers.update.args).length !==
                0))
        ) {
          hasOwnAPI = true;
        }

        if (!hasOwnAPI && data) {
          data[propName].forEach((obj, idx) => {
            defaultOptions.push(idx);
            dataForOptions.push(obj);
            options.push({ text: obj[label], value: idx });
          });
        } else if (hasOwnAPI) {
          const resolver = field[propName].list.resolvers.find.resolver;
          const request = this.props.getRequestString(
            field[propName].nestedFields,
          );
          this.props
            .query('query', request, resolver)
            .then((res) => {
              res.data[
                field[propName].list.resolvers.find.resolver
              ].forEach((obj, idx) => {
                dataForOptions.push(obj);
                options.push({ text: obj[label], value: idx });
                let statement;
                if (data) {
                  data[propName].forEach((item) => {
                    if (Object.prototype.hasOwnProperty.call(item, 'id')) {
                      statement = item.id === obj.id;
                    } else if (
                      Object.prototype.hasOwnProperty.call(item, '_id')
                    ) {
                      statement = item._id === obj._id;
                    }
                    if (data && statement) defaultOptions.push(idx);
                  });
                }
              });
              this.setState(
                {
                  [`${propName}DefaultValue`]: defaultOptions,
                },
                () => setTimeout(() => this.refs[propName].forceUpdate(), 1),
              );
            })
            .catch((err) => {
              throw new Error(`${propName}, getSelectData, error: ${err}`);
            });
        }
        this.setState(
          {
            [`${propName}DefaultValue`]: defaultOptions,
            [`${propName}Data`]: dataForOptions,
            [propName]: options,
          },
          () => setTimeout(() => this.refs[propName].forceUpdate(), 1),
        );
      }
    });
  }

  getOptionsForModal(e, fields) {
    e.preventDefault();
    this.getSelectData(fields);
  }

  getPopupImgPath(propName) {
    if (propName) {
      const p = document.getElementById(`${propName}-p`);
      const uploadPath = this.props.schema.uploadPath
        ? this.fixPath(this.props.schema.uploadPath)
        : this.props.schema.typeName;
      this.setState({ popupImgLink: `${uploadPath}/${p.innerText}` });
    }
  }

  fixPath(string) {
    let response = '';
    if (string.slice(0, 1) === '/' || string.slice(0, 1) === '.') {
      response = string;
    } else {
      response = `/${string}`;
    }
    if (response.slice(-1) === '/') {
      response = response.slice(0, -1);
    }
    return response;
  }

  isDate(val) {
    const d = new Date(val);
    return (
      !isNaN(d.valueOf()) &&
      typeof val !== 'boolean' &&
      typeof val !== 'number' &&
      typeof +val !== 'number'
    );
  }

  addSelectOption(e, { label, fields }) {
    const propName = e.currentTarget.name;
    const data = this.props.collectFieldsData(fields, false, false, propName);
    const newState = this.state[propName];
    const newData = this.state[`${propName}Data`]
      ? this.state[`${propName}Data`]
      : [];
    newState.push({
      text: label ? data[label] : data[Object.keys(data)[1]],
      value: +newState.length,
    });
    newData.push(data);
    this.setState(
      {
        [propName]: newState,
        [`${propName}Data`]: newData,
      },
      () => {
        document.querySelector('.modals').click();
      },
    );
  }

  checkIfDisabled(field, propName) {
    let method = false;
    const { schema } = this.state;
    if (schema.resolvers.update) {
      method = schema.resolvers.update.args;
    } else if (schema.resolvers.create) {
      method = schema.resolvers.create.args;
    }
    const result = method && method[propName] ? field[propName].disabled : true;
    return result;
  }

  checkOnEnterIfTextarea(e) {
    if (e.target.nodeName === 'INPUT' && e.target.value.length > 100) {
      const textarea = document.createElement('textarea');
      textarea.id = e.target.id;
      textarea.placeholder = e.target.placeholder;
      textarea.innerText = e.target.value;
      e.target.parentNode.insertBefore(textarea, e.target);
      e.target.parentNode.removeChild(e.target);
      document.getElementById(textarea.id).focus();
    }
  }

  initStatesForSelector(fields) {
    fields.forEach((field) => {
      if (field[Object.keys(field)[0]].inputControl === 'selection') {
        this.state[Object.keys(field)[0]] = [];
      }
    });
  }

  generateModal(fields, propName) {
    const to = (fields[propName].nestedFields.length / 2).toFixed(0);
    const from = fields[propName].nestedFields.length - to;
    return (
      <Modal
        id={`${propName}Modal`}
        trigger={
          <Button
            icon
            className="selector-add"
            onClick={e =>
              this.getOptionsForModal(e, fields[propName].nestedFields)}
          >
            <Icon name="plus" />
          </Button>
        }
        className="graphql-cms_modal graphql-cms"
      >
        <Modal.Header>
          Add new select option for "{propName}"
          <div className="btn-row">
            <Button
              type="submit"
              color="black"
              name={propName}
              onClick={e =>
                this.addSelectOption(e, {
                  fields: fields[propName].nestedFields,
                  label: fields[propName].list.label,
                })}
            >
              add
            </Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <Grid as={Form}>
            <Grid.Column computer={8} mobile={16}>
              {fields[propName].nestedFields
                .slice(0, to)
                .map((field, idx) =>
                  this.generateFields(field, idx, false, false, `${propName}/`),
                )}
            </Grid.Column>
            <Grid.Column computer={8} mobile={16}>
              {fields[propName].nestedFields
                .slice(-from)
                .map((field, idx) =>
                  this.generateFields(field, idx, false, false, `${propName}/`),
                )}
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }

  editText(node) {
    this.setState({ editText: node });
  }

  update() {
    this.setState({ editText: null });
    this.props.update();
  }
  generateFields(obj, idx, data, dis, prefix) {
    const pr = prefix || '';
    const fields = { ...obj };
    const propName = Object.keys(fields)[0];
    const { popupImgLink } = this.state;
    let value = '';
    let checked = '';
    let dateInput = false;
    let disabled =
      typeof dis === 'boolean' ? dis : this.checkIfDisabled(fields, propName);
    let control = fields[propName].inputControl;
    let DOM;
    if (
      fields[propName].nestedFields &&
      fields[propName].nestedFields[0] &&
      fields[propName].inputControl !== 'selection'
    ) {
      disabled = fields[propName].disabled;
      const newData = data ? data[propName] : false;
      return (
        <div className="nestedFields" key={idx}>
          <Divider horizontal>
            {propName} <Icon name="level down" />
          </Divider>
          {fields[propName].nestedFields.map((fields, index) =>
            this.generateFields(
              fields,
              index + 300,
              newData,
              disabled,
              `${propName}/`,
            ),
          )}
          <Divider horizontal>
            {propName} <Icon name="level up" />
          </Divider>
        </div>
      );
    }
    if (
      data &&
      (data[propName] || typeof data[propName] === 'boolean') &&
      fields[propName].inputType !== 'file'
    ) {
      value = data[propName];
      if (value.length > 100) {
        control = 'textarea';
      }
    } else {
      value = '';
    }
    if (data && fields[propName].inputType === 'checkbox') {
      checked = !data ? false : data[propName];
    } else {
      checked = false;
    }
    if (
      this.isDate(value) ||
      propName === 'createdAt' ||
      propName === 'updatedAt' ||
      propName === 'deletedAt' ||
      fields[propName].inputType === 'date'
    ) {
      dateInput = 'date';
      value = !data ? '' : this.getDateValue(value);
    }
    const type = dateInput || fields[propName].inputType;
    if (
      data ||
      (propName !== 'id' &&
        propName !== '_id' &&
        propName !== 'offset' &&
        propName !== 'limit')
    ) {
      if (type === 'file') {
        DOM = (
          <div className="file-form" key={idx}>
            <Button
              as="label"
              content={fields[propName].label}
              className="file-form-btn"
              icon="upload"
              disabled={disabled}
              labelPosition="right"
              htmlFor={`${pr}${propName}-input`}
            />
            <Popup
              onMount={() => this.getPopupImgPath(propName)}
              onClose={() => this.getPopupImgPath(false)}
              name={propName}
              trigger={
                <p className="file-name" id={`${pr}${propName}-p`}>
                  {data[propName]}
                </p>
              }
            >
              <img
                id={`${pr}${propName}-img`}
                src={popupImgLink}
                alt={propName}
              />
            </Popup>
            <input
              disabled={disabled}
              onChange={this.props.uploadImage}
              id={`${pr}${propName}-input`}
              type="file"
            />
          </div>
        );
      } else if (fields[propName].inputControl === 'selection') {
        const options = this.state[propName];
        let hasOwnAPI = false;
        if (
          Object.keys(fields[propName].list.resolvers.find.args).length !== 0 &&
          ((fields[propName].list.resolvers.create &&
            Object.keys(fields[propName].list.resolvers.create.args).length !==
              0) ||
            (fields[propName].list.resolvers.update &&
              Object.keys(fields[propName].list.resolvers.update.args)
                .length !== 0))
        ) {
          hasOwnAPI = true;
        }
        DOM = (
          <div className="file-form" key={idx}>
            <label>{fields[propName].label}</label>
            {!hasOwnAPI ? this.generateModal(fields, propName) : null}
            {options && Array.isArray(this.state[`${propName}DefaultValue`]) ? (
              <Dropdown
                ref={propName}
                placeholder={fields[propName].label}
                id={`${pr}${propName}`}
                fluid
                multiple
                selection
                search
                defaultValue={this.state[`${propName}DefaultValue`]}
                options={options}
              />
            ) : null}
          </div>
        );
      } else if (type === 'markdown') {
        DOM = (
          <Markdown
            key={idx}
            id={`${pr}${propName}`}
            value={value}
            label={fields[propName].label}
            onEdit={this.editText}
          />
        );
      } else {
        DOM = (
          <Form.Field
            key={idx}
            label={fields[propName].label}
            control={control}
            type={type}
            id={`${pr}${propName}`}
            defaultValue={value}
            defaultChecked={checked}
            onInput={this.checkOnEnterIfTextarea}
            disabled={disabled}
            placeholder={propName}
          />
        );
      }
    }
    return DOM;
  }

  render() {
    const { Column } = Grid;
    const { fields, schema, currentItemId, data } = this.state;
    const { update, remove, addNewItem } = this.props;
    const { generateFields } = this;
    const to = (fields.length / 2).toFixed(0);
    const from = fields.length - to;
    return (
      <div>
        {this.state.editText ? (
          <Editor
            element={this.state.editText}
            upload={this.props.uploadFile}
            path={
              this.props.schema.uploadPath
                ? this.fixPath(this.props.schema.uploadPath)
                : this.props.schema.typeName
            }
          />
        ) : null}
        <Segment color="black" className="View">
          <div className="btn-row">
            {currentItemId ? (
              <Button
                type="submit"
                color="black"
                onClick={addNewItem}
                disabled={
                  !schema.resolvers.create || !schema.resolvers.create.allowed
                }
              >
                add new
              </Button>
            ) : null}
            <Button
              type="submit"
              color="black"
              onClick={!schema.resolvers.update ? null : this.update}
              disabled={
                !schema.resolvers.update || !schema.resolvers.update.allowed
              }
            >
              save
            </Button>
            <Button
              type="submit"
              color="black"
              id={currentItemId}
              onClick={!schema.resolvers.remove ? null : remove}
              disabled={
                !schema.resolvers.remove || !schema.resolvers.remove.allowed
              }
            >
              remove
            </Button>
          </div>
          <Grid as={Form}>
            <Grid.Row columns={2}>
              <Column computer={8} mobile={16}>
                {fields
                  .slice(0, to)
                  .map((field, idx) => generateFields(field, idx, data))}
              </Column>
              <Column computer={8} mobile={16}>
                {fields
                  .slice(-from)
                  .map((field, idx) => generateFields(field, idx, data))}
              </Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Container />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row />
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default View;
