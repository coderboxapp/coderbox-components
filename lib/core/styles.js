'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.DemoContainer = exports.Container = exports.TagClose = exports.Tag = exports.LogoSvg = exports.Logo = exports.Button = exports.AvatarImage = exports.AvatarContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: white;\n  text-align: center;\n'], ['\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: white;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(\'', '\');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n'], ['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(\'', '\');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  border: none;\n  border-radius: 0px;\n  padding: 8px 35px;\n  font-family: inherit;\n  font-weight: 400;\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 0.80;\n  }\n'], ['\n  display: inline-block;\n  border: none;\n  border-radius: 0px;\n  padding: 8px 35px;\n  font-family: inherit;\n  font-weight: 400;\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 0.80;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: \'inline-block\';\n  vertical-align: \'middle\';\n  width: ', ';\n  height: ', ';\n'], ['\n  display: \'inline-block\';\n  vertical-align: \'middle\';\n  width: ', ';\n  height: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  font-family: \'Inconsolata\', monospace;\n  font-size: 12px;\n  margin: 2px 4px 2px 0px;\n  padding: 0px 12px 0px 12px;\n  border: 1px solid ', ';\n  box-shadow: ', ';\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  text-transform: lowercase;\n  outline: none;\n  border-radius: 2px;\n  line-height: 22px;\n\n  &:hover {\n    opacity: 0.85;\n  }\n'], ['\n  display: inline-block;\n  font-family: \'Inconsolata\', monospace;\n  font-size: 12px;\n  margin: 2px 4px 2px 0px;\n  padding: 0px 12px 0px 12px;\n  border: 1px solid ', ';\n  box-shadow: ', ';\n  color: ', ';\n  background: ', ';\n  cursor: pointer;\n  text-transform: lowercase;\n  outline: none;\n  border-radius: 2px;\n  line-height: 22px;\n\n  &:hover {\n    opacity: 0.85;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding-right: 0;\n\n  &:after {\n    display: inline-block;\n    content: \'\\2715\';\n    font-size: 11px;\n    border-left: 1px solid ', ';\n    margin-left: 8px;\n    width: 23px;\n    text-align: center;\n    vertical-align: middle;\n  }\n'], ['\n  padding-right: 0;\n\n  &:after {\n    display: inline-block;\n    content: \'\\\\2715\';\n    font-size: 11px;\n    border-left: 1px solid ', ';\n    margin-left: 8px;\n    width: 23px;\n    text-align: center;\n    vertical-align: middle;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: relative;\n  border: 1px solid #CCC;\n  padding: 5px;\n  margin: 10px auto;\n  min-width: ', ';\n  min-height: ', ';\n  display: ', ';\n'], ['\n  position: relative;\n  border: 1px solid #CCC;\n  padding: 5px;\n  margin: 10px auto;\n  min-width: ', ';\n  min-height: ', ';\n  display: ', ';\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  text-align: left;\n  padding: 45px 10px 5px 10px;\n\n  &:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 1em;\n    color: #aaa;\n    font-size: smaller;\n    font-weight: 500;\n    content: \'EXAMPLE\';\n  }\n\n  & > label {\n    display: block;\n    margin-bottom: 10px;\n  }\n'], ['\n  text-align: left;\n  padding: 45px 10px 5px 10px;\n\n  &:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 1em;\n    color: #aaa;\n    font-size: smaller;\n    font-weight: 500;\n    content: \'EXAMPLE\';\n  }\n\n  & > label {\n    display: block;\n    margin-bottom: 10px;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  color: #888;\n  font-size: 12px;\n  margin: 5px;\n'], ['\n  color: #888;\n  font-size: 12px;\n  margin: 5px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AvatarContainer = exports.AvatarContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.borderColors['base'];
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.shadow;
});

var AvatarImage = exports.AvatarImage = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.image;
});

var Button = exports.Button = _styledComponents2.default.button(_templateObject3, function (props) {
  return props.theme.textColors[props.color];
}, function (props) {
  return props.theme.colors[props.color];
});

var Logo = exports.Logo = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.size;
}, function (props) {
  return props.size;
});

var LogoSvg = exports.LogoSvg = _styledComponents2.default.svg(_templateObject5, function (props) {
  return props.theme.colors[props.color];
});

var Tag = exports.Tag = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.theme.borderColors[props.color];
}, function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme.textColors[props.color];
}, function (props) {
  return props.theme.colors[props.color];
});

var TagClose = exports.TagClose = (0, _styledComponents2.default)(Tag)(_templateObject7, function (props) {
  return props.theme.borderColors[props.color];
});
var Container = exports.Container = _styledComponents2.default.div(_templateObject8, function (p) {
  return (0, _utils.toPx)(p.width) || 'auto';
}, function (p) {
  return (0, _utils.toPx)(p.height) || 'auto';
}, function (p) {
  return p.inline ? 'inline-block' : 'block';
});
var DemoContainer = exports.DemoContainer = Container.extend(_templateObject9);

var Label = exports.Label = _styledComponents2.default.div(_templateObject10);