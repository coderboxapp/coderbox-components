'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n\n  & > div {\n    margin-left: 0;\n    margin-right: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n\n  & > div {\n    margin-left: 0;\n    margin-right: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = exports.Flex = _styledComponents2.default.div(_templateObject, function (p) {
  return p.column ? 'column' : 'row';
}, function (p) {
  return p.justifyContent || 'flex-start';
}, function (p) {
  return p.alignItems || 'flex-start';
});