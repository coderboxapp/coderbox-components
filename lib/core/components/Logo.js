'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoComponent = function LogoComponent(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 50 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'base' : _ref$color;

  return _react2.default.createElement(
    _styles.LogoStyle,
    { size: size + 'px' },
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