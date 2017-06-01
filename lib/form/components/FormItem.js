'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _lodash = require('lodash');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = function (_React$Component) {
  _inherits(FormItem, _React$Component);

  function FormItem(props) {
    _classCallCheck(this, FormItem);

    var _this = _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).call(this, props));

    _this.state = {
      value: props.value || props.defaultValue,
      valid: true
    };
    return _this;
  }

  _createClass(FormItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context.form.register(this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== undefined) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'validate',
    value: function validate() {
      if (!this.props.validator) {
        return true;
      }

      var isValid = this.props.validator(this.state.value) || false;
      this.setState({ valid: isValid });

      return isValid;
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var value = this.props.valueFromEvent(event);
      this.setState({ value: value });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'onKeyPress',
    value: function onKeyPress(event) {
      if (event.key === 'Enter') {
        if (this.props.onEnter) {
          this.props.onEnter(event);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var elementProps = _extends({
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.onKeyPress(e);
        }
      }, this.props.componentProps);

      if (!(0, _lodash.isUndefined)(this.state.value)) {
        elementProps[this.props.valueField] = this.state.value;
      }

      var isRequired = this.props.validator !== undefined;
      var element = (0, _react.createElement)(this.props.component, elementProps, this.props.componentChildren);

      return _react2.default.createElement(
        _styles.FormItemStyle,
        { className: 'react-form-item' },
        this.props.label && _react2.default.createElement(
          'label',
          null,
          this.props.label,
          isRequired ? _react2.default.createElement(
            'label',
            { className: 'error' },
            '*'
          ) : null
        ),
        _react2.default.createElement(
          'div',
          { className: 'element' },
          element
        ),
        !this.state.valid && this.props.error ? _react2.default.createElement(
          'label',
          { className: 'error' },
          this.props.error
        ) : null
      );
    }
  }]);

  return FormItem;
}(_react2.default.Component);

FormItem.propTypes = {
  value: _proptypes2.default.any,
  defaultValue: _proptypes2.default.any,
  label: _proptypes2.default.string,
  error: _proptypes2.default.string,
  component: _proptypes2.default.oneOfType([_proptypes2.default.func, _proptypes2.default.string]).isRequired,
  componentProps: _proptypes2.default.object,
  validator: _proptypes2.default.func,
  valueFromEvent: _proptypes2.default.func,
  valueField: _proptypes2.default.string,
  onChange: _proptypes2.default.func,
  onEnter: _proptypes2.default.func,
  componentChildren: _proptypes2.default.array
};

FormItem.defaultProps = {
  componentProps: {},
  defaultValue: undefined,
  valueField: 'value',
  valueFromEvent: function valueFromEvent(event) {
    return event.target.value;
  }
};

FormItem.contextTypes = {
  form: _proptypes2.default.object
};

exports.default = FormItem;