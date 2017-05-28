'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangeContainer = exports.Icon = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0px 10px\n'], ['\n  margin: 0px 10px\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  \n  & select {\n    border: 1px solid rgb(218, 218, 218);\n    border-radius: 4px;\n    padding: 6px 8px;\n  }\n'], ['\n  font-size: 14px;\n  \n  & select {\n    border: 1px solid rgb(218, 218, 218);\n    border-radius: 4px;\n    padding: 6px 8px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = exports.Icon = _styledComponents2.default.i(_templateObject);

var DateRangeContainer = exports.DateRangeContainer = _styledComponents2.default.div(_templateObject2);