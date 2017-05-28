'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.Overlay = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: ', ';\n  z-index: 999;\n  position: absolute;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.4);\n'], ['\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: ', ';\n  z-index: 999;\n  position: absolute;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.4);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0%, 80%, 100% { transform: scale(0.0) }\n  40% { transform: scale(1.0) }\n'], ['\n  0%, 80%, 100% { transform: scale(0.0) }\n  40% { transform: scale(1.0) }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', ';\n  height: ', ';\n  margin-bottom: 10px;\n\n  & > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & > div::before {\n    background-color: ', ';\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 20%;\n    height: 20%;\n    border-radius: 100%;\n    animation: ', ' 1.2s infinite ease-in-out;\n    animation-fill-mode: both;\n  }\n\n  & > div:nth-child(2) { transform: rotate(30deg); }\n  & > div:nth-child(3) { transform: rotate(60deg); }\n  & > div:nth-child(4) { transform: rotate(90deg); }\n  & > div:nth-child(5) { transform: rotate(120deg); }\n  & > div:nth-child(6) { transform: rotate(150deg); }\n  & > div:nth-child(7) { transform: rotate(180deg); }\n  & > div:nth-child(8) { transform: rotate(210deg); }\n  & > div:nth-child(9) { transform: rotate(240deg); }\n  & > div:nth-child(10) { transform: rotate(270deg); }\n  & > div:nth-child(11) { transform: rotate(300deg); }\n  & > div:nth-child(12) { transform: rotate(330deg); }\n\n  & > div:nth-child(2)::before { animation-delay: -1.1s; }\n  & > div:nth-child(3)::before { animation-delay: -1.0s; }\n  & > div:nth-child(4)::before { animation-delay: -0.9s; }\n  & > div:nth-child(5)::before { animation-delay: -0.8s; }\n  & > div:nth-child(6)::before { animation-delay: -0.7s; }\n  & > div:nth-child(7)::before { animation-delay: -0.6s; }\n  & > div:nth-child(8)::before { animation-delay: -0.5s; }\n  & > div:nth-child(9)::before { animation-delay: -0.4s; }\n  & > div:nth-child(10)::before { animation-delay: -0.3s; }\n  & > div:nth-child(11)::before { animation-delay: -0.2s; }\n  & > div:nth-child(12)::before { animation-delay: -0.1s; }\n'], ['\n  position: relative;\n  width: ', ';\n  height: ', ';\n  margin-bottom: 10px;\n\n  & > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & > div::before {\n    background-color: ', ';\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 20%;\n    height: 20%;\n    border-radius: 100%;\n    animation: ', ' 1.2s infinite ease-in-out;\n    animation-fill-mode: both;\n  }\n\n  & > div:nth-child(2) { transform: rotate(30deg); }\n  & > div:nth-child(3) { transform: rotate(60deg); }\n  & > div:nth-child(4) { transform: rotate(90deg); }\n  & > div:nth-child(5) { transform: rotate(120deg); }\n  & > div:nth-child(6) { transform: rotate(150deg); }\n  & > div:nth-child(7) { transform: rotate(180deg); }\n  & > div:nth-child(8) { transform: rotate(210deg); }\n  & > div:nth-child(9) { transform: rotate(240deg); }\n  & > div:nth-child(10) { transform: rotate(270deg); }\n  & > div:nth-child(11) { transform: rotate(300deg); }\n  & > div:nth-child(12) { transform: rotate(330deg); }\n\n  & > div:nth-child(2)::before { animation-delay: -1.1s; }\n  & > div:nth-child(3)::before { animation-delay: -1.0s; }\n  & > div:nth-child(4)::before { animation-delay: -0.9s; }\n  & > div:nth-child(5)::before { animation-delay: -0.8s; }\n  & > div:nth-child(6)::before { animation-delay: -0.7s; }\n  & > div:nth-child(7)::before { animation-delay: -0.6s; }\n  & > div:nth-child(8)::before { animation-delay: -0.5s; }\n  & > div:nth-child(9)::before { animation-delay: -0.4s; }\n  & > div:nth-child(10)::before { animation-delay: -0.3s; }\n  & > div:nth-child(11)::before { animation-delay: -0.2s; }\n  & > div:nth-child(12)::before { animation-delay: -0.1s; }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Overlay = exports.Overlay = _styledComponents2.default.div(_templateObject, function (p) {
  return p.hide ? 'none' : 'flex';
});

var scale = (0, _styledComponents.keyframes)(_templateObject2);

var Spinner = exports.Spinner = _styledComponents2.default.div(_templateObject3, function (p) {
  return (0, _utils.toPx)(p.size) || '50px';
}, function (p) {
  return (0, _utils.toPx)(p.size) || '50px';
}, function (p) {
  return (0, _utils.parseColor)(p.color, p.theme);
}, scale);