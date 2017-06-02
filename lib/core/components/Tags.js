'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagsComponent = function TagsComponent(_ref) {
  var _ref$tags = _ref.tags,
      tags = _ref$tags === undefined ? [] : _ref$tags,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'base' : _ref$color,
      _ref$withClose = _ref.withClose,
      withClose = _ref$withClose === undefined ? false : _ref$withClose,
      onClick = _ref.onClick;

  var TagElement = withClose ? _styles.TagCloseStyle : _styles.TagStyle;

  return _react2.default.createElement(
    'div',
    null,
    tags.map(function (tag, index) {
      return _react2.default.createElement(
        TagElement,
        { key: index, color: color, onClick: function (_onClick) {
            function onClick() {
              return _onClick.apply(this, arguments);
            }

            onClick.toString = function () {
              return _onClick.toString();
            };

            return onClick;
          }(function () {
            return onClick && onClick(tag);
          }) },
        tag.name
      );
    })
  );
};

exports.default = TagsComponent;