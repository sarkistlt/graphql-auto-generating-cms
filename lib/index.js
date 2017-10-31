'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

require('whatwg-fetch');

var _promisePolyfill = require('promise-polyfill');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _SideMenu = require('./components/SideMenu');

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _View = require('./components/View');

var _View2 = _interopRequireDefault(_View);

var _List = require('./components/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (!window.Promise) {
  window.Promise = _promisePolyfill2.default;
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

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _ref;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args)));

    _this.query = _this.query.bind(_this);
    _this.create = _this.create.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.remove = _this.remove.bind(_this);
    _this.initCMS = _this.initCMS.bind(_this);
    _this.nextPage = _this.nextPage.bind(_this);
    _this.addNewItem = _this.addNewItem.bind(_this);
    _this.getListData = _this.getListData.bind(_this);
    _this.getViewData = _this.getViewData.bind(_this);
    _this.routeToList = _this.routeToList.bind(_this);
    _this.routeToView = _this.routeToView.bind(_this);
    _this.uploadImage = _this.uploadImage.bind(_this);
    _this.uploadFile = _this.uploadFile.bind(_this);
    _this.previewsPage = _this.previewsPage.bind(_this);
    _this.validateFields = _this.validateFields.bind(_this);
    _this.getRequestString = _this.getRequestString.bind(_this);
    _this.collectFieldsData = _this.collectFieldsData.bind(_this);
    _this.objOfFieldsToArray = _this.objOfFieldsToArray.bind(_this);
    _this.handleNewMenuClick = _this.handleNewMenuClick.bind(_this);
    _this.getCurrentViewFields = _this.getCurrentViewFields.bind(_this);
    _this.state = {
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
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initCMS();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(p, n) {
      return n.currentPathSchema && n.schema;
    }
  }, {
    key: 'getCurrentViewFields',
    value: function getCurrentViewFields(schema, currentRout) {
      var array = [];
      var obj = _extends({}, schema);
      Object.keys(obj.fields).forEach(function (key) {
        if (!obj.fields[key].exclude) {
          array.push(_defineProperty({}, key, obj.fields[key]));
        }
      });
      var h = obj.listHeader;
      var tb1 = Array.isArray(h.id) ? h.id : Object.keys(h.id).map(function (key) {
        return h.id[key];
      });
      var tb2 = Array.isArray(h.title) ? h.title : Object.keys(h.title).map(function (key) {
        return h.title[key];
      });
      this.setState({
        currentPathSchema: {
          typeName: currentRout[0],
          label: obj.label,
          resolvers: obj.resolvers,
          fields: array,
          listHeader: { id: tb1, title: tb2 },
          uploadPath: obj.uploadPath,
          uploadRoot: obj.uploadRoot
        },
        fields: this.objOfFieldsToArray(obj.fields)
      }, this.getListData);
    }
  }, {
    key: 'getViewData',
    value: function getViewData(id) {
      var _this2 = this;

      var resolver = this.state.currentPathSchema.resolvers.find.resolver;
      var queryArgs = this.state.currentPathSchema.resolvers.find.args;
      var request = this.getRequestString(this.state.fields);
      var queryId = '';
      Object.keys(queryArgs).forEach(function (key) {
        if ((key === 'id' || key === '_id') && !queryId) {
          queryId = key;
        }
      });
      var variables = {
        values: _defineProperty({}, queryId, id.split(':')[1]),
        types: _defineProperty({}, queryId, queryArgs[queryId])
      };
      this.query('query', request, resolver, variables).then(function (res) {
        return _this2.setState({ viewData: res, viewMode: true, currentItemId: id });
      }).catch(function (err) {
        return console.log('getViewData error: ' + err);
      });
    }
  }, {
    key: 'getRequestString',
    value: function getRequestString(fields) {
      var _this3 = this;

      var request = '';
      fields.forEach(function (prop) {
        if (!prop[Object.keys(prop)[0]].nestedFields) {
          request += Object.keys(prop)[0] + ' ';
        } else {
          var nestedReqFields = _this3.getRequestString(prop[Object.keys(prop)[0]].nestedFields);
          request += Object.keys(prop)[0] + ' {' + nestedReqFields + '} ';
        }
      });
      return request;
    }
  }, {
    key: 'getListData',
    value: function getListData() {
      var _this4 = this;

      var d = this.state.currentPathSchema;
      var h = this.state.currentPathSchema.listHeader;
      var fields = d.fields.map(function (objKey) {
        return Object.keys(objKey)[0];
      });
      var resolver = d.resolvers.find.resolver;
      var _state = this.state,
          offset = _state.offset,
          limit = _state.limit;

      var data = {
        values: { offset: offset, limit: limit },
        types: { offset: 'Int!', limit: 'Int!' }
      };
      var req = h.id.join(' ') + ' ' + h.title.join(' ') + ' ' + (fields.find(function (key) {
        return key === '_id';
      }) ? '_id' : 'id');
      this.query('query', req, resolver, data).then(function (res) {
        if (res.errors) throw new Error(res);
        _this4.setState({
          listData: res,
          lastPage: res.data[resolver].length < 50
        }, _this4.forceUpdate);
      }).catch(function (err) {
        throw new Error('error: ' + err);
      });
    }
  }, {
    key: 'objOfFieldsToArray',
    value: function objOfFieldsToArray(fields) {
      var _this5 = this;

      var array = [];
      var tmpFields = _extends({}, fields);
      Object.keys(tmpFields).forEach(function (key) {
        if (!tmpFields[key].exclude && !tmpFields[key].nestedFields) {
          array.push(_defineProperty({}, key, tmpFields[key]));
        } else if (!tmpFields[key].exclude && tmpFields[key].nestedFields) {
          var newObj = _extends({}, tmpFields[key]);
          newObj.nestedFields = _this5.objOfFieldsToArray(tmpFields[key].nestedFields);
          array.push(_defineProperty({}, key, newObj));
        }
      });
      return array;
    }
  }, {
    key: 'query',
    value: function query(type, request, resolver, variables) {
      var _this6 = this;

      return new _promisePolyfill2.default(function (resolve, reject) {
        var graphql = _this6.props.graphql ? _this6.props.graphql : _this6.props.route.graphql;
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', graphql);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (err) {
          reject(err.error);
        };
        if (!variables) {
          xhr.send(JSON.stringify({ query: type + ' { ' + resolver + ' {' + request + '} }' }));
        } else {
          var varTypes = '';
          var varForRequest = '';
          Object.keys(variables.types).forEach(function (key) {
            varTypes += '$' + [key] + ': ' + variables.types[key] + ' ';
            varForRequest += [key] + ': $' + [key] + ' ';
          });
          xhr.send(JSON.stringify({
            query: type + ' ' + resolver + '(' + varTypes + ') { ' + resolver + '(' + varForRequest + ') {' + request + '}}',
            variables: variables.values
          }));
        }
      });
    }
  }, {
    key: 'create',
    value: function create(data) {
      var _this7 = this;

      if (this.state.currentPathSchema.resolvers.create) {
        var schema = this.state.currentPathSchema;
        var currentList = this.state.currentPathName;
        var resolver = schema.resolvers.create.resolver;
        var req = '';
        schema.fields.forEach(function (prop) {
          if (Object.keys(prop)[0] === '_id' || Object.keys(prop)[0] === 'id') {
            req += Object.keys(prop)[0] + ' ';
          }
        });
        if (!data) {
          throw new Error("data wasn't provided");
        } else if (schema.resolvers.create) {
          this.query('mutation', req, resolver, data).then(function () {
            _this7.forceUpdate();
            _this7.showSuccessMs();
            _this7.routeToList(currentList);
          }).catch(function (err) {
            _this7.showErrorMs();
            throw new Error('create error: ' + err);
          });
        }
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this8 = this;

      if (this.state.currentPathSchema.resolvers.update) {
        var schema = this.state.currentPathSchema;
        var resolver = schema.resolvers.update.resolver;
        var id = this.state.currentItemId;
        var req = id ? id.split(':')[0] : '';
        var fields = this.state.fields;
        var data = this.collectFieldsData(fields, id, 'update');
        if (!id && data) {
          data = this.collectFieldsData(fields, id, 'create');
          this.create(data);
        } else if (data) {
          if (schema.resolvers.update) {
            this.query('mutation', req, resolver, data).then(function () {
              _this8.showSuccessMs;
              _this8.getViewData(id);
            }).catch(function (err) {
              _this8.showErrorMs();
              throw new Error('update error: ' + err);
            });
          }
        }
      }
    }
  }, {
    key: 'remove',
    value: function remove(e) {
      var _this9 = this;

      if (this.state.currentPathSchema.resolvers.remove) {
        var id = e.target.id;
        var schema = this.state.currentPathSchema;
        var currentList = this.state.currentPathName;
        var resolver = schema.resolvers.remove.resolver;
        var req = id.split(':')[0];
        var data = { values: {}, types: {} };
        data.values[id.split(':')[0]] = id.split(':')[1];
        data.types[id.split(':')[0]] = id.split(':')[2];
        if (!id) {
          throw new Error("id wasn't provided");
        } else if (schema.resolvers.remove) {
          this.query('mutation', req, resolver, data).then(function () {
            _this9.forceUpdate();
            _this9.showSuccessMs();
            _this9.routeToList(currentList);
          }).catch(function (err) {
            _this9.showErrorMs();
            throw new Error('remove error: ' + err);
          });
        }
      }
    }
  }, {
    key: 'initCMS',
    value: function initCMS() {
      var _this10 = this;

      var endpoint = this.props.endpoint ? this.props.endpoint : this.props.route.endpoint;
      fetch(endpoint, { method: 'GET' }).then(function (json) {
        return json.json();
      }).then(function (res) {
        var menuItems = [];
        var newMenuItems = false;
        if (_this10.props.newMenuItems) {
          newMenuItems = _this10.props.newMenuItems;
        } else if (_this10.props.route && _this10.props.route.newMenuItems) {
          newMenuItems = _this10.props.route.newMenuItems;
        }
        Object.keys(res).forEach(function (type) {
          menuItems.push({ label: res[type].label, typeName: type });
        });
        _this10.setState({
          schema: res,
          SideMenuItems: menuItems,
          newMenuItemSecret: newMenuItems && newMenuItems[0] ? newMenuItems[0].secret : false
        }, function () {
          if (!_this10.state.newMenuItemSecret) {
            var prop = _this10.state.SideMenuItems[0].typeName;
            _this10.getCurrentViewFields(_this10.state.schema[prop], prop);
          } else {
            _this10.forceUpdate();
          }
        });
      }).catch(function (err) {
        throw new Error(err);
      });
    }
  }, {
    key: 'showErrorMs',
    value: function showErrorMs() {
      document.getElementById('ms-error').style.visibility = 'visible';
      document.getElementById('ms-error').style.opacity = 1;
      setTimeout(function () {
        document.getElementById('ms-error').style.visibility = 'hidden';
        document.getElementById('ms-error').style.opacity = 0;
      }, 3000);
    }
  }, {
    key: 'showSuccessMs',
    value: function showSuccessMs() {
      document.getElementById('ms-success').style.visibility = 'visible';
      document.getElementById('ms-success').style.opacity = 1;
      setTimeout(function () {
        document.getElementById('ms-success').style.visibility = 'hidden';
        document.getElementById('ms-success').style.opacity = 0;
      }, 3000);
    }
  }, {
    key: 'validateFields',
    value: function validateFields(data) {
      var _this11 = this;

      var response = true;
      Object.keys(data.types).forEach(function (arg) {
        if (data.types[arg].slice(-1) === '!') {
          if (typeof data.values[arg] !== 'boolean' && !data.values[arg]) {
            response = false;
            _this11.showErrorMs();
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
  }, {
    key: 'nextPage',
    value: function nextPage() {
      var _state2 = this.state,
          offset = _state2.offset,
          lastPage = _state2.lastPage;

      if (!lastPage) {
        this.setState({
          offset: offset + 50
        }, this.getListData);
      }
    }
  }, {
    key: 'previewsPage',
    value: function previewsPage() {
      var offset = this.state.offset;

      if (offset) {
        this.setState({
          offset: offset - 50
        }, this.getListData);
      }
    }
  }, {
    key: 'addNewItem',
    value: function addNewItem() {
      if (this.state.currentPathSchema.resolvers.create) {
        this.setState({
          viewMode: true,
          viewData: false,
          currentItemId: false
        }, this.forceUpdate);
      }
    }
  }, {
    key: 'routeToList',
    value: function routeToList(path) {
      var _this12 = this;

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
      }, function () {
        _this12.getCurrentViewFields(_this12.state.schema[_this12.state.currentPathName], [_this12.state.currentPathName]);
      });
    }
  }, {
    key: 'routeToView',
    value: function routeToView(e) {
      this.getViewData(e.target.id);
    }
  }, {
    key: 'collectFieldsData',
    value: function collectFieldsData(fields, id, action, prefix) {
      var _this13 = this;

      var schema = _extends({}, this.state.currentPathSchema);
      var data = { values: {}, types: {} };

      function getCurrentFieldData(id, type, prefix) {
        var pr = prefix ? prefix + '/' : '';
        switch (type || type.slice(0, -1)) {
          case 'Int':
            return Number(document.getElementById('' + pr + id).value);
          case 'Float':
            return Number(document.getElementById('' + pr + id).value);
          case 'Boolean':
            return document.getElementById('' + pr + id).checked;
          case 'String':
            return document.getElementById('' + pr + id).value;
          case 'file':
            return document.getElementById('' + pr + id + '-p').innerHTML;
          case 'selection':
            return document.getElementById('' + pr + id).firstChild.selectedOptions;
          default:
            return document.getElementById('' + pr + id).value;
        }
      }

      function getCurrentFieldMutationType(propName, schema, type, action) {
        var response = type;
        if (schema.resolvers.create && schema.resolvers.create.args[propName] && action === 'create') {
          response = schema.resolvers.create.args[propName];
        } else if (schema.resolvers.update && schema.resolvers.update.args[propName] && action === 'update') {
          response = schema.resolvers.update.args[propName];
        }
        return response;
      }

      function getNestedFieldsData(nestedFields, propName) {
        var tmpData = {};
        nestedFields.forEach(function (field) {
          if (!field.nestedFields) {
            tmpData[Object.keys(field)[0]] = getCurrentFieldData(Object.keys(field)[0], field[Object.keys(field)[0]].fieldType, propName, prefix);
          } else {
            var key = Object.keys(field)[0];
            tmpData[key] = getNestedFieldsData(field[key].nestedFields, key);
          }
        });
        return tmpData;
      }

      function checkIfDisabled(field, propName) {
        var method = false;
        if (action && action === 'update' && schema.resolvers.update) {
          method = schema.resolvers.update.args;
        } else if (action && action === 'create' && schema.resolvers.create) {
          method = schema.resolvers.create.args;
        }
        var result = method && method[propName] ? field[propName].disabled : true;
        if (prefix) result = false;
        return result;
      }

      if (!action) {
        data = {};
        fields.forEach(function (fieldObj) {
          var propName = Object.keys(fieldObj)[0];
          var type = fieldObj[propName].fieldType;
          if (fieldObj[propName].nestedFields && fieldObj[propName].inputControl !== 'selection') {
            data[propName] = JSON.stringify(getNestedFieldsData(fieldObj[propName].nestedFields, propName));
          } else if (!checkIfDisabled(fieldObj, propName)) {
            if (propName !== 'id' && propName !== '_id' && propName !== 'offset' && propName !== 'limit' && fieldObj[propName].inputType !== 'file' && fieldObj[propName].inputControl !== 'selection') {
              data[propName] = getCurrentFieldData(propName, type, prefix);
            } else if (fieldObj[propName].inputType === 'file') {
              data.values[propName] = getCurrentFieldData(propName, 'file', prefix);
              data.types[propName] = 'String';
            } else if (fieldObj[propName].inputControl === 'selection') {
              var ref = _this13.refs.View;
              var selectValue = getCurrentFieldData(propName, 'selection', prefix);
              var valuesData = [];
              Object.keys(selectValue).forEach(function (node) {
                valuesData.push(ref.state[propName + 'Data'][selectValue[node].value]);
              });
              data[propName] = JSON.stringify(valuesData);
            }
          }
        });
      } else {
        fields.forEach(function (fieldObj) {
          var propName = Object.keys(fieldObj)[0];
          var type = fieldObj[propName].fieldType;
          if (fieldObj[propName].nestedFields && fieldObj[propName].inputControl !== 'selection') {
            data.values[propName] = JSON.stringify(getNestedFieldsData(fieldObj[propName].nestedFields, propName));
            data.types[propName] = 'String';
          } else if (!checkIfDisabled(fieldObj, propName)) {
            if (propName !== 'id' && propName !== '_id' && propName !== 'offset' && propName !== 'limit' && fieldObj[propName].inputType !== 'file' && fieldObj[propName].inputControl !== 'selection') {
              data.values[propName] = getCurrentFieldData(propName, type, prefix);
              data.types[propName] = getCurrentFieldMutationType(propName, schema, type, action);
            } else if (fieldObj[propName].inputType === 'file') {
              data.values[propName] = getCurrentFieldData(propName, 'file', prefix);
              data.types[propName] = 'String';
            } else if (fieldObj[propName].inputControl === 'selection') {
              var ref = _this13.refs.View;
              var selectValue = getCurrentFieldData(propName, 'selection', prefix);
              var valuesData = [];
              Object.keys(selectValue).forEach(function (node) {
                valuesData.push(ref.state[propName + 'Data'][selectValue[node].value]);
              });
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
      }
      if (action && this.validateFields(data)) {
        return data;
      }
      return data;
    }
  }, {
    key: 'handleNewMenuClick',
    value: function handleNewMenuClick(label) {
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
  }, {
    key: 'uploadImage',
    value: function uploadImage(e) {
      e.preventDefault();
      if (e.currentTarget.files[0]) {
        var endpoint = this.props.endpoint ? this.props.endpoint : this.props.route.endpoint;
        var fileFromInput = e.currentTarget.files[0];
        var folderPath = this.state.currentPathSchema.uploadPath ? '/' + this.state.currentPathSchema.uploadPath : '/' + this.state.currentPathSchema.typeName;
        var massage = e.currentTarget.previousElementSibling;
        var fd = new FormData();
        fd.append('file', fileFromInput, [fileFromInput.name, folderPath]);
        massage.innerHTML = fileFromInput.name;
        fetch(endpoint, { method: 'POST', body: fd }).catch(function (err) {
          throw new Error('error: ' + err);
        });
      }
    }
  }, {
    key: 'uploadFile',
    value: function uploadFile(file) {
      var endpoint = this.props.endpoint ? this.props.endpoint : this.props.route.endpoint;
      var fileFromInput = file;
      var folderPath = this.state.currentPathSchema.uploadPath ? '/' + this.state.currentPathSchema.uploadPath : '/' + this.state.currentPathSchema.typeName;
      // const message = e.currentTarget.previousElementSibling;
      var fd = new FormData();
      fd.append('file', fileFromInput, [fileFromInput.name, folderPath]);
      return fetch(endpoint, { method: 'POST', body: fd });
    }
  }, {
    key: 'test',
    value: function test() {
      var _state3 = this.state,
          schema = _state3.schema,
          currentPathSchema = _state3.currentPathSchema,
          fields = _state3.fields,
          viewData = _state3.viewData,
          offset = _state3.offset,
          lastPage = _state3.lastPage,
          listData = _state3.listData,
          SideMenuItems = _state3.SideMenuItems,
          viewMode = _state3.viewMode,
          currentItemId = _state3.currentItemId,
          newMenuItemSecret = _state3.newMenuItemSecret;
      var routeToList = this.routeToList,
          routeToView = this.routeToView,
          routeToAdd = this.routeToAdd,
          addNewItem = this.addNewItem,
          uploadImage = this.uploadImage,
          getRequestString = this.getRequestString,
          nextPage = this.nextPage,
          previewsPage = this.previewsPage,
          query = this.query,
          update = this.update,
          remove = this.remove,
          handleNewMenuClick = this.handleNewMenuClick,
          collectFieldsData = this.collectFieldsData;

      var newMenuItems = false;
      if (this.props.newMenuItems) {
        newMenuItems = this.props.newMenuItems;
      } else if (this.props.route && this.props.route.newMenuItems) {
        newMenuItems = this.props.route.newMenuItems;
      }

      var resolverForList = false;
      var NewMenuView = false;
      if (newMenuItemSecret && newMenuItems) {
        NewMenuView = newMenuItems.find(function (item) {
          return item.secret === newMenuItemSecret;
        }).view.component;
      } else {
        resolverForList = currentPathSchema.resolvers.find.resolver;
      }

      console.log(JSON.stringify({
        state: this.state,
        data: !viewData ? false : viewData.data[resolverForList][0] ? viewData.data[resolverForList][0] : viewData.data[resolverForList],
        listD: listData.data[resolverForList]
      }, null, 2));
    }
  }, {
    key: 'render',
    value: function render() {
      var Column = _semanticUiReact.Grid.Column;
      var _state4 = this.state,
          schema = _state4.schema,
          currentPathSchema = _state4.currentPathSchema,
          fields = _state4.fields,
          viewData = _state4.viewData,
          offset = _state4.offset,
          lastPage = _state4.lastPage,
          listData = _state4.listData,
          SideMenuItems = _state4.SideMenuItems,
          viewMode = _state4.viewMode,
          currentItemId = _state4.currentItemId,
          newMenuItemSecret = _state4.newMenuItemSecret;
      var routeToList = this.routeToList,
          routeToView = this.routeToView,
          routeToAdd = this.routeToAdd,
          addNewItem = this.addNewItem,
          uploadImage = this.uploadImage,
          uploadFile = this.uploadFile,
          getRequestString = this.getRequestString,
          nextPage = this.nextPage,
          previewsPage = this.previewsPage,
          query = this.query,
          update = this.update,
          remove = this.remove,
          handleNewMenuClick = this.handleNewMenuClick,
          collectFieldsData = this.collectFieldsData;

      var newMenuItems = false;
      if (this.props.newMenuItems) {
        newMenuItems = this.props.newMenuItems;
      } else if (this.props.route && this.props.route.newMenuItems) {
        newMenuItems = this.props.route.newMenuItems;
      }
      if (!schema) {
        return _react2.default.createElement(
          _semanticUiReact.Segment,
          { className: 'loading-block' },
          _react2.default.createElement(
            'div',
            { className: 'ui active dimmer' },
            _react2.default.createElement(_semanticUiReact.Loader, { content: 'Loading' })
          )
        );
      }
      var resolverForList = false;
      var NewMenuView = false;
      if (newMenuItemSecret && newMenuItems) {
        NewMenuView = newMenuItems.find(function (item) {
          return item.secret === newMenuItemSecret;
        }).view.component;
      } else {
        resolverForList = currentPathSchema.resolvers.find.resolver;
      }

      return _react2.default.createElement(
        _semanticUiReact.Grid,
        { className: 'graphql-cms' },
        _react2.default.createElement(
          Column,
          { computer: 3, mobile: 16 },
          _react2.default.createElement(_SideMenu2.default, {
            newMenuItems: newMenuItems,
            items: SideMenuItems,
            handleNewMenuClick: handleNewMenuClick,
            routeToList: routeToList
          })
        ),
        _react2.default.createElement(
          _semanticUiReact.Message,
          { color: 'green', id: 'ms-success' },
          'Success!'
        ),
        _react2.default.createElement(
          _semanticUiReact.Message,
          { color: 'red', id: 'ms-error' },
          'Error!'
        ),
        _react2.default.createElement(
          Column,
          { computer: 13, mobile: 16 },
          viewMode ? !viewData && currentItemId ? _react2.default.createElement(
            _semanticUiReact.Segment,
            { className: 'loading-block' },
            _react2.default.createElement(
              'div',
              { className: 'ui active dimmer' },
              _react2.default.createElement(_semanticUiReact.Loader, { content: 'Loading' })
            )
          ) : _react2.default.createElement(_View2.default, {
            ref: 'View',
            query: query,
            data: !viewData ? false : viewData.data[resolverForList][0] ? viewData.data[resolverForList][0] : viewData.data[resolverForList],
            fields: fields,
            update: update,
            remove: remove,
            currentItemId: currentItemId,
            addNewItem: addNewItem,
            routeToAdd: routeToAdd,
            uploadImage: uploadImage,
            uploadFile: uploadFile,
            collectFieldsData: collectFieldsData,
            getRequestString: getRequestString,
            schema: currentPathSchema
          }) : !listData ? !newMenuItemSecret ? _react2.default.createElement(
            _semanticUiReact.Segment,
            { className: 'loading-block' },
            _react2.default.createElement(
              'div',
              { className: 'ui active dimmer' },
              _react2.default.createElement(_semanticUiReact.Loader, { content: 'Loading' })
            )
          ) : _react2.default.createElement(
            _semanticUiReact.Segment,
            { color: 'black', className: 'View' },
            _react2.default.createElement(NewMenuView, null)
          ) : _react2.default.createElement(_List2.default, {
            remove: remove,
            offset: offset,
            lastPage: lastPage,
            nextPage: nextPage,
            previewsPage: previewsPage,
            addNewItem: addNewItem,
            routeToView: routeToView,
            data: listData.data[resolverForList],
            schema: currentPathSchema
          })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;