'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagsStyle = exports.AutocompleteTagsStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 4px;\n  box-sizing: border-box;\n  border: 1px solid rgb(218, 218, 218);\n  border-radius: 4px;\n\n  & input {\n    border: 1px dashed ', ' !important;\n  }\n'], ['\n  padding: 4px;\n  box-sizing: border-box;\n  border: 1px solid rgb(218, 218, 218);\n  border-radius: 4px;\n\n  & input {\n    border: 1px dashed ', ' !important;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: ', ';\n  margin-bottom: 4px;\n'], ['\n  display: ', ';\n  margin-bottom: 4px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AutocompleteTagsStyle = exports.AutocompleteTagsStyle = _styledComponents2.default.div(_templateObject, function (p) {
  return p.theme.borderColors.base;
});

var TagsStyle = exports.TagsStyle = _styledComponents2.default.div(_templateObject2, function (p) {
  return p.display ? 'block' : 'none';
});