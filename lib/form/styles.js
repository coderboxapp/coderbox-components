'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItemStyle = exports.FormStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: auto;\n  text-align: left;\n\n  & .react-form-buttons {\n    padding: 5px 0px;\n  }\n\n  & button {\n    margin-right: 5px;\n  }\n\n  & label.error {\n    display: inline-block;\n    font-size: 11px;\n    font-weight: 400;\n    color: red;\n    margin: 5px 5px 5px 5px;\n  }\n'], ['\n  margin: auto;\n  text-align: left;\n\n  & .react-form-buttons {\n    padding: 5px 0px;\n  }\n\n  & button {\n    margin-right: 5px;\n  }\n\n  & label.error {\n    display: inline-block;\n    font-size: 11px;\n    font-weight: 400;\n    color: red;\n    margin: 5px 5px 5px 5px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 5px 0px;\n\n  & label {\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n\n  & select,\n  & textarea,\n  & input[type="text"],\n  & input[type="number"],\n  & input[type="email"],\n  & input[type="email"] {\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 12px 8px;\n    outline: none;\n  }\n'], ['\n  padding: 5px 0px;\n\n  & label {\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n\n  & select,\n  & textarea,\n  & input[type="text"],\n  & input[type="number"],\n  & input[type="email"],\n  & input[type="email"] {\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: 12px 8px;\n    outline: none;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormStyle = exports.FormStyle = _styledComponents2.default.div(_templateObject);

var FormItemStyle = exports.FormItemStyle = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.theme.borderColors.base;
});