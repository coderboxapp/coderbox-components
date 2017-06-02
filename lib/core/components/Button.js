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
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === undefined ? 'base' : _ref$textColor,
      _ref$primary = _ref.primary,
      primary = _ref$primary === undefined ? false : _ref$primary,
      _ref$success = _ref.success,
      success = _ref$success === undefined ? false : _ref$success,
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
    { color: color, textColor: textColor, onClick: function (_onClick) {
        function onClick(_x) {
          return _onClick.apply(this, arguments);
        }

        onClick.toString = function () {
          return _onClick.toString();
        };

        return onClick;
      }(function (e) {
        return onClick && onClick(e);
      }) },
    children
  );
};

exports.default = ButtonComponent;