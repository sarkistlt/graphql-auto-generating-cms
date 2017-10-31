'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _reactMarkmirror = require('@revall/react-markmirror');

var _reactMarkmirror2 = _interopRequireDefault(_reactMarkmirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import '../editor.css';

var md = new _markdownIt2.default({
  typographer: true,
  breaks: true,
  linkify: true
});

var Editor = function (_Component) {
  _inherits(Editor, _Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _this.renderPreview = _this.renderPreview.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handlerUpload = _this.handlerUpload.bind(_this);
    _this.state = {
      code: props.element ? props.element.value : '',
      element: props.element || null
    };
    return _this;
  }

  _createClass(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ code: this.state.element.value });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.element !== this.state.element) {
        this.setState({
          code: nextProps.element ? nextProps.element.value : '',
          element: nextProps.element || null,
          initCode: nextProps.element ? nextProps.element.value : ''
        });
      }
    }

    /**
    * Parses the given markdown into HTML
    *
    * @param {String} markdown The current editor value
    * @return {String}
    */

  }, {
    key: 'renderPreview',
    value: function renderPreview(markdown) {
      return md.render(markdown);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(code) {
      this.setState({ code: code });
      if (this.state.element) {
        this.state.element.value = code;
      }
    }
  }, {
    key: 'handlerUpload',
    value: function handlerUpload(file) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.props.upload(file).then(function (result) {
          var url = encodeURI(_this2.props.path + '/' + file.name);
          var response = {
            type: file.type,
            url: url,
            text: file.name
          };
          console.log(result, response);
          resolve(response);
        }).catch(function (err) {
          reject(new Error(err));
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          code = _state.code,
          initCode = _state.initCode;

      return _react2.default.createElement(
        'section',
        null,
        ' ',
        _react2.default.createElement(_reactMarkmirror2.default, {
          value: code,
          defaultValue: initCode,
          onChange: this.handleChange,
          onPreview: this.renderPreview,
          acceptedFileTypes: ['image/jpg', 'image/gif', 'image/png', 'application/pdf', 'application', 'audio'],
          onFiles: this.handlerUpload
        })
      );
    }
  }]);

  return Editor;
}(_react.Component);

exports.default = Editor;