'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonComponent = function ButtonComponent(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? 'base' : _ref$color,
      onClick = _ref.onClick,
      children = _ref.children;

  return _react2.default.createElement(
    _styles.Button,
    { color: color, onClick: onClick },
    children
  );
};

exports.default = ButtonComponent;