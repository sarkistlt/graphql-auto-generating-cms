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
//   items: PropTypes.array,
//   routeToList: PropTypes.func,
//   newMenuItems: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.bool,
//   ]),
//   handleNewMenuClick: PropTypes.func,
// };

var SideMenu = function (_Component) {
  _inherits(SideMenu, _Component);

  function SideMenu() {
    var _ref;

    _classCallCheck(this, SideMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).call.apply(_ref, [this].concat(args)));

    _this.handleMenuClick = _this.handleMenuClick.bind(_this);
    _this.handleNewMenuClick = _this.handleNewMenuClick.bind(_this);
    _this.state = {
      activeItem: _this.props.newMenuItems ? _this.props.newMenuItems[0].secret : _this.props.items[0].typeName,
      items: _this.props.items
    };
    return _this;
  }

  _createClass(SideMenu, [{
    key: 'handleMenuClick',
    value: function handleMenuClick(e, _ref2) {
      var name = _ref2.name;

      if (e.name) {
        this.setState({ activeItem: e.name });
        this.props.routeToList(e.name);
      } else {
        this.setState({ activeItem: name });
        this.props.routeToList(name);
      }
    }
  }, {
    key: 'handleNewMenuClick',
    value: function handleNewMenuClick(e, _ref3) {
      var name = _ref3.name;

      if (e.name) {
        this.setState({ activeItem: e.name });
        this.props.handleNewMenuClick(e.name);
      } else {
        this.setState({ activeItem: name });
        this.props.handleNewMenuClick(name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          activeItem = _state.activeItem,
          items = _state.items;
      var handleMenuClick = this.handleMenuClick,
          handleNewMenuClick = this.handleNewMenuClick;
      var newMenuItems = this.props.newMenuItems;

      return _react2.default.createElement(
        _semanticUiReact.Grid,
        { columns: 1, className: 'SideMenuWrapper' },
        _react2.default.createElement(
          _semanticUiReact.Menu,
          { as: _semanticUiReact.Grid.Column, pointing: true, vertical: true, inverted: true, className: 'SideMenu', only: 'computer' },
          newMenuItems ? newMenuItems.map(function (item, idx) {
            return _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              {
                key: idx,
                name: item.secret,
                id: item.secret,
                active: activeItem === item.secret,
                onClick: handleNewMenuClick
              },
              item.label
            );
          }) : null,
          items.map(function (item, idx) {
            return _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              {
                key: idx,
                name: item.typeName,
                id: item.typeName,
                active: activeItem === item.typeName,
                onClick: handleMenuClick
              },
              item.label
            );
          }),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              className: 'github',
              href: 'https://github.com/sarkistlt/graphql-auto-generating-cms',
              target: '_blink'
            },
            _react2.default.createElement(_semanticUiReact.Button, {
              inverted: true,
              content: 'GitHub',
              icon: 'github'
            })
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Dropdown,
          {
            as: _semanticUiReact.Grid.Column,
            text: 'NAVIGATION MENU',
            floating: true,
            labeled: true,
            button: true,
            className: 'icon mobile-nav',
            only: 'tablet mobile'
          },
          _react2.default.createElement(
            _semanticUiReact.Dropdown.Menu,
            null,
            items.map(function (item, idx) {
              return _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
                key: idx,
                text: item.label,
                onClick: function onClick(e) {
                  return handleMenuClick(e, { name: item.label });
                }
              });
            })
          )
        )
      );
    }
  }]);

  return SideMenu;
}(_react.Component);

exports.default = SideMenu;