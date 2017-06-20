(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"), require("styled-components"), require("prop-types"), require("moment"), require("js-md5"), require("react-autosuggest"), require("react-google-autocomplete"), require("react-markdown"), require("react-router"));
	else if(typeof define === 'function' && define.amd)
		define("coderbox-components", ["react", "lodash", "styled-components", "prop-types", "moment", "js-md5", "react-autosuggest", "react-google-autocomplete", "react-markdown", "react-router"], factory);
	else if(typeof exports === 'object')
		exports["coderbox-components"] = factory(require("react"), require("lodash"), require("styled-components"), require("prop-types"), require("moment"), require("js-md5"), require("react-autosuggest"), require("react-google-autocomplete"), require("react-markdown"), require("react-router"));
	else
		root["coderbox-components"] = factory(root["react"], root["lodash"], root["styled-components"], root["prop-types"], root["moment"], root["js-md5"], root["react-autosuggest"], root["react-google-autocomplete"], root["react-markdown"], root["react-router"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/autocomplete-location/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _reactGoogleAutocomplete = __webpack_require__(7);

var _reactGoogleAutocomplete2 = _interopRequireDefault(_reactGoogleAutocomplete);

var _styles = __webpack_require__("./src/autocomplete-location/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteLocation = function (_React$Component) {
  _inherits(AutocompleteLocation, _React$Component);

  function AutocompleteLocation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutocompleteLocation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteLocation.__proto__ || Object.getPrototypeOf(AutocompleteLocation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      formatted_address: _this.convertAddress(_this.props.value)
    }, _this.onPlaceSelected = function (place) {
      _this.setState({ formatted_address: place.formatted_address });

      if (_this.props.onChange) {
        _this.props.onChange({ formatted_address: place.formatted_address, geometry: place.geometry });
      }
    }, _this.onChange = function (evt) {
      _this.setState({ formatted_address: evt.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutocompleteLocation, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value) {
        this.setState({ formatted_address: this.convertAddress(nextProps.value) });
      }
    }
  }, {
    key: 'convertAddress',
    value: function convertAddress(address) {
      if (!address) {
        return '';
      }

      return (0, _lodash.isString)(address) ? address : address.formatted_address;
    }
  }, {
    key: 'formatPlace',
    value: function formatPlace(place) {
      return {
        formatted_address: place.formatted_address,
        geometry: place.geometry
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var placeholder = this.props.placeholder;

      return _react2.default.createElement(
        _styles.AutocompleteLocationStyle,
        null,
        _react2.default.createElement(_reactGoogleAutocomplete2.default, {
          types: ['(regions)'],
          className: 'form-input',
          value: this.state.formatted_address,
          placeholder: placeholder,
          onChange: this.onChange,
          onPlaceSelected: this.onPlaceSelected
        })
      );
    }
  }]);

  return AutocompleteLocation;
}(_react2.default.Component);

AutocompleteLocation.defaultProps = {
  placeholder: ''
};
exports.default = AutocompleteLocation;

/***/ }),

/***/ "./src/autocomplete-location/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutocompleteLocationStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  & input {\n    width: 100%;\n    box-sizing: border-box;\n    font-family: ', ';\n    font-size: 14px;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 8px 8px;\n    outline: none;\n  }\n'], ['\n  & input {\n    width: 100%;\n    box-sizing: border-box;\n    font-family: ', ';\n    font-size: 14px;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 8px 8px;\n    outline: none;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AutocompleteLocationStyle = exports.AutocompleteLocationStyle = _styledComponents2.default.div(_templateObject, function (p) {
  return p.theme.fontFamily;
}, function (p) {
  return p.theme.borderColors.base;
});

/***/ }),

/***/ "./src/autocomplete-tags/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _styles = __webpack_require__("./src/autocomplete-tags/styles.js");

var _core = __webpack_require__("./src/core/index.js");

var _autocomplete = __webpack_require__("./src/autocomplete/index.js");

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Types
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
        tags.push((0, _lodash.assign)({}, tag, { name: this.props.toLowercase ? tag.name.toLocaleLowerCase() : tag.name }));

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
    value: function onKeyDown(evt) {
      if (evt.keyCode === Keys.ENTER || evt.keyCode === Keys.COMMA) {
        evt.preventDefault();

        if (this.state.suggestion) {
          this.addTag(this.state.suggestion);
          this.setState({ suggestion: null });
        }
      }

      if (evt.keyCode === Keys.BACKSPACE && this.state.tags.length > 0) {
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
          placeholder = _props.placeholder,
          className = _props.className;
      var _state = this.state,
          tags = _state.tags,
          suggestion = _state.suggestion;


      if (!className) {
        className = '';
      }

      return _react2.default.createElement(
        _styles.AutocompleteTagsStyle,
        { className: 'AutocompleteTags ' + className },
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
          onChange: function onChange(suggestion) {
            return _this2.setState({ suggestion: suggestion });
          },
          onKeyDown: function onKeyDown(evt) {
            return _this2.onKeyDown(evt);
          }
        })
      );
    }
  }]);

  return AutocompleteTags;
}(_react2.default.Component);

AutocompleteTags.defaultProps = {
  color: 'primary',
  className: '',
  allowNew: false,
  toLowercase: false
};
exports.default = AutocompleteTags;

/***/ }),

/***/ "./src/autocomplete-tags/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagsStyle = exports.AutocompleteTagsStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 4px;\n  box-sizing: border-box;\n  border: 1px solid rgb(218, 218, 218);\n  border-radius: 4px;\n\n  & input {\n    border: 1px dashed ', ' !important;\n  }\n\n  .pac-container {\n    border: 1px solid red;\n  }\n'], ['\n  padding: 4px;\n  box-sizing: border-box;\n  border: 1px solid rgb(218, 218, 218);\n  border-radius: 4px;\n\n  & input {\n    border: 1px dashed ', ' !important;\n  }\n\n  .pac-container {\n    border: 1px solid red;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: ', ';\n  margin-bottom: 4px;\n'], ['\n  display: ', ';\n  margin-bottom: 4px;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AutocompleteTagsStyle = exports.AutocompleteTagsStyle = _styledComponents2.default.div(_templateObject, function (p) {
  return p.theme.borderColors.base;
});

var TagsStyle = exports.TagsStyle = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.display ? 'block' : 'none';
});

/***/ }),

/***/ "./src/autocomplete/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = __webpack_require__(6);

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _styles = __webpack_require__("./src/autocomplete/styles.js");

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
    value: function onSuggestion(event, data) {
      this.setState({ suggestion: data.suggestion });
    }
  }, {
    key: 'onChange',
    value: function onChange(event, data) {
      this.setState({ searchText: data.newValue });
      if (this.props.onChange) {
        this.props.onChange(this.firstSuggestion(data.newValue) || { name: data.newValue });
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
    value: function onSuggestionsFetchRequested(data) {
      this.setState({ suggestions: this.fetchSuggestions(data.value) });
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

/***/ }),

/***/ "./src/autocomplete/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  container: {
    position: 'relative'
  },
  suggestionsContainer: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '-4px',
    zIndex: '4',
    marginTop: '-1px',
    border: '1px solid #dadada',
    background: 'white',
    fontSize: '14px',
    display: 'none',
    transform: 'translate(0%, 100%)',
    borderRadius: '4px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
  },
  suggestionsContainerOpen: {
    display: 'block'
  },
  suggestionsList: {
    margin: '0px',
    padding: '0px',
    listStyleType: 'none',
    marginBottom: '0px',
    borderRadius: '4px'
  },
  suggestion: {
    padding: '8px 12px',
    textAlign: 'left',
    borderBottom: '1px solid #DADADA'
  },
  suggestionHighlighted: {
    background: '#e8e8e8'
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #dadada',
    borderRadius: 4,
    fontSize: 14,
    fontFamily: 'Open Sans',
    padding: '8px 8px',
    outline: 'none'
  }
};

/***/ }),

/***/ "./src/core/components/Avatar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jsMd = __webpack_require__(5);

var _jsMd2 = _interopRequireDefault(_jsMd);

var _styles = __webpack_require__("./src/core/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvatarComponent = function AvatarComponent(_ref) {
  var email = _ref.email,
      url = _ref.url,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 140 : _ref$size,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$edit = _ref.edit,
      edit = _ref$edit === undefined ? false : _ref$edit;

  var hash = (0, _jsMd2.default)(email || '');
  var image = url || 'https://www.gravatar.com/avatar/' + hash + '?s=' + size;

  return _react2.default.createElement(
    _styles.AvatarStyle,
    { className: className },
    _react2.default.createElement(_styles.AvatarImageStyle, { image: image, size: size + 'px' }),
    edit && _react2.default.createElement(
      'a',
      {
        href: 'https://en.gravatar.com/support/activating-your-account/',
        target: '_blank',
        style: { marginTop: 4, display: 'block' }
      },
      'Change picture'
    )
  );
};
exports.default = AvatarComponent;

/***/ }),

/***/ "./src/core/components/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/core/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonComponent = function ButtonComponent(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? 'base' : _ref$color,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === undefined ? 'base' : _ref$textColor,
      _ref$primary = _ref.primary,
      primary = _ref$primary === undefined ? false : _ref$primary,
      _ref$success = _ref.success,
      success = _ref$success === undefined ? false : _ref$success,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      onClick = _ref.onClick,
      children = _ref.children;

  if (primary) {
    color = textColor = 'primary';
  }

  if (success) {
    color = textColor = 'success';
  }

  return _react2.default.createElement(
    _styles.ButtonStyle,
    { className: className, color: color, textColor: textColor, onClick: function (_onClick) {
        function onClick(_x) {
          return _onClick.apply(this, arguments);
        }

        onClick.toString = function () {
          return _onClick.toString();
        };

        return onClick;
      }(function (evt) {
        return onClick && onClick(evt);
      }) },
    children
  );
};

exports.default = ButtonComponent;

/***/ }),

/***/ "./src/core/components/Logo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/core/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoComponent = function LogoComponent(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 50 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'base' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  return _react2.default.createElement(
    _styles.LogoStyle,
    { size: size + 'px', className: className },
    _react2.default.createElement(
      'a',
      { href: '/' },
      _react2.default.createElement(
        _styles.LogoSvgStyle,
        {
          color: color,
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          x: '0px',
          y: '0px',
          viewBox: '0 0 66.1 66.1' },
        _react2.default.createElement('path', {
          id: 'XMLID_28_',
          d: 'M0,0v66.1h66.1V0H0z M43,50.2c-2.2,1-4.8,1.5-7.8,1.5c-2.7,0-5.2-0.5-7.3-1.4c-2.2-0.9-4-2.2-5.5-3.9c-1.5-1.7-2.7-3.6-3.5-5.9c-0.8-2.3-1.2-4.7-1.2-7.4c0-1.8,0.2-3.5,0.6-5.1c0.4-1.6,1-3.1,1.7-4.5c0.8-1.4,1.7-2.6,2.7-3.7c1.1-1.1,2.3-2,3.6-2.8c1.3-0.8,2.8-1.4,4.4-1.8c1.6-0.4,3.3-0.6,5-0.6c1.3,0,2.6,0.1,3.8,0.4c1.2,0.2,2.3,0.6,3.3,1c1,0.4,2,0.9,2.9,1.5c0.9,0.6,1.7,1.2,2.4,1.9l-2.5,3.5c-0.2,0.2-0.3,0.4-0.6,0.6c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.2-0.4c-0.4-0.3-0.9-0.6-1.5-1c-0.6-0.4-1.3-0.7-2.2-1c-0.9-0.3-2-0.4-3.4-0.4c-1.5,0-2.9,0.3-4.2,0.8c-1.3,0.6-2.4,1.3-3.3,2.4c-0.9,1-1.6,2.3-2.1,3.8c-0.5,1.5-0.8,3.2-0.8,5.2c0,2,0.3,3.7,0.8,5.2c0.5,1.5,1.3,2.8,2.2,3.9c0.9,1,2,1.8,3.3,2.4c1.3,0.5,2.6,0.8,4,0.8c0.9,0,1.6,0,2.3-0.1c0.7-0.1,1.3-0.2,1.9-0.4c0.6-0.2,1.1-0.5,1.7-0.8c0.5-0.3,1.1-0.7,1.6-1.2c0.2-0.2,0.4-0.3,0.6-0.4c0.2-0.1,0.4-0.2,0.7-0.2c0.4,0,0.8,0.2,1,0.5l3,3.2C47,47.8,45.2,49.2,43,50.2z',
          className: 'st0' })
      )
    )
  );
};

exports.default = LogoComponent;

/***/ }),

/***/ "./src/core/components/Tags.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/core/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagsComponent = function TagsComponent(_ref) {
  var _ref$tags = _ref.tags,
      tags = _ref$tags === undefined ? [] : _ref$tags,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'base' : _ref$color,
      _ref$withClose = _ref.withClose,
      withClose = _ref$withClose === undefined ? false : _ref$withClose,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      onClick = _ref.onClick;

  var TagElement = withClose ? _styles.TagCloseStyle : _styles.TagStyle;

  return _react2.default.createElement(
    'div',
    { className: 'Tags ' + className },
    tags.map(function (tag, index) {
      return _react2.default.createElement(
        TagElement,
        {
          key: index,
          color: color,
          onClick: function (_onClick) {
            function onClick() {
              return _onClick.apply(this, arguments);
            }

            onClick.toString = function () {
              return _onClick.toString();
            };

            return onClick;
          }(function () {
            return onClick && onClick(tag);
          })
        },
        tag.name
      );
    })
  );
};

exports.default = TagsComponent;

/***/ }),

/***/ "./src/core/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DemoContainer = exports.Container = exports.Label = exports.Button = exports.Logo = exports.Tags = exports.Avatar = undefined;

var _Avatar = __webpack_require__("./src/core/components/Avatar.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Tags = __webpack_require__("./src/core/components/Tags.js");

var _Tags2 = _interopRequireDefault(_Tags);

var _Logo = __webpack_require__("./src/core/components/Logo.js");

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = __webpack_require__("./src/core/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _styles = __webpack_require__("./src/core/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Avatar = _Avatar2.default;
exports.Tags = _Tags2.default;
exports.Logo = _Logo2.default;
exports.Button = _Button2.default;
exports.Label = _styles.Label;
exports.Container = _styles.Container;
exports.DemoContainer = _styles.DemoContainer;

/***/ }),

/***/ "./src/core/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.DemoContainer = exports.Container = exports.TagCloseStyle = exports.TagStyle = exports.LogoSvgStyle = exports.LogoStyle = exports.ButtonStyle = exports.AvatarImageStyle = exports.AvatarStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: white;\n  text-align: center;\n'], ['\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: white;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(\'', '\');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n'], ['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(\'', '\');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 0px;\n  padding: 8px 35px;\n  font-family: inherit;\n  font-weight: 400;\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 0.80;\n  }\n'], ['\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 0px;\n  padding: 8px 35px;\n  font-family: inherit;\n  font-weight: 400;\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 0.80;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  font-family: \'Inconsolata\', monospace;\n  font-size: 12px;\n  margin: 2px 4px 2px 0px;\n  padding: 0px 12px 0px 12px;\n  border: 1px solid ', ';\n  box-shadow: ', ';\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  outline: none;\n  border-radius: 2px;\n  line-height: 22px;\n\n  &:hover {\n    opacity: 0.85;\n  }\n'], ['\n  display: inline-block;\n  font-family: \'Inconsolata\', monospace;\n  font-size: 12px;\n  margin: 2px 4px 2px 0px;\n  padding: 0px 12px 0px 12px;\n  border: 1px solid ', ';\n  box-shadow: ', ';\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  outline: none;\n  border-radius: 2px;\n  line-height: 22px;\n\n  &:hover {\n    opacity: 0.85;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding-right: 0;\n\n  &:after {\n    display: inline-block;\n    content: \'\\2715\';\n    font-size: 11px;\n    border-left: 1px solid ', ';\n    margin-left: 8px;\n    width: 23px;\n    text-align: center;\n    vertical-align: middle;\n  }\n'], ['\n  padding-right: 0;\n\n  &:after {\n    display: inline-block;\n    content: \'\\\\2715\';\n    font-size: 11px;\n    border-left: 1px solid ', ';\n    margin-left: 8px;\n    width: 23px;\n    text-align: center;\n    vertical-align: middle;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: relative;\n  border: 1px solid ', ';\n  padding: 5px;\n  margin: 10px auto;\n  min-width: ', ';\n  min-height: ', ';\n  display: ', ';\n'], ['\n  position: relative;\n  border: 1px solid ', ';\n  padding: 5px;\n  margin: 10px auto;\n  min-width: ', ';\n  min-height: ', ';\n  display: ', ';\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  text-align: left;\n  padding: 45px 10px 5px 10px;\n\n  &:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 1em;\n    color: #aaa;\n    font-size: smaller;\n    font-weight: 500;\n    content: \'EXAMPLE\';\n  }\n\n  & > label {\n    display: block;\n    margin-bottom: 10px;\n  }\n'], ['\n  text-align: left;\n  padding: 45px 10px 5px 10px;\n\n  &:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 1em;\n    color: #aaa;\n    font-size: smaller;\n    font-weight: 500;\n    content: \'EXAMPLE\';\n  }\n\n  & > label {\n    display: block;\n    margin-bottom: 10px;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  color: #888;\n  font-size: 12px;\n  margin: 5px;\n'], ['\n  color: #888;\n  font-size: 12px;\n  margin: 5px;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__("./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AvatarStyle = exports.AvatarStyle = _styledComponents2.default.div(_templateObject, function (p) {
  return p.theme.borderColors.base;
}, function (p) {
  return p.theme.borderRadius;
}, function (p) {
  return p.theme.shadow;
});

var AvatarImageStyle = exports.AvatarImageStyle = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.theme.borderRadius;
}, function (p) {
  return p.image;
});

var ButtonStyle = exports.ButtonStyle = _styledComponents2.default.button(_templateObject3, function (p) {
  return (0, _utils.parseColor)(p.textColor, p.theme.textColors);
}, function (p) {
  return (0, _utils.parseColor)(p.color, p.theme.colors);
});

var LogoStyle = exports.LogoStyle = _styledComponents2.default.div(_templateObject4, function (p) {
  return p.size;
}, function (p) {
  return p.size;
});

var LogoSvgStyle = exports.LogoSvgStyle = _styledComponents2.default.svg(_templateObject5, function (p) {
  return p.theme.colors[p.color];
});

var TagStyle = exports.TagStyle = _styledComponents2.default.div(_templateObject6, function (p) {
  return p.theme.borderColors[p.color];
}, function (p) {
  return p.theme.shadow;
}, function (p) {
  return p.theme.textColors[p.color];
}, function (p) {
  return p.theme.colors[p.color];
});

var TagCloseStyle = exports.TagCloseStyle = (0, _styledComponents2.default)(TagStyle)(_templateObject7, function (p) {
  return p.theme.borderColors[p.color];
});
var Container = exports.Container = _styledComponents2.default.div(_templateObject8, function (p) {
  return p.theme.borderColors.base;
}, function (p) {
  return (0, _utils.toPx)(p.width) || 'auto';
}, function (p) {
  return (0, _utils.toPx)(p.height) || 'auto';
}, function (p) {
  return p.inline ? 'inline-block' : 'block';
});
var DemoContainer = exports.DemoContainer = Container.extend(_templateObject9);

var Label = exports.Label = _styledComponents2.default.div(_templateObject10);

/***/ }),

/***/ "./src/date-utils/components/DatePicker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/date-utils/styles.js");

var _moment = __webpack_require__(4);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerComponent = function DatePickerComponent(_ref) {
  var value = _ref.value,
      hideMonths = _ref.hideMonths,
      onChange = _ref.onChange;

  var month = (0, _moment2.default)(value).month();
  var year = (0, _moment2.default)(value).year();

  return _react2.default.createElement(
    _styles.DatePickerContainer,
    null,
    !hideMonths && _react2.default.createElement(
      'select',
      { value: month, onChange: function (_onChange) {
          function onChange(_x) {
            return _onChange.apply(this, arguments);
          }

          onChange.toString = function () {
            return _onChange.toString();
          };

          return onChange;
        }(function (e) {
          return onChange((0, _moment2.default)().year(year).month(e.target.value));
        }) },
      _react2.default.createElement(
        'option',
        { value: '0' },
        'January'
      ),
      _react2.default.createElement(
        'option',
        { value: '1' },
        'February'
      ),
      _react2.default.createElement(
        'option',
        { value: '2' },
        'March'
      ),
      _react2.default.createElement(
        'option',
        { value: '3' },
        'April'
      ),
      _react2.default.createElement(
        'option',
        { value: '4' },
        'May'
      ),
      _react2.default.createElement(
        'option',
        { value: '5' },
        'June'
      ),
      _react2.default.createElement(
        'option',
        { value: '6' },
        'July'
      ),
      _react2.default.createElement(
        'option',
        { value: '7' },
        'August'
      ),
      _react2.default.createElement(
        'option',
        { value: '8' },
        'September'
      ),
      _react2.default.createElement(
        'option',
        { value: '9' },
        'October'
      ),
      _react2.default.createElement(
        'option',
        { value: '10' },
        'November'
      ),
      _react2.default.createElement(
        'option',
        { value: '11' },
        'December'
      )
    ),
    _react2.default.createElement(
      'select',
      { value: year, onChange: function (_onChange2) {
          function onChange(_x2) {
            return _onChange2.apply(this, arguments);
          }

          onChange.toString = function () {
            return _onChange2.toString();
          };

          return onChange;
        }(function (e) {
          return onChange((0, _moment2.default)().year(e.target.value).month(month));
        }) },
      _react2.default.createElement(
        'option',
        { value: '2017' },
        '2017'
      ),
      _react2.default.createElement(
        'option',
        { value: '2016' },
        '2016'
      ),
      _react2.default.createElement(
        'option',
        { value: '2015' },
        '2015'
      ),
      _react2.default.createElement(
        'option',
        { value: '2014' },
        '2014'
      ),
      _react2.default.createElement(
        'option',
        { value: '2013' },
        '2013'
      ),
      _react2.default.createElement(
        'option',
        { value: '2012' },
        '2012'
      ),
      _react2.default.createElement(
        'option',
        { value: '2011' },
        '2011'
      ),
      _react2.default.createElement(
        'option',
        { value: '2010' },
        '2010'
      ),
      _react2.default.createElement(
        'option',
        { value: '2009' },
        '2009'
      ),
      _react2.default.createElement(
        'option',
        { value: '2008' },
        '2008'
      ),
      _react2.default.createElement(
        'option',
        { value: '2007' },
        '2007'
      ),
      _react2.default.createElement(
        'option',
        { value: '2006' },
        '2006'
      ),
      _react2.default.createElement(
        'option',
        { value: '2005' },
        '2005'
      ),
      _react2.default.createElement(
        'option',
        { value: '2004' },
        '2004'
      ),
      _react2.default.createElement(
        'option',
        { value: '2003' },
        '2003'
      ),
      _react2.default.createElement(
        'option',
        { value: '2002' },
        '2002'
      ),
      _react2.default.createElement(
        'option',
        { value: '2001' },
        '2001'
      ),
      _react2.default.createElement(
        'option',
        { value: '2000' },
        '2000'
      ),
      _react2.default.createElement(
        'option',
        { value: '1999' },
        '1999'
      ),
      _react2.default.createElement(
        'option',
        { value: '1998' },
        '1998'
      ),
      _react2.default.createElement(
        'option',
        { value: '1997' },
        '1997'
      ),
      _react2.default.createElement(
        'option',
        { value: '1996' },
        '1996'
      ),
      _react2.default.createElement(
        'option',
        { value: '1995' },
        '1995'
      ),
      _react2.default.createElement(
        'option',
        { value: '1994' },
        '1994'
      ),
      _react2.default.createElement(
        'option',
        { value: '1993' },
        '1993'
      ),
      _react2.default.createElement(
        'option',
        { value: '1992' },
        '1992'
      ),
      _react2.default.createElement(
        'option',
        { value: '1991' },
        '1991'
      ),
      _react2.default.createElement(
        'option',
        { value: '1990' },
        '1990'
      ),
      _react2.default.createElement(
        'option',
        { value: '1989' },
        '1989'
      ),
      _react2.default.createElement(
        'option',
        { value: '1988' },
        '1988'
      ),
      _react2.default.createElement(
        'option',
        { value: '1987' },
        '1987'
      ),
      _react2.default.createElement(
        'option',
        { value: '1986' },
        '1986'
      ),
      _react2.default.createElement(
        'option',
        { value: '1985' },
        '1985'
      ),
      _react2.default.createElement(
        'option',
        { value: '1984' },
        '1984'
      ),
      _react2.default.createElement(
        'option',
        { value: '1983' },
        '1983'
      ),
      _react2.default.createElement(
        'option',
        { value: '1982' },
        '1982'
      )
    )
  );
};
exports.default = DatePickerComponent;

/***/ }),

/***/ "./src/date-utils/components/DateRange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DatePicker = __webpack_require__("./src/date-utils/components/DatePicker.js");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _flexbox = __webpack_require__("./src/flexbox/index.js");

var _flexbox2 = _interopRequireDefault(_flexbox);

var _styles = __webpack_require__("./src/date-utils/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Types
var DateRangeComponent = function (_React$Component) {
  _inherits(DateRangeComponent, _React$Component);

  function DateRangeComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateRangeComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateRangeComponent.__proto__ || Object.getPrototypeOf(DateRangeComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = { range: _this.props.range || { start: new Date() } }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateRangeComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.range !== this.props.range) {
        this.setState({ range: nextProps.range });
      }
    }
  }, {
    key: 'handletDateChange',
    value: function handletDateChange(date, field) {
      var range = _extends({}, this.state.range, _defineProperty({}, field, date.toDate()));

      this.setState({ range: range });

      if (this.props.onChange) {
        this.props.onChange(range);
      }
    }
  }, {
    key: 'handleChecked',
    value: function handleChecked(checked) {
      var range = _extends({}, this.state.range, {
        end: this.props.range && this.props.range.end || new Date()
      });

      if (checked) {
        range.end = null;
      }

      this.setState({ range: range });

      if (this.props.onChange) {
        this.props.onChange(range);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var range = this.state.range;


      return _react2.default.createElement(
        _styles.DateRangeContainer,
        { className: 'DateRange' },
        _react2.default.createElement(
          _flexbox2.default,
          { alignItems: 'center' },
          _react2.default.createElement(_DatePicker2.default, {
            value: range.start,
            onChange: function onChange(v) {
              return _this2.handletDateChange(v, 'start');
            },
            hideMonths: this.props.hideMonths,
            className: 'DateRange-startdate'
          }),
          _react2.default.createElement(
            _styles.Icon,
            { className: 'material-icons' },
            'trending_flat'
          ),
          range.end ? _react2.default.createElement(_DatePicker2.default, {
            value: range.end,
            onChange: function onChange(v) {
              return _this2.handletDateChange(v, 'end');
            },
            hideMonths: this.props.hideMonths,
            className: 'DateRange-enddate'
          }) : _react2.default.createElement(
            'div',
            null,
            'Present'
          )
        ),
        _react2.default.createElement(
          _flexbox2.default,
          { alignItems: 'center' },
          _react2.default.createElement('input', {
            type: 'checkbox',
            checked: !range.end,
            onChange: function onChange(e) {
              return _this2.handleChecked(e.target.checked);
            }
          }),
          this.props.label || 'I still work here'
        )
      );
    }
  }]);

  return DateRangeComponent;
}(_react2.default.Component);

exports.default = DateRangeComponent;

/***/ }),

/***/ "./src/date-utils/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRange = exports.DatePicker = undefined;

var _DatePicker = __webpack_require__("./src/date-utils/components/DatePicker.js");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _DateRange = __webpack_require__("./src/date-utils/components/DateRange.js");

var _DateRange2 = _interopRequireDefault(_DateRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DatePicker = _DatePicker2.default;
exports.DateRange = _DateRange2.default;

/***/ }),

/***/ "./src/date-utils/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerContainer = exports.DateRangeContainer = exports.Icon = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0px 10px\n'], ['\n  margin: 0px 10px\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  \n  & select {\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 4px 4px;\n  }\n'], ['\n  font-size: 14px;\n  \n  & select {\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 4px 4px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  & select:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  & select:last-child {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n'], ['\n  & select:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  & select:last-child {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _flexbox = __webpack_require__("./src/flexbox/index.js");

var _flexbox2 = _interopRequireDefault(_flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = exports.Icon = _styledComponents2.default.i(_templateObject);

var DateRangeContainer = exports.DateRangeContainer = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.theme.borderColors.base;
});

var DatePickerContainer = exports.DatePickerContainer = (0, _styledComponents2.default)(_flexbox2.default)(_templateObject3);

/***/ }),

/***/ "./src/flexbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/flexbox/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexComponent = function FlexComponent(props) {
  return _react2.default.createElement(
    _styles.FlexStyle,
    _extends({ className: props.className }, props),
    props.children
  );
};

FlexComponent.defaultProps = {
  className: ''
};

exports.default = FlexComponent;

/***/ }),

/***/ "./src/flexbox/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n\n  & > div {\n    margin-left: 0;\n    margin-right: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n\n  & > div {\n    margin-left: 0;\n    margin-right: 0;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexStyle = exports.FlexStyle = _styledComponents2.default.div(_templateObject, function (p) {
  return p.column ? 'column' : 'row';
}, function (p) {
  return p.justifyContent || 'flex-start';
}, function (p) {
  return p.alignItems || 'flex-start';
});

/***/ }),

/***/ "./src/form/components/Form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _core = __webpack_require__("./src/core/index.js");

var _styles = __webpack_require__("./src/form/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.items = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { form: this };
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

      var _props = this.props,
          children = _props.children,
          showButtons = _props.showButtons,
          showSave = _props.showSave,
          showCancel = _props.showCancel,
          saveLabel = _props.saveLabel,
          cancelLabel = _props.cancelLabel;


      return _react2.default.createElement(
        _styles.FormStyle,
        { className: 'Form' },
        children,
        showButtons ? _react2.default.createElement(
          'div',
          { className: 'Form-buttons' },
          showSave && _react2.default.createElement(
            _core.Button,
            { primary: true, onClick: function onClick() {
                return _this2.props.onSave(_this2);
              } },
            saveLabel
          ),
          showCancel && _react2.default.createElement(
            _core.Button,
            { onClick: function onClick() {
                return _this2.props.onCancel();
              } },
            cancelLabel
          )
        ) : null
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.propTypes = {
  showButtons: _propTypes.bool,
  showSave: _propTypes.bool,
  showCancel: _propTypes.bool,
  saveLabel: _propTypes.string,
  cancelLabel: _propTypes.string,
  onSave: _propTypes.func,
  onCancel: _propTypes.func
};
Form.defaultProps = {
  saveLabel: 'Save',
  cancelLabel: 'Cancel',
  showButtons: true,
  showSave: true,
  showCancel: true,
  onSave: function onSave() {
    return true;
  },
  onCancel: function onCancel() {
    return true;
  }
};
Form.childContextTypes = {
  form: _propTypes.object
};
exports.default = Form;

/***/ }),

/***/ "./src/form/components/FormItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _lodash = __webpack_require__(1);

var _styles = __webpack_require__("./src/form/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = function (_React$Component) {
  _inherits(FormItem, _React$Component);

  function FormItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormItem.__proto__ || Object.getPrototypeOf(FormItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value || _this.props.defaultValue,
      valid: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
      var _props = this.props,
          valueFromEvent = _props.valueFromEvent,
          component = _props.component;


      if (!valueFromEvent) {
        if ((0, _lodash.isString)(component)) {
          valueFromEvent = function valueFromEvent(event) {
            return event.target.value;
          };
        } else {
          valueFromEvent = function valueFromEvent(event) {
            return event;
          };
        }
      }

      var value = valueFromEvent(event);
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
        { className: 'FormItem' },
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
  value: _propTypes.any,
  defaultValue: _propTypes.any,
  label: _propTypes.string,
  error: _propTypes.string,
  component: (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.string]).isRequired,
  componentProps: _propTypes.object,
  validator: _propTypes.func,
  valueFromEvent: _propTypes.func,
  valueField: _propTypes.string,
  onChange: _propTypes.func,
  onEnter: _propTypes.func,
  componentChildren: _propTypes.array
};
FormItem.defaultProps = {
  componentProps: {},
  defaultValue: undefined,
  valueField: 'value'
};
FormItem.contextTypes = { form: _propTypes.object };
exports.default = FormItem;

/***/ }),

/***/ "./src/form/components/FormValidators.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Validators = {
  email: function email(value) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  },

  minLength: function minLength(value) {
    return value && value.length >= 3;
  },

  name: function name(value) {
    if (!value) {
      return false;
    }

    var tmp = value.split(' ');

    if (tmp.length < 2) {
      return false;
    }

    return tmp[0].length >= 3 && tmp[1].length >= 3;
  }
};

exports.default = Validators;

/***/ }),

/***/ "./src/form/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormValidators = exports.FormItem = exports.Form = undefined;

var _Form = __webpack_require__("./src/form/components/Form.js");

var _Form2 = _interopRequireDefault(_Form);

var _FormItem = __webpack_require__("./src/form/components/FormItem.js");

var _FormItem2 = _interopRequireDefault(_FormItem);

var _FormValidators = __webpack_require__("./src/form/components/FormValidators.js");

var _FormValidators2 = _interopRequireDefault(_FormValidators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Form = _Form2.default;
exports.FormItem = _FormItem2.default;
exports.FormValidators = _FormValidators2.default;

/***/ }),

/***/ "./src/form/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItemStyle = exports.FormStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: auto;\n  text-align: left;\n\n  & .Form-buttons {\n    padding: 5px 0px;\n  }\n\n  & button {\n    margin-right: 5px;\n  }\n\n  & label.error {\n    display: inline-block;\n    font-size: 11px;\n    font-weight: 400;\n    color: red;\n    margin: 5px 5px 5px 5px;\n  }\n'], ['\n  margin: auto;\n  text-align: left;\n\n  & .Form-buttons {\n    padding: 5px 0px;\n  }\n\n  & button {\n    margin-right: 5px;\n  }\n\n  & label.error {\n    display: inline-block;\n    font-size: 11px;\n    font-weight: 400;\n    color: red;\n    margin: 5px 5px 5px 5px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 5px 0px;\n\n  & label {\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n\n  & textarea,\n  & input[type="text"],\n  & input[type="number"],\n  & input[type="password"],\n  & input[type="email"] {\n    width: 100%;\n    box-sizing: border-box;\n    font-family: ', ';\n    font-size: 14px;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 8px 8px;\n    outline: none;\n  }\n\n  & textarea {\n    padding: 12px 12px;\n  }\n'], ['\n  padding: 5px 0px;\n\n  & label {\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n\n  & textarea,\n  & input[type="text"],\n  & input[type="number"],\n  & input[type="password"],\n  & input[type="email"] {\n    width: 100%;\n    box-sizing: border-box;\n    font-family: ', ';\n    font-size: 14px;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 8px 8px;\n    outline: none;\n  }\n\n  & textarea {\n    padding: 12px 12px;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormStyle = exports.FormStyle = _styledComponents2.default.div(_templateObject);

var FormItemStyle = exports.FormItemStyle = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.theme.fontFamily;
}, function (p) {
  return p.theme.borderColors.base;
});

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.theme = exports.Flex = exports.Spinner = exports.AutocompleteLocation = exports.AutocompleteTags = exports.Autocomplete = undefined;

var _core = __webpack_require__("./src/core/index.js");

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

var _dateUtils = __webpack_require__("./src/date-utils/index.js");

Object.keys(_dateUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dateUtils[key];
    }
  });
});

var _listItem = __webpack_require__("./src/list-item/index.js");

Object.keys(_listItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _listItem[key];
    }
  });
});

var _form = __webpack_require__("./src/form/index.js");

Object.keys(_form).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form[key];
    }
  });
});

var _navigation = __webpack_require__("./src/navigation/index.js");

Object.keys(_navigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _navigation[key];
    }
  });
});

var _autocomplete = __webpack_require__("./src/autocomplete/index.js");

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _autocompleteTags = __webpack_require__("./src/autocomplete-tags/index.js");

var _autocompleteTags2 = _interopRequireDefault(_autocompleteTags);

var _autocompleteLocation = __webpack_require__("./src/autocomplete-location/index.js");

var _autocompleteLocation2 = _interopRequireDefault(_autocompleteLocation);

var _flexbox = __webpack_require__("./src/flexbox/index.js");

var _flexbox2 = _interopRequireDefault(_flexbox);

var _spinner = __webpack_require__("./src/spinner/index.js");

var _spinner2 = _interopRequireDefault(_spinner);

var _theme = __webpack_require__("./src/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _utils = __webpack_require__("./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Autocomplete = _autocomplete2.default;
exports.AutocompleteTags = _autocompleteTags2.default;
exports.AutocompleteLocation = _autocompleteLocation2.default;
exports.Spinner = _spinner2.default;
exports.Flex = _flexbox2.default;
exports.theme = _theme2.default;
exports.utils = _utils2.default;

/***/ }),

/***/ "./src/list-item/components/EditableListItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _spinner = __webpack_require__("./src/spinner/index.js");

var _spinner2 = _interopRequireDefault(_spinner);

var _ListItem = __webpack_require__("./src/list-item/components/ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemForm = __webpack_require__("./src/list-item/components/ListItemForm.js");

var _ListItemForm2 = _interopRequireDefault(_ListItemForm);

var _styles = __webpack_require__("./src/list-item/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles


var EditableListItem = function (_React$Component) {
  _inherits(EditableListItem, _React$Component);

  function EditableListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditableListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableListItem.__proto__ || Object.getPrototypeOf(EditableListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = { editMode: false }, _this.handleFormSave = function (form) {
      var _this$props = _this.props,
          item = _this$props.item,
          onSave = _this$props.onSave;


      if (form.validate()) {
        var _data = form.data();
        onSave((0, _lodash.assign)({}, item, _data));
        _this.setState({ editMode: false });
      }
    }, _this.handleFormCancel = function () {
      _this.setState({ editMode: false });
    }, _this.handleEdit = function () {
      _this.setState({ editMode: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditableListItem, [{
    key: 'renderToolbar',
    value: function renderToolbar() {
      var _this2 = this;

      var _props = this.props,
          onDelete = _props.onDelete,
          loading = _props.loading;
      var editMode = this.state.editMode;


      return _react2.default.createElement(
        _styles.ToolbarStyle,
        { className: 'ListItem-toolbar' },
        function () {
          if (loading) {
            return _react2.default.createElement(
              _styles.SpinnerStyle,
              null,
              _react2.default.createElement(_spinner2.default, { color: 'primary', size: 30, hideLabel: true, hideOverlay: true })
            );
          } else {
            if (!editMode) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'i',
                  {
                    className: 'material-icons',
                    onClick: function onClick() {
                      return _this2.handleEdit();
                    }
                  },
                  'edit'
                ),
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons', onClick: function onClick() {
                      return onDelete();
                    } },
                  'delete'
                )
              );
            }
          }
        }()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          item = _props2.item,
          itemProps = _props2.itemProps,
          formProps = _props2.formProps,
          className = _props2.className;
      var editMode = this.state.editMode;


      var ItemElement = (0, _react.createElement)(_ListItem2.default, _extends({}, itemProps, {
        item: item
      }));

      var FormElement = (0, _react.createElement)(_ListItemForm2.default, _extends({
        onSave: this.handleFormSave,
        onCancel: this.handleFormCancel
      }, formProps, {
        item: item
      }));

      return _react2.default.createElement(
        _styles.EditableItemStyle,
        { className: className },
        editMode ? FormElement : ItemElement,
        this.renderToolbar()
      );
    }
  }]);

  return EditableListItem;
}(_react2.default.Component);

EditableListItem.defaultProps = {
  itemProps: {},
  formProps: {},
  className: ''
};
exports.default = EditableListItem;

/***/ }),

/***/ "./src/list-item/components/ListItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(4);

var _moment2 = _interopRequireDefault(_moment);

var _reactMarkdown = __webpack_require__(8);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _lodash = __webpack_require__(1);

var _core = __webpack_require__("./src/core/index.js");

var _styles = __webpack_require__("./src/list-item/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// libs


// styles


// types
var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = { readMore: true }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItem, [{
    key: 'toggleReadMore',
    value: function toggleReadMore() {
      this.setState({ readMore: !this.state.readMore });
    }
  }, {
    key: 'readMore',
    value: function readMore(text) {
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var readMore = this.state.readMore;

      if (!readMore) return text;

      if (text.length > max) {
        return text.substring(0, max) + '...';
      }

      return text;
    }
  }, {
    key: 'renderLogo',
    value: function renderLogo(image) {
      return _react2.default.createElement(
        _styles.LogoStyle,
        { className: 'ListItem-logo' },
        _react2.default.createElement('div', { style: { backgroundImage: 'url("' + image + '")' } })
      );
    }
  }, {
    key: 'renderDate',
    value: function renderDate(dateRange) {
      var hideBlocks = this.props.hideBlocks;

      if (hideBlocks && hideBlocks.indexOf('date') > -1) return null;

      if (!dateRange) {
        dateRange = { start: new Date(), end: null };
      }

      return _react2.default.createElement(
        _styles.DatesStyle,
        { className: 'ListItem-dates', alignItems: 'center' },
        _react2.default.createElement(
          'div',
          null,
          (0, _moment2.default)(dateRange.start).format('MMM/YYYY')
        ),
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'trending_flat'
        ),
        _react2.default.createElement(
          'div',
          null,
          dateRange.end ? (0, _moment2.default)(dateRange.end).format('MMM/YYYY') : 'Present'
        )
      );
    }
  }, {
    key: 'renderTitleSubtitle',
    value: function renderTitleSubtitle(title, subtitle) {
      var hideBlocks = this.props.hideBlocks;

      if (hideBlocks && hideBlocks.indexOf('title') > -1) return null;

      return _react2.default.createElement(
        _styles.TitleSubtitleStyle,
        { className: 'ListItem-title-subtitle' },
        _react2.default.createElement(
          'div',
          { className: 'ListItem-title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'ListItem-subtitle' },
          _react2.default.createElement(
            'a',
            { href: '#' },
            '@ ',
            subtitle
          )
        )
      );
    }
  }, {
    key: 'renderTags',
    value: function renderTags(tags) {
      var hideBlocks = this.props.hideBlocks;

      if (hideBlocks && hideBlocks.indexOf('tags') > -1) return null;

      return _react2.default.createElement(_core.Tags, { className: 'ListItem-tags', tags: tags });
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription(description) {
      var _this2 = this;

      var hideBlocks = this.props.hideBlocks;

      if (hideBlocks && hideBlocks.indexOf('description') > -1) return null;

      var child = _react2.default.createElement(
        'a',
        { onClick: function onClick() {
            return _this2.toggleReadMore();
          }, className: 'ListItem-readmore' },
        this.state.readMore ? '+ Read More' : '- Read Less'
      );
      var max = 120;

      if (description.length < max) {
        child = null;
      }

      return _react2.default.createElement(
        _styles.MarkdownStyle,
        { className: 'ListItem-description' },
        _react2.default.createElement(_reactMarkdown2.default, { source: this.readMore(description, max), childAfter: child })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          isOdd = _props.isOdd,
          className = _props.className,
          transform = _props.transform,
          renderExtra = _props.renderExtra;

      item = transform(item);
      className += isOdd ? ' odd' : '';

      return _react2.default.createElement(
        _styles.ItemStyle,
        { className: 'ListItem ' + className, alignItems: 'stretch' },
        _react2.default.createElement(
          'div',
          { className: 'ListItem-left' },
          this.renderLogo(item.image)
        ),
        _react2.default.createElement(
          'div',
          { className: 'ListItem-right' },
          this.renderDate(item.dateRange),
          this.renderTitleSubtitle(item.title, item.subtitle),
          this.renderTags(item.tags),
          this.renderDescription((0, _lodash.trim)(item.description)),
          renderExtra && _react2.default.createElement(
            'div',
            { className: 'ListItem-extra' },
            renderExtra(item)
          )
        )
      );
    }
  }]);

  return ListItem;
}(_react2.default.Component);

ListItem.defaultProps = {
  hideBlocks: [],
  className: '',
  transform: function transform(data) {
    return data;
  }
};
exports.default = ListItem;

/***/ }),

/***/ "./src/list-item/components/ListItemForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// libs


// styles


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _form = __webpack_require__("./src/form/index.js");

var _autocompleteTags = __webpack_require__("./src/autocomplete-tags/index.js");

var _autocompleteTags2 = _interopRequireDefault(_autocompleteTags);

var _dateUtils = __webpack_require__("./src/date-utils/index.js");

var _styles = __webpack_require__("./src/list-item/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSettings = {
  title: {
    name: 'title',
    label: 'Title:',
    component: 'input',
    componentProps: {
      type: 'text'
    },
    sort: 0
  },
  subtitle: {
    name: 'subtitle',
    label: 'Subtitle:',
    component: 'input',
    componentProps: {
      type: 'text'
    },
    sort: 1
  },
  tags: {
    name: 'tags',
    label: 'Tags:',
    component: _autocompleteTags2.default,
    componentProps: {
      color: 'primary',
      allowNew: true,
      toLowercase: true,
      suggestions: [],
      placeholder: 'Tags (ex. javascript)'
    },
    sort: 2
  },
  dateRange: {
    name: 'dateRange',
    label: 'DateRange:',
    valueField: 'range',
    component: _dateUtils.DateRange,
    componentProps: {
      checkboxLabel: 'In progress...',
      hideMonths: false
    },
    sort: 3
  },
  description: {
    name: 'description',
    label: 'Description:',
    component: 'textarea',
    componentProps: {
      placeholder: 'Description ?',
      rows: '6'
    },
    sort: 4
  }
};

var ListItemForm = function ListItemForm(_ref) {
  var item = _ref.item,
      settings = _ref.settings,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel;

  var mergedSettings = (0, _lodash.merge)({}, defaultSettings, settings || {});
  var settingsKeys = (0, _lodash.sortBy)((0, _lodash.keys)(mergedSettings), function (key) {
    return mergedSettings[key] && mergedSettings[key].sort;
  });
  var children = [];

  settingsKeys.forEach(function (key, index) {
    var elementProps = mergedSettings[key];
    if (elementProps !== null) {
      var value = item[elementProps.name];

      if ((0, _lodash.isArray)(value)) {
        value = value.concat();
      }

      var element = (0, _react.createElement)(_form.FormItem, _extends({}, elementProps, {
        value: value,
        key: index
      }));

      children.push(element);
    }
  });

  return _react2.default.createElement(
    _styles.FormStyle,
    { className: 'ListItemForm' },
    _react2.default.createElement(
      _form.Form,
      { onSave: onSave, onCancel: onCancel },
      children
    )
  );
};

exports.default = ListItemForm;

/***/ }),

/***/ "./src/list-item/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableListItem = exports.ListItemForm = exports.ListItem = undefined;

var _ListItem = __webpack_require__("./src/list-item/components/ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemForm = __webpack_require__("./src/list-item/components/ListItemForm.js");

var _ListItemForm2 = _interopRequireDefault(_ListItemForm);

var _EditableListItem = __webpack_require__("./src/list-item/components/EditableListItem.js");

var _EditableListItem2 = _interopRequireDefault(_EditableListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ListItem = _ListItem2.default;
exports.ListItemForm = _ListItemForm2.default;
exports.EditableListItem = _EditableListItem2.default;

/***/ }),

/***/ "./src/list-item/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerStyle = exports.MarkdownStyle = exports.ToolbarStyle = exports.DatesStyle = exports.TitleSubtitleStyle = exports.LogoStyle = exports.FormStyle = exports.EditableItemStyle = exports.ItemStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  text-align: left;\n\n  & > div:first-child {\n    margin-right: 15px;\n  }\n\n  & a {\n    cursor: pointer;\n    color: ', ';\n  }\n\n  &.odd {\n    background-color: ', ';\n  }\n'], ['\n  position: relative;\n  text-align: left;\n\n  & > div:first-child {\n    margin-right: 15px;\n  }\n\n  & a {\n    cursor: pointer;\n    color: ', ';\n  }\n\n  &.odd {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: #F7F7F7;\n'], ['\n  background-color: #F7F7F7;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  padding: 5px;\n  border: 1px solid ', ';\n  box-shadow: ', ';\n  border-radius: 5px;\n  box-sizing: border-box;\n\n  & > div {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n'], ['\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  padding: 5px;\n  border: 1px solid ', ';\n  box-shadow: ', ';\n  border-radius: 5px;\n  box-sizing: border-box;\n\n  & > div {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin-bottom: 8px;\n\n  & > div:first-child {\n    font-size: 19px;\n  }\n'], ['\n  margin-bottom: 8px;\n\n  & > div:first-child {\n    font-size: 19px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: -4px;\n  color: ', ';\n\n  & i {\n    font-size: 26px;\n    margin: 0 6px\n  }\n'], ['\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: -4px;\n  color: ', ';\n\n  & i {\n    font-size: 26px;\n    margin: 0 6px\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #888;\n\n  & i {\n    margin: 0px 5px;\n    cursor: pointer;\n  }\n  \n  & i:hover {\n    color: ', ';\n  }\n'], ['\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #888;\n\n  & i {\n    margin: 0px 5px;\n    cursor: pointer;\n  }\n  \n  & i:hover {\n    color: ', ';\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  color: ', ';\n  p {\n    margin-bottom: 15px;\n  }\n  blockquote {\n    margin: 0px 0px 0px 0px;\n    padding: 0px 0px 0px 10px;\n    border-left: 4px solid #E5E5E5;\n  }\n  ul {\n    margin: 0px;\n    li {\n      margin-bottom: 0.0rem;\n    }\n  }\n  code {\n    margin: 0;\n    padding: 5px;\n    white-space: pre-wrap;\n    background-color: #FAFAFA;\n    border: 1px solid #E5E5E5;\n    border-radius: 2px;\n  }\n'], ['\n  color: ', ';\n  p {\n    margin-bottom: 15px;\n  }\n  blockquote {\n    margin: 0px 0px 0px 0px;\n    padding: 0px 0px 0px 10px;\n    border-left: 4px solid #E5E5E5;\n  }\n  ul {\n    margin: 0px;\n    li {\n      margin-bottom: 0.0rem;\n    }\n  }\n  code {\n    margin: 0;\n    padding: 5px;\n    white-space: pre-wrap;\n    background-color: #FAFAFA;\n    border: 1px solid #E5E5E5;\n    border-radius: 2px;\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  position: relative;\n  margin: 0px 5px;\n  & label {\n    margin-right: 10px;\n  }\n'], ['\n  position: relative;\n  margin: 0px 5px;\n  & label {\n    margin-right: 10px;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _flexbox = __webpack_require__("./src/flexbox/index.js");

var _flexbox2 = _interopRequireDefault(_flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ItemStyle = exports.ItemStyle = (0, _styledComponents2.default)(_flexbox2.default)(_templateObject, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.base;
});

var EditableItemStyle = exports.EditableItemStyle = _styledComponents2.default.div(_templateObject2);

var FormStyle = exports.FormStyle = _styledComponents2.default.div(_templateObject3);

var LogoStyle = exports.LogoStyle = _styledComponents2.default.div(_templateObject4, function (p) {
  return p.theme.borderColors.base;
}, function (p) {
  return p.theme.shadow;
});

var TitleSubtitleStyle = exports.TitleSubtitleStyle = _styledComponents2.default.div(_templateObject5);

var DatesStyle = exports.DatesStyle = (0, _styledComponents2.default)(_flexbox2.default)(_templateObject6, function (p) {
  return p.theme.colors.gray;
});

var ToolbarStyle = exports.ToolbarStyle = _styledComponents2.default.div(_templateObject7, function (p) {
  return p.theme.colors.primary;
});

var MarkdownStyle = exports.MarkdownStyle = _styledComponents2.default.div(_templateObject8, function (p) {
  return p.theme.colors.gray;
});

var SpinnerStyle = exports.SpinnerStyle = _styledComponents2.default.div(_templateObject9);

/***/ }),

/***/ "./src/navigation/components/Navbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _reactRouter = __webpack_require__(9);

var _flexbox = __webpack_require__("./src/flexbox/index.js");

var _flexbox2 = _interopRequireDefault(_flexbox);

var _NavbarBrand = __webpack_require__("./src/navigation/components/NavbarBrand.js");

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _NavbarToggler = __webpack_require__("./src/navigation/components/NavbarToggler.js");

var _NavbarToggler2 = _interopRequireDefault(_NavbarToggler);

var _NavbarBody = __webpack_require__("./src/navigation/components/NavbarBody.js");

var _NavbarBody2 = _interopRequireDefault(_NavbarBody);

var _styles = __webpack_require__("./src/navigation/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// components


// styles


var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (_reactRouter.browserHistory) {
        _reactRouter.browserHistory.listen(function () {
          return _this2.setState({ open: false });
        });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          brand = _props.brand,
          fixed = _props.fixed,
          className = _props.className;


      return _react2.default.createElement(
        _styles.NavbarStyle,
        {
          row: true,
          fixed: fixed,
          className: 'Navbar ' + (className || ''),
          justifyContent: 'space-between',
          alignItems: 'center' },
        _react2.default.createElement(_NavbarToggler2.default, { onClick: function onClick() {
            return _this3.toggle();
          } }),
        _react2.default.createElement(
          _NavbarBrand2.default,
          null,
          brand
        ),
        _react2.default.createElement(
          _NavbarBody2.default,
          { isOpen: this.state.open, onClose: function onClose() {
              return _this3.toggle();
            } },
          this.props.children
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

Navbar.propTypes = {
  fixed: _propTypes.bool,
  brand: (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.string, _propTypes.object]),
  className: _propTypes.string
};
Navbar.contextTypes = { router: _propTypes.object };
exports.default = Navbar;

/***/ }),

/***/ "./src/navigation/components/NavbarBody.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _flexbox = __webpack_require__("./src/flexbox/index.js");

var _flexbox2 = _interopRequireDefault(_flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarBody = function NavbarBody(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      children = _ref.children;

  var styleName = isOpen ? 'NavbarBody-open' : 'NavbarBody';

  return _react2.default.createElement(
    'div',
    { className: styleName },
    _react2.default.createElement(
      _flexbox2.default,
      { className: 'items' },
      children
    ),
    _react2.default.createElement('div', { className: 'overlay', onClick: onClose })
  );
};

exports.default = NavbarBody;

/***/ }),

/***/ "./src/navigation/components/NavbarBrand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarBrand = function NavbarBrand(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: 'NavbarBrand' },
    children
  );
};

exports.default = NavbarBrand;

/***/ }),

/***/ "./src/navigation/components/NavbarItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarItem = function (_React$Component) {
  _inherits(NavbarItem, _React$Component);

  function NavbarItem() {
    _classCallCheck(this, NavbarItem);

    return _possibleConstructorReturn(this, (NavbarItem.__proto__ || Object.getPrototypeOf(NavbarItem)).apply(this, arguments));
  }

  _createClass(NavbarItem, [{
    key: 'isActive',
    value: function isActive(name) {
      var router = this.context.router;


      if (router) {
        return router.getCurrentLocation().pathname === name;
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          icon = _props.icon,
          text = _props.text,
          hide = _props.hide,
          onClick = _props.onClick;

      if (hide) return null;

      var isActive = this.isActive(href, null, false) ? ' active' : '';

      return _react2.default.createElement(
        'a',
        {
          className: 'NavbarItem' + isActive,
          href: href,
          onClick: onClick },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          icon
        ),
        ' ',
        text
      );
    }
  }]);

  return NavbarItem;
}(_react2.default.Component);

NavbarItem.propTypes = {
  icon: _propTypes.string,
  text: _propTypes.string,
  href: _propTypes.string,
  hide: _propTypes.bool,
  onClick: _propTypes.func
};
NavbarItem.defaultProps = {
  href: '',
  hide: false,
  onClick: function onClick() {
    return true;
  }
};
NavbarItem.contextTypes = { router: _propTypes.object };
exports.default = NavbarItem;

/***/ }),

/***/ "./src/navigation/components/NavbarToggler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarToggler = function NavbarToggler(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: 'NavbarToggler' },
    _react2.default.createElement(
      'i',
      { className: 'material-icons btn-open', onClick: onClick },
      'menu'
    )
  );
};

exports.default = NavbarToggler;

/***/ }),

/***/ "./src/navigation/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarItem = exports.Navbar = undefined;

var _Navbar = __webpack_require__("./src/navigation/components/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _NavbarItem = __webpack_require__("./src/navigation/components/NavbarItem.js");

var _NavbarItem2 = _interopRequireDefault(_NavbarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Navbar = _Navbar2.default;
exports.NavbarItem = _NavbarItem2.default;

/***/ }),

/***/ "./src/navigation/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  border: 1px solid red;\n  position: ', ';\n  z-index: 1000;\n  min-height: 50px;\n  box-sizing: border-box;\n  padding-bottom: 3px;\n  background: white;\n\n  &:after {\n    background: linear-gradient(to right, ', ', ', ');\n    content: \'\';\n    width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n  }\n'], ['\n  border: 1px solid red;\n  position: ', ';\n  z-index: 1000;\n  min-height: 50px;\n  box-sizing: border-box;\n  padding-bottom: 3px;\n  background: white;\n\n  &:after {\n    background: linear-gradient(to right, ', ', ', ');\n    content: \'\';\n    width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _flexbox = __webpack_require__("./src/flexbox/index.js");

var _flexbox2 = _interopRequireDefault(_flexbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarStyle = exports.NavbarStyle = (0, _styledComponents2.default)(_flexbox2.default)(_templateObject, function (p) {
  return p.fixed ? 'fixed' : 'relative';
}, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.primaryLight;
});

/***/ }),

/***/ "./src/spinner/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _styles = __webpack_require__("./src/spinner/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerComponent = function SpinnerComponent(props) {
  var divs = (0, _lodash.times)(12, String);

  return _react2.default.createElement(
    _styles.SpinnerContainer,
    { hide: props.hide },
    _react2.default.createElement(_styles.Overlay, { hideOverlay: props.hideOverlay }),
    _react2.default.createElement(
      _styles.Spinner,
      { size: props.size, color: props.color, hideLabel: props.hideLabel },
      (0, _lodash.map)(divs, function (div, index) {
        return _react2.default.createElement('div', { key: index });
      })
    ),
    !props.hideLabel && _react2.default.createElement(
      _styles.SpinnerLabel,
      null,
      props.label ? props.label : 'Loading...'
    )
  );
};


SpinnerComponent.defaultProps = {
  hideLabel: false,
  hideOverlay: false
};

exports.default = SpinnerComponent;

/***/ }),

/***/ "./src/spinner/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.SpinnerLabel = exports.Overlay = exports.SpinnerContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0%, 80%, 100% { transform: scale(0.0) }\n  40% { transform: scale(1.0) }\n'], ['\n  0%, 80%, 100% { transform: scale(0.0) }\n  40% { transform: scale(1.0) }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: ', ';\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n'], ['\n  display: ', ';\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  display: ', ';\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 900;\n  background-color: ', ';\n'], ['\n  position: absolute;\n  display: ', ';\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 900;\n  background-color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  z-index: 950;\n'], ['\n  z-index: 950;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 950;\n  width: ', ';\n  height: ', ';\n  margin-bottom: ', ';\n\n  & > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & > div::before {\n    background-color: ', ';\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 18%;\n    height: 18%;\n    border-radius: 100%;\n    animation: ', ' 1.2s infinite ease-in-out;\n    animation-fill-mode: both;\n  }\n\n  & > div:nth-child(2) { transform: rotate(30deg); }\n  & > div:nth-child(3) { transform: rotate(60deg); }\n  & > div:nth-child(4) { transform: rotate(90deg); }\n  & > div:nth-child(5) { transform: rotate(120deg); }\n  & > div:nth-child(6) { transform: rotate(150deg); }\n  & > div:nth-child(7) { transform: rotate(180deg); }\n  & > div:nth-child(8) { transform: rotate(210deg); }\n  & > div:nth-child(9) { transform: rotate(240deg); }\n  & > div:nth-child(10) { transform: rotate(270deg); }\n  & > div:nth-child(11) { transform: rotate(300deg); }\n  & > div:nth-child(12) { transform: rotate(330deg); }\n\n  & > div:nth-child(2)::before { animation-delay: -1.1s; }\n  & > div:nth-child(3)::before { animation-delay: -1.0s; }\n  & > div:nth-child(4)::before { animation-delay: -0.9s; }\n  & > div:nth-child(5)::before { animation-delay: -0.8s; }\n  & > div:nth-child(6)::before { animation-delay: -0.7s; }\n  & > div:nth-child(7)::before { animation-delay: -0.6s; }\n  & > div:nth-child(8)::before { animation-delay: -0.5s; }\n  & > div:nth-child(9)::before { animation-delay: -0.4s; }\n  & > div:nth-child(10)::before { animation-delay: -0.3s; }\n  & > div:nth-child(11)::before { animation-delay: -0.2s; }\n  & > div:nth-child(12)::before { animation-delay: -0.1s; }\n'], ['\n  position: relative;\n  z-index: 950;\n  width: ', ';\n  height: ', ';\n  margin-bottom: ', ';\n\n  & > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & > div::before {\n    background-color: ', ';\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 18%;\n    height: 18%;\n    border-radius: 100%;\n    animation: ', ' 1.2s infinite ease-in-out;\n    animation-fill-mode: both;\n  }\n\n  & > div:nth-child(2) { transform: rotate(30deg); }\n  & > div:nth-child(3) { transform: rotate(60deg); }\n  & > div:nth-child(4) { transform: rotate(90deg); }\n  & > div:nth-child(5) { transform: rotate(120deg); }\n  & > div:nth-child(6) { transform: rotate(150deg); }\n  & > div:nth-child(7) { transform: rotate(180deg); }\n  & > div:nth-child(8) { transform: rotate(210deg); }\n  & > div:nth-child(9) { transform: rotate(240deg); }\n  & > div:nth-child(10) { transform: rotate(270deg); }\n  & > div:nth-child(11) { transform: rotate(300deg); }\n  & > div:nth-child(12) { transform: rotate(330deg); }\n\n  & > div:nth-child(2)::before { animation-delay: -1.1s; }\n  & > div:nth-child(3)::before { animation-delay: -1.0s; }\n  & > div:nth-child(4)::before { animation-delay: -0.9s; }\n  & > div:nth-child(5)::before { animation-delay: -0.8s; }\n  & > div:nth-child(6)::before { animation-delay: -0.7s; }\n  & > div:nth-child(7)::before { animation-delay: -0.6s; }\n  & > div:nth-child(8)::before { animation-delay: -0.5s; }\n  & > div:nth-child(9)::before { animation-delay: -0.4s; }\n  & > div:nth-child(10)::before { animation-delay: -0.3s; }\n  & > div:nth-child(11)::before { animation-delay: -0.2s; }\n  & > div:nth-child(12)::before { animation-delay: -0.1s; }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__("./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var scale = (0, _styledComponents.keyframes)(_templateObject);

var SpinnerContainer = exports.SpinnerContainer = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.hide ? 'none' : 'flex';
});

var Overlay = exports.Overlay = _styledComponents2.default.div(_templateObject3, function (p) {
  return p.hideOverlay ? 'none' : 'block';
}, function (p) {
  return p.theme.overlay;
});
var SpinnerLabel = exports.SpinnerLabel = _styledComponents2.default.label(_templateObject4);

var Spinner = exports.Spinner = _styledComponents2.default.div(_templateObject5, function (p) {
  return (0, _utils.toPx)(p.size) || '50px';
}, function (p) {
  return (0, _utils.toPx)(p.size) || '50px';
}, function (p) {
  return p.hideLabel ? '0px' : '10px';
}, function (p) {
  return (0, _utils.parseColor)(p.color, p.theme.colors);
}, scale);

/***/ }),

/***/ "./src/theme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = {
  fontFamily: 'Open Sans',
  colors: {
    base: '#F3F3F3',
    primary: '#1B8CEB',
    primaryLight: '#CDE6FB',
    success: '#72CF89',
    gray: '#888888'
  },
  textColors: {
    base: '#000000',
    primary: '#FFFFFF',
    success: '#FFFFFF'
  },
  borderColors: {
    base: '#d8d8d8',
    primary: '#106CB9',
    success: '#3BAB57'
  },
  shadow: '0px 0px 1px rgba(0, 0, 1, 0.12)',
  overlay: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '5px'
};

exports.default = theme;

/***/ }),

/***/ "./src/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseColor = exports.toPx = undefined;

var _lodash = __webpack_require__(1);

var toPx = exports.toPx = function toPx(value) {
  if ((0, _lodash.isNumber)(value)) {
    return value + 'px';
  }

  return value;
};

var parseColor = exports.parseColor = function parseColor(value, colors) {
  if (!value) {
    return colors.base;
  }

  switch (value) {
    case 'primary':
      return colors.primary;

    case 'success':
      return colors.success;

    case 'gray':
      return colors.gray;

    default:
      return value;
  }
};

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("js-md5");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("react-google-autocomplete");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ })

/******/ });
});
//# sourceMappingURL=coderbox-components.js.map