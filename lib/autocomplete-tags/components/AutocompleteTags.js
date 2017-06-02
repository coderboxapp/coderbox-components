'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _styles = require('../styles');

var _core = require('../../core');

var _autocomplete = require('../../autocomplete');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Keys = {
  ENTER: 13,
  TAB: 9,
  COMMA: 188,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40
};

var AutocompleteTags = function (_React$Component) {
  _inherits(AutocompleteTags, _React$Component);

  function AutocompleteTags() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutocompleteTags);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteTags.__proto__ || Object.getPrototypeOf(AutocompleteTags)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tags: _this.props.value || [],
      suggestion: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutocompleteTags, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value && (0, _lodash.isArray)(nextProps.value)) {
        this.setState({ tags: nextProps.value });
      }
    }
  }, {
    key: 'addTag',
    value: function addTag(tag) {
      var tags = this.state.tags.concat();

      if ((0, _lodash.findIndex)(tags, function (t) {
        return t.name === tag.name;
      }) === -1) {
        tags.push(_lodash.assign.apply(undefined, _toConsumableArray(tag).concat([{ name: this.props.toLowercase ? tag.name.toLocaleLowerCase() : tag.name }])));

        if (this.props.allowNew) {
          this.setState({ tags: tags });
          if (this.props.onChange) {
            this.props.onChange(tags);
          }
        } else {
          if ((0, _lodash.findIndex)(this.props.suggestions, function (t) {
            return t.name === tag.name;
          }) > -1) {
            this.setState({ tags: tags });
            if (this.props.onChange) {
              this.props.onChange(tags);
            }
          }
        }
      }
    }
  }, {
    key: 'removeTag',
    value: function removeTag(tag) {
      var tags = (0, _lodash.remove)(this.state.tags, function (t) {
        return t.name !== tag.name;
      });

      this.setState({ tags: tags });

      if (this.props.onChange) {
        this.props.onChange(tags);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === Keys.ENTER || e.keyCode === Keys.TAB || e.keyCode === Keys.COMMA) {
        e.preventDefault();

        if (this.state.suggestion) {
          this.addTag(this.state.suggestion);
          this.setState({ suggestion: null });
        }
      }

      if (e.keyCode === Keys.BACKSPACE && this.state.tags.length > 0) {
        if (!this.state.suggestion || this.state.suggestion.name === '') {
          this.removeTag((0, _lodash.last)(this.state.tags));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          suggestions = _props.suggestions,
          color = _props.color,
          placeholder = _props.placeholder;
      var _state = this.state,
          tags = _state.tags,
          suggestion = _state.suggestion;


      return _react2.default.createElement(
        _styles.AutocompleteTagsStyle,
        { className: 'react-autocomplete-tags' },
        _react2.default.createElement(
          _styles.TagsStyle,
          { display: tags.length > 0 },
          _react2.default.createElement(_core.Tags, { color: color, tags: tags, onClick: function onClick(tag) {
              return _this2.removeTag(tag);
            }, withClose: true })
        ),
        _react2.default.createElement(_autocomplete2.default, {
          value: suggestion,
          suggestions: suggestions,
          placeholder: placeholder,
          onChange: function onChange(s) {
            return _this2.setState({ suggestion: s });
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.onKeyDown(e);
          }
        })
      );
    }
  }]);

  return AutocompleteTags;
}(_react2.default.Component);

AutocompleteTags.defaultProps = {
  color: 'primary',
  allowNew: false,
  toLowercase: false
};
exports.default = AutocompleteTags;