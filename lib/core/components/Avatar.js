'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jsMd = require('js-md5');

var _jsMd2 = _interopRequireDefault(_jsMd);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvatarComponent = function AvatarComponent(_ref) {
  var email = _ref.email,
      url = _ref.url,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 140 : _ref$size,
      _ref$edit = _ref.edit,
      edit = _ref$edit === undefined ? false : _ref$edit;

  var hash = (0, _jsMd2.default)(email || '');
  var image = url || 'https://www.gravatar.com/avatar/' + hash + '?s=' + size;

  return _react2.default.createElement(
    _styles.AvatarStyle,
    null,
    _react2.default.createElement(_styles.AvatarImageStyle, { image: image, size: size + 'px' }),
    edit && _react2.default.createElement(
      'a',
      {
        href: 'https://en.gravatar.com/support/activating-your-account/',
        target: '_blank',
        style: { marginTop: 4, display: 'block' }
      },
      'Change picture'
    )
  );
};
exports.default = AvatarComponent;