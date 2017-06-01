'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _core = require('../../core');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.items = [];
    _this.state = {};
    return _this;
  }

  _createClass(Form, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        form: this
      };
    }
  }, {
    key: 'validate',
    value: function validate() {
      var i = 0;

      for (i = 0; i < this.items.length; i++) {
        if (!this.items[i].validate()) return false;
      }

      return true;
    }
  }, {
    key: 'data',
    value: function data() {
      var result = {};
      var item = null;
      var i = 0;

      for (i = 0; i < this.items.length; i++) {
        item = this.items[i];

        if (item.props.name) {
          result[item.props.name] = item.state.value;
        }
      }

      return result;
    }
  }, {
    key: 'register',
    value: function register(item) {
      this.items.push(item);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _styles.FormStyle,
        { className: 'react-form' },
        this.props.children,
        this.props.showButtons ? _react2.default.createElement(
          'div',
          { className: 'react-form-buttons' },
          this.props.showSave && _react2.default.createElement(
            _core.Button,
            { color: 'primary', onClick: function onClick() {
                return _this2.props.onSave(_this2);
              } },
            this.props.saveLabel
          ),
          this.props.showCancel && _react2.default.createElement(
            _core.Button,
            { onClick: function onClick() {
                return _this2.props.onCancel();
              } },
            this.props.cancelLabel
          )
        ) : null
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.propTypes = {
  'showButtons': _proptypes2.default.bool,
  'showSave': _proptypes2.default.bool,
  'showCancel': _proptypes2.default.bool,
  'saveLabel': _proptypes2.default.string,
  'cancelLabel': _proptypes2.default.string,
  'onSave': _proptypes2.default.func,
  'onCancel': _proptypes2.default.func
};

Form.defaultProps = {
  'saveLabel': 'Save',
  'cancelLabel': 'Cancel',
  'showButtons': true,
  'showSave': true,
  'showCancel': true,
  'onSave': function onSave() {
    return true;
  },
  'onCancel': function onCancel() {
    return true;
  }
};

Form.childContextTypes = {
  'form': _proptypes2.default.object
};

Form.validators = {};
Form.validators.email = function (value) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};
Form.validators.minLength = function (value) {
  return value && value.length >= 3;
};
Form.validators.minLengthObject = function (value) {
  return value && value.name && value.name.length >= 3;
};
Form.validators.name = function (value) {
  if (!value) {
    return false;
  }

  var tmp = value.split(' ');

  if (tmp.length < 2) {
    return false;
  }

  return tmp[0].length >= 3 && tmp[1].length >= 3;
};

Form.validators.selected = function (value) {
  return value.length > 0;
};

exports.default = Form;