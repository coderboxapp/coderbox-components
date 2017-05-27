'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseColor = exports.toPx = undefined;

var _lodash = require('lodash');

var toPx = exports.toPx = function toPx(value) {
  if ((0, _lodash.isNumber)(value)) {
    return value + 'px';
  }

  return value;
};

var parseColor = exports.parseColor = function parseColor(value, theme) {
  if (!value) {
    return theme.colors.base;
  }

  switch (value) {
    case 'primary':
      return theme.colors.primary;

    case 'success':
      return theme.colors.success;

    default:
      return value;
  }
};