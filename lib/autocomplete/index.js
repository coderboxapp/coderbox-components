'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _lodash = require('lodash');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoComplete = function (_React$Component) {
  _inherits(AutoComplete, _React$Component);

  function AutoComplete() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchText: '',
      suggestion: null,
      suggestions: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutoComplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.value) {
        this.setState({ searchText: this.props.value.name || '' });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value === null) {
        this.setState({ searchText: '' });
      }

      if (nextProps.value) {
        this.setState({ searchText: nextProps.value.name || '' });
      }
    }
  }, {
    key: 'renderSuggestion',
    value: function renderSuggestion(suggestion) {
      return _react2.default.createElement(
        'div',
        null,
        suggestion.name
      );
    }
  }, {
    key: 'fetchSuggestions',
    value: function fetchSuggestions(value) {
      var inputValue = value.trim().toLowerCase();
      var inputLength = inputValue.length;

      return inputLength === 0 ? [] : this.props.suggestions.filter(function (c) {
        var m = c.name.toLowerCase().match(inputValue);
        return m && m.length > 0;
      }).slice(0, 4);
    }
  }, {
    key: 'firstSuggestion',
    value: function firstSuggestion(value) {
      var inputValue = value.trim();
      var inputLength = inputValue.length;

      return (inputLength === 0 ? [] : this.props.suggestions.filter(function (s) {
        return s.name === inputValue;
      })).shift();
    }
  }, {
    key: 'onSuggestion',
    value: function onSuggestion(event, props) {
      this.setState({ suggestion: props.suggestion });
    }
  }, {
    key: 'onChange',
    value: function onChange(event, props) {
      this.setState({ searchText: (0, _lodash.trim)(props.newValue) });
      if (this.props.onChange) {
        this.props.onChange(this.firstSuggestion(props.newValue) || { name: (0, _lodash.trim)(props.newValue) });
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: 'onSuggestionsFetchRequested',
    value: function onSuggestionsFetchRequested(props) {
      this.setState({ suggestions: this.fetchSuggestions(props.value) });
    }
  }, {
    key: 'onSuggestionsClearRequested',
    value: function onSuggestionsClearRequested() {
      this.setState({ suggestions: [] });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var suggestions = this.state.suggestions;

      var inputProps = {
        placeholder: this.props.placeholder,
        value: this.state.searchText,
        onChange: function onChange(e, data) {
          return _this2.onChange(e, data);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.onKeyDown(e);
        }
      };

      return _react2.default.createElement(_reactAutosuggest2.default, {
        theme: _styles2.default,
        suggestions: suggestions,
        getSuggestionValue: function getSuggestionValue(suggestion) {
          return suggestion.name;
        },
        renderSuggestion: this.props.renderSuggestion || this.renderSuggestion,
        onSuggestionSelected: function onSuggestionSelected(e, data) {
          return _this2.onSuggestion(e, data);
        },
        onSuggestionsFetchRequested: function onSuggestionsFetchRequested(data) {
          return _this2.onSuggestionsFetchRequested(data);
        },
        onSuggestionsClearRequested: function onSuggestionsClearRequested() {
          return _this2.onSuggestionsClearRequested();
        },
        shouldRenderSuggestions: function shouldRenderSuggestions(value) {
          return value.trim().length > 1;
        },
        inputProps: inputProps
      });
    }
  }]);

  return AutoComplete;
}(_react2.default.Component);

exports.default = AutoComplete;