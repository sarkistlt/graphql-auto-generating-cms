'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const propTypes = {
//   schema: PropTypes.object,
//   routeToView: PropTypes.func,
//   data: PropTypes.array,
//   remove: PropTypes.func,
//   addNewItem: PropTypes.func,
//   nextPage: PropTypes.func,
//   previewsPage: PropTypes.func,
//   offset: PropTypes.number,
//   lastPage: PropTypes.bool,
// };

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    var _ref;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      schema: _this.props.schema,
      data: _this.props.data,
      offset: _this.props.offset,
      lastPage: _this.props.lastPage
    };
    return _this;
  }

  _createClass(List, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        schema: this.props.schema,
        data: this.props.data,
        offset: this.props.offset,
        lastPage: this.props.lastPage
      });
    }
  }, {
    key: 'headerToString',
    value: function headerToString(obj, arr) {
      var string = '';
      arr.forEach(function (prop, idx) {
        if (arr.length === '1') {
          string += '' + obj[prop];
        } else if (idx === arr.length - 1 && obj[prop]) {
          string += '' + obj[prop];
        } else if (obj[prop]) {
          string += obj[prop] + ' | ';
        }
      });
      return string;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          data = _state.data,
          schema = _state.schema,
          offset = _state.offset,
          lastPage = _state.lastPage;
      var _props = this.props,
          routeToView = _props.routeToView,
          remove = _props.remove,
          addNewItem = _props.addNewItem,
          nextPage = _props.nextPage,
          previewsPage = _props.previewsPage;

      var header = schema.listHeader;
      var headerToString = this.headerToString;

      var idType = '';
      schema.fields.forEach(function (obj) {
        if (data[0] && Object.keys(obj)[0] === Object.keys(data[0])[0]) {
          idType = obj[Object.keys(obj)[0]].fieldType;
        }
      });
      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { color: 'black', className: 'View' },
        _react2.default.createElement(
          _semanticUiReact.Table,
          { celled: true, className: 'List' },
          _react2.default.createElement(
            _semanticUiReact.Table.Header,
            null,
            _react2.default.createElement(
              _semanticUiReact.Table.Row,
              null,
              _react2.default.createElement(
                _semanticUiReact.Table.HeaderCell,
                null,
                '#/ID'
              ),
              _react2.default.createElement(
                _semanticUiReact.Table.HeaderCell,
                null,
                'TITLE'
              ),
              _react2.default.createElement(
                _semanticUiReact.Table.HeaderCell,
                null,
                'ACTION'
              )
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Table.Body,
            null,
            data.map(function (obj) {
              return _react2.default.createElement(
                _semanticUiReact.Table.Row,
                { key: obj._id || obj.id },
                _react2.default.createElement(
                  _semanticUiReact.Table.Cell,
                  null,
                  headerToString(obj, header.id)
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.Cell,
                  null,
                  headerToString(obj, header.title)
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.Cell,
                  null,
                  _react2.default.createElement(
                    _semanticUiReact.Button,
                    {
                      type: 'submit',
                      color: 'black',
                      className: 'action-btn',
                      id: obj._id ? '_id:' + obj._id + ':' + idType : 'id:' + obj.id + ':' + idType,
                      onClick: routeToView
                    },
                    'view'
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Button,
                    {
                      type: 'submit',
                      color: 'black',
                      className: 'action-btn',
                      id: obj._id ? '_id:' + obj._id + ':' + idType : 'id:' + obj.id + ':' + idType,
                      onClick: !schema.resolvers.remove ? null : remove,
                      disabled: !schema.resolvers.remove || !schema.resolvers.remove.allowed
                    },
                    'remove'
                  )
                )
              );
            })
          ),
          _react2.default.createElement(
            _semanticUiReact.Table.Footer,
            null,
            _react2.default.createElement(
              _semanticUiReact.Table.Row,
              null,
              _react2.default.createElement(
                _semanticUiReact.Table.HeaderCell,
                { colSpan: '3' },
                _react2.default.createElement(
                  _semanticUiReact.Button,
                  {
                    type: 'submit',
                    color: 'black',
                    className: 'add-btn',
                    onClick: addNewItem,
                    disabled: !schema.resolvers.create || !schema.resolvers.create.allowed
                  },
                  'add new'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu,
                  { floated: 'right', pagination: true },
                  _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { as: 'a', icon: true, onClick: previewsPage },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'left chevron', disabled: !offset })
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { as: 'a', icon: true, onClick: nextPage },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'right chevron', disabled: lastPage })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;