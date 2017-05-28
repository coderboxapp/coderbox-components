'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerComponent = function SpinnerComponent(props) {
  var divs = (0, _lodash.times)(12, String);

  return _react2.default.createElement(
    _styles.Overlay,
    { hide: props.hide },
    _react2.default.createElement(
      _styles.Spinner,
      { size: props.size, color: props.color },
      (0, _lodash.map)(divs, function (div, index) {
        return _react2.default.createElement('div', { key: index });
      })
    ),
    _react2.default.createElement(
      'label',
      null,
      props.label ? props.label : 'Loading...'
    )
  );
};
exports.default = SpinnerComponent;