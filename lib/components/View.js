'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _Markdown = require('./Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    var _ref;

    _classCallCheck(this, View);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args)));

    _this.getOptionsForModal = _this.getOptionsForModal.bind(_this);
    _this.addSelectOption = _this.addSelectOption.bind(_this);
    _this.generateModal = _this.generateModal.bind(_this);
    _this.getSelectData = _this.getSelectData.bind(_this);
    _this.generateFields = _this.generateFields.bind(_this);
    _this.checkIfDisabled = _this.checkIfDisabled.bind(_this);
    _this.getPopupImgPath = _this.getPopupImgPath.bind(_this);
    _this.initStatesForSelector = _this.initStatesForSelector.bind(_this);
    _this.editText = _this.editText.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.state = {
      schema: _this.props.schema,
      fields: _this.props.fields,
      data: _this.props.data,
      currentItemId: _this.props.currentItemId,
      popupImgLink: false
    };
    _this.initStatesForSelector(_this.props.fields);
    return _this;
  }

  _createClass(View, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _state = this.state,
          fields = _state.fields,
          data = _state.data;

      this.getSelectData(fields, data);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log(nextProps.data)
      this.setState({
        data: nextProps.data,
        currentItemId: nextProps.currentItemId
      });
    }
  }, {
    key: 'getDateValue',
    value: function getDateValue(arg) {
      var date = new Date(arg);
      var y = ('0000' + date.getFullYear()).slice(-4);
      var m = ('00' + (date.getMonth() + 1)).slice(-2);
      var d = ('00' + date.getDate()).slice(-2);
      return y + '-' + m + '-' + d;
    }
  }, {
    key: 'getSelectData',
    value: function getSelectData(fields, data) {
      var _this2 = this;

      fields.forEach(function (field) {
        var propName = Object.keys(field)[0];
        if (field[propName].inputControl === 'selection') {
          var _this2$setState2;

          var options = [];
          var defaultOptions = [];
          var dataForOptions = [];
          var label = field[propName].list.label ? field[propName].list.label : Object.keys(field[propName].nestedFields[1])[0];
          var hasOwnAPI = false;
          if (Object.keys(field[propName].list.resolvers.find.args).length !== 0 && (field[propName].list.resolvers.create && Object.keys(field[propName].list.resolvers.create.args).length !== 0 || field[propName].list.resolvers.update && Object.keys(field[propName].list.resolvers.update.args).length !== 0)) {
            hasOwnAPI = true;
          }

          if (!hasOwnAPI && data) {
            data[propName].forEach(function (obj, idx) {
              defaultOptions.push(idx);
              dataForOptions.push(obj);
              options.push({ text: obj[label], value: idx });
            });
          } else if (hasOwnAPI) {
            var resolver = field[propName].list.resolvers.find.resolver;
            var request = _this2.props.getRequestString(field[propName].nestedFields);
            _this2.props.query('query', request, resolver).then(function (res) {
              res.data[field[propName].list.resolvers.find.resolver].forEach(function (obj, idx) {
                dataForOptions.push(obj);
                options.push({ text: obj[label], value: idx });
                var statement = void 0;
                if (data) {
                  data[propName].forEach(function (item) {
                    if (Object.prototype.hasOwnProperty.call(item, 'id')) {
                      statement = item.id === obj.id;
                    } else if (Object.prototype.hasOwnProperty.call(item, '_id')) {
                      statement = item._id === obj._id;
                    }
                    if (data && statement) defaultOptions.push(idx);
                  });
                }
              });
              _this2.setState(_defineProperty({}, propName + 'DefaultValue', defaultOptions), function () {
                return setTimeout(function () {
                  return _this2.refs[propName].forceUpdate();
                }, 1);
              });
            }).catch(function (err) {
              throw new Error(propName + ', getSelectData, error: ' + err);
            });
          }
          _this2.setState((_this2$setState2 = {}, _defineProperty(_this2$setState2, propName + 'DefaultValue', defaultOptions), _defineProperty(_this2$setState2, propName + 'Data', dataForOptions), _defineProperty(_this2$setState2, propName, options), _this2$setState2), function () {
            return setTimeout(function () {
              return _this2.refs[propName].forceUpdate();
            }, 1);
          });
        }
      });
    }
  }, {
    key: 'getOptionsForModal',
    value: function getOptionsForModal(e, fields) {
      e.preventDefault();
      this.getSelectData(fields);
    }
  }, {
    key: 'getPopupImgPath',
    value: function getPopupImgPath(propName) {
      if (propName) {
        var p = document.getElementById(propName + '-p');
        var uploadPath = this.props.schema.uploadPath ? this.fixPath(this.props.schema.uploadPath) : this.props.schema.typeName;
        this.setState({ popupImgLink: uploadPath + '/' + p.innerText });
      }
    }
  }, {
    key: 'fixPath',
    value: function fixPath(string) {
      var response = '';
      if (string.slice(0, 1) === '/' || string.slice(0, 1) === '.') {
        response = string;
      } else {
        response = '/' + string;
      }
      if (response.slice(-1) === '/') {
        response = response.slice(0, -1);
      }
      return response;
    }
  }, {
    key: 'isDate',
    value: function isDate(val) {
      var d = new Date(val);
      return !isNaN(d.valueOf()) && typeof val !== 'boolean' && typeof val !== 'number' && typeof +val !== 'number';
    }
  }, {
    key: 'addSelectOption',
    value: function addSelectOption(e, _ref2) {
      var _setState;

      var label = _ref2.label,
          fields = _ref2.fields;

      var propName = e.currentTarget.name;
      var data = this.props.collectFieldsData(fields, false, false, propName);
      var newState = this.state[propName];
      var newData = this.state[propName + 'Data'] ? this.state[propName + 'Data'] : [];
      newState.push({
        text: label ? data[label] : data[Object.keys(data)[1]],
        value: +newState.length
      });
      newData.push(data);
      this.setState((_setState = {}, _defineProperty(_setState, propName, newState), _defineProperty(_setState, propName + 'Data', newData), _setState), function () {
        document.querySelector('.modals').click();
      });
    }
  }, {
    key: 'checkIfDisabled',
    value: function checkIfDisabled(field, propName) {
      var method = false;
      var schema = this.state.schema;

      if (schema.resolvers.update) {
        method = schema.resolvers.update.args;
      } else if (schema.resolvers.create) {
        method = schema.resolvers.create.args;
      }
      var result = method && method[propName] ? field[propName].disabled : true;
      return result;
    }
  }, {
    key: 'checkOnEnterIfTextarea',
    value: function checkOnEnterIfTextarea(e) {
      if (e.target.nodeName === 'INPUT' && e.target.value.length > 100) {
        var textarea = document.createElement('textarea');
        textarea.id = e.target.id;
        textarea.placeholder = e.target.placeholder;
        textarea.innerText = e.target.value;
        e.target.parentNode.insertBefore(textarea, e.target);
        e.target.parentNode.removeChild(e.target);
        document.getElementById(textarea.id).focus();
      }
    }
  }, {
    key: 'initStatesForSelector',
    value: function initStatesForSelector(fields) {
      var _this3 = this;

      fields.forEach(function (field) {
        if (field[Object.keys(field)[0]].inputControl === 'selection') {
          _this3.state[Object.keys(field)[0]] = [];
        }
      });
    }
  }, {
    key: 'generateModal',
    value: function generateModal(fields, propName) {
      var _this4 = this;

      var to = (fields[propName].nestedFields.length / 2).toFixed(0);
      var from = fields[propName].nestedFields.length - to;
      return _react2.default.createElement(
        _semanticUiReact.Modal,
        {
          id: propName + 'Modal',
          trigger: _react2.default.createElement(
            _semanticUiReact.Button,
            {
              icon: true,
              className: 'selector-add',
              onClick: function onClick(e) {
                return _this4.getOptionsForModal(e, fields[propName].nestedFields);
              }
            },
            _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' })
          ),
          className: 'graphql-cms_modal graphql-cms'
        },
        _react2.default.createElement(
          _semanticUiReact.Modal.Header,
          null,
          'Add new select option for "',
          propName,
          '"',
          _react2.default.createElement(
            'div',
            { className: 'btn-row' },
            _react2.default.createElement(
              _semanticUiReact.Button,
              {
                type: 'submit',
                color: 'black',
                name: propName,
                onClick: function onClick(e) {
                  return _this4.addSelectOption(e, {
                    fields: fields[propName].nestedFields,
                    label: fields[propName].list.label
                  });
                }
              },
              'add'
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Modal.Content,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { as: _semanticUiReact.Form },
            _react2.default.createElement(
              _semanticUiReact.Grid.Column,
              { computer: 8, mobile: 16 },
              fields[propName].nestedFields.slice(0, to).map(function (field, idx) {
                return _this4.generateFields(field, idx, false, false, propName + '/');
              })
            ),
            _react2.default.createElement(
              _semanticUiReact.Grid.Column,
              { computer: 8, mobile: 16 },
              fields[propName].nestedFields.slice(-from).map(function (field, idx) {
                return _this4.generateFields(field, idx, false, false, propName + '/');
              })
            )
          )
        )
      );
    }
  }, {
    key: 'editText',
    value: function editText(node) {
      this.setState({ editText: node });
    }
  }, {
    key: 'update',
    value: function update() {
      this.setState({ editText: null });
      this.props.update();
    }
  }, {
    key: 'generateFields',
    value: function generateFields(obj, idx, data, dis, prefix) {
      var _this5 = this;

      var pr = prefix || '';
      var fields = _extends({}, obj);
      var propName = Object.keys(fields)[0];
      var popupImgLink = this.state.popupImgLink;

      var value = '';
      var checked = '';
      var dateInput = false;
      var disabled = typeof dis === 'boolean' ? dis : this.checkIfDisabled(fields, propName);
      var control = fields[propName].inputControl;
      var DOM = void 0;
      if (fields[propName].nestedFields && fields[propName].nestedFields[0] && fields[propName].inputControl !== 'selection') {
        disabled = fields[propName].disabled;
        var newData = data ? data[propName] : false;
        return _react2.default.createElement(
          'div',
          { className: 'nestedFields', key: idx },
          _react2.default.createElement(
            _semanticUiReact.Divider,
            { horizontal: true },
            propName,
            ' ',
            _react2.default.createElement(_semanticUiReact.Icon, { name: 'level down' })
          ),
          fields[propName].nestedFields.map(function (fields, index) {
            return _this5.generateFields(fields, index + 300, newData, disabled, propName + '/');
          }),
          _react2.default.createElement(
            _semanticUiReact.Divider,
            { horizontal: true },
            propName,
            ' ',
            _react2.default.createElement(_semanticUiReact.Icon, { name: 'level up' })
          )
        );
      }
      if (data && (data[propName] || typeof data[propName] === 'boolean') && fields[propName].inputType !== 'file') {
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
      if (this.isDate(value) || propName === 'createdAt' || propName === 'updatedAt' || propName === 'deletedAt' || fields[propName].inputType === 'date') {
        dateInput = 'date';
        value = !data ? '' : this.getDateValue(value);
      }
      var type = dateInput || fields[propName].inputType;
      if (data || propName !== 'id' && propName !== '_id' && propName !== 'offset' && propName !== 'limit') {
        if (type === 'file') {
          DOM = _react2.default.createElement(
            'div',
            { className: 'file-form', key: idx },
            _react2.default.createElement(_semanticUiReact.Button, {
              as: 'label',
              content: fields[propName].label,
              className: 'file-form-btn',
              icon: 'upload',
              disabled: disabled,
              labelPosition: 'right',
              htmlFor: '' + pr + propName + '-input'
            }),
            _react2.default.createElement(
              _semanticUiReact.Popup,
              {
                onMount: function onMount() {
                  return _this5.getPopupImgPath(propName);
                },
                onClose: function onClose() {
                  return _this5.getPopupImgPath(false);
                },
                name: propName,
                trigger: _react2.default.createElement(
                  'p',
                  { className: 'file-name', id: '' + pr + propName + '-p' },
                  data[propName]
                )
              },
              _react2.default.createElement('img', {
                id: '' + pr + propName + '-img',
                src: popupImgLink,
                alt: propName
              })
            ),
            _react2.default.createElement('input', {
              disabled: disabled,
              onChange: this.props.uploadImage,
              id: '' + pr + propName + '-input',
              type: 'file'
            })
          );
        } else if (fields[propName].inputControl === 'selection') {
          var options = this.state[propName];
          var hasOwnAPI = false;
          if (Object.keys(fields[propName].list.resolvers.find.args).length !== 0 && (fields[propName].list.resolvers.create && Object.keys(fields[propName].list.resolvers.create.args).length !== 0 || fields[propName].list.resolvers.update && Object.keys(fields[propName].list.resolvers.update.args).length !== 0)) {
            hasOwnAPI = true;
          }
          DOM = _react2.default.createElement(
            'div',
            { className: 'file-form', key: idx },
            _react2.default.createElement(
              'label',
              null,
              fields[propName].label
            ),
            !hasOwnAPI ? this.generateModal(fields, propName) : null,
            options && Array.isArray(this.state[propName + 'DefaultValue']) ? _react2.default.createElement(_semanticUiReact.Dropdown, {
              ref: propName,
              placeholder: fields[propName].label,
              id: '' + pr + propName,
              fluid: true,
              multiple: true,
              selection: true,
              search: true,
              defaultValue: this.state[propName + 'DefaultValue'],
              options: options
            }) : null
          );
        } else if (type === 'markdown') {
          DOM = _react2.default.createElement(_Markdown2.default, {
            key: idx,
            id: '' + pr + propName,
            value: value,
            label: fields[propName].label,
            onEdit: this.editText
          });
        } else {
          DOM = _react2.default.createElement(_semanticUiReact.Form.Field, {
            key: idx,
            label: fields[propName].label,
            control: control,
            type: type,
            id: '' + pr + propName,
            defaultValue: value,
            defaultChecked: checked,
            onInput: this.checkOnEnterIfTextarea,
            disabled: disabled,
            placeholder: propName
          });
        }
      }
      return DOM;
    }
  }, {
    key: 'render',
    value: function render() {
      var Column = _semanticUiReact.Grid.Column;
      var _state2 = this.state,
          fields = _state2.fields,
          schema = _state2.schema,
          currentItemId = _state2.currentItemId,
          data = _state2.data;
      var _props = this.props,
          update = _props.update,
          remove = _props.remove,
          addNewItem = _props.addNewItem;
      var generateFields = this.generateFields;

      var to = (fields.length / 2).toFixed(0);
      var from = fields.length - to;
      return _react2.default.createElement(
        'div',
        null,
        this.state.editText ? _react2.default.createElement(_Editor2.default, {
          element: this.state.editText,
          upload: this.props.uploadFile,
          path: this.props.schema.uploadPath ? this.fixPath(this.props.schema.uploadPath) : this.props.schema.typeName
        }) : null,
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { color: 'black', className: 'View' },
          _react2.default.createElement(
            'div',
            { className: 'btn-row' },
            currentItemId ? _react2.default.createElement(
              _semanticUiReact.Button,
              {
                type: 'submit',
                color: 'black',
                onClick: addNewItem,
                disabled: !schema.resolvers.create || !schema.resolvers.create.allowed
              },
              'add new'
            ) : null,
            _react2.default.createElement(
              _semanticUiReact.Button,
              {
                type: 'submit',
                color: 'black',
                onClick: !schema.resolvers.update ? null : this.update,
                disabled: !schema.resolvers.update || !schema.resolvers.update.allowed
              },
              'save'
            ),
            _react2.default.createElement(
              _semanticUiReact.Button,
              {
                type: 'submit',
                color: 'black',
                id: currentItemId,
                onClick: !schema.resolvers.remove ? null : remove,
                disabled: !schema.resolvers.remove || !schema.resolvers.remove.allowed
              },
              'remove'
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { as: _semanticUiReact.Form },
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              { columns: 2 },
              _react2.default.createElement(
                Column,
                { computer: 8, mobile: 16 },
                fields.slice(0, to).map(function (field, idx) {
                  return generateFields(field, idx, data);
                })
              ),
              _react2.default.createElement(
                Column,
                { computer: 8, mobile: 16 },
                fields.slice(-from).map(function (field, idx) {
                  return generateFields(field, idx, data);
                })
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              null,
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                null,
                _react2.default.createElement(_semanticUiReact.Container, null)
              )
            ),
            _react2.default.createElement(_semanticUiReact.Grid.Row, null)
          )
        )
      );
    }
  }]);

  return View;
}(_react.Component);

exports.default = View;