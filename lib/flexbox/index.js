'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexComponent = function FlexComponent(props) {
  return _react2.default.createElement(
    _styles.Flex,
    props,
    props.children
  );
};

exports.default = FlexComponent;