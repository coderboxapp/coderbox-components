'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoContainerComponent = function DemoContainerComponent(_ref) {
  var children = _ref.children,
      code = _ref.code;

  return _react2.default.createElement(
    _styles.DemoContainer,
    null,
    children
  );
};

exports.default = DemoContainerComponent;