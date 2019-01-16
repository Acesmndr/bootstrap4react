'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Text = function Text(_ref) {
  var className = _ref.className,
      small = _ref.small,
      textCentered = _ref.textCentered,
      truncate = _ref.truncate,
      muted = _ref.muted,
      hide = _ref.hide,
      size = _ref.size,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      h1 = _ref.h1,
      h2 = _ref.h2,
      h3 = _ref.h3,
      h4 = _ref.h4,
      h5 = _ref.h5,
      h6 = _ref.h6,
      d1 = _ref.d1,
      d2 = _ref.d2,
      d3 = _ref.d3,
      d4 = _ref.d4,
      props = _objectWithoutProperties(_ref, ['className', 'small', 'textCentered', 'truncate', 'muted', 'hide', 'size', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'd1', 'd2', 'd3', 'd4']);

  var classes = (0, _classnames2.default)({
    'small': small,
    'text-center': textCentered,
    'text-truncate': truncate,
    'hidden': hide,
    'text-muted': muted,
    'text-primary': primary,
    'text-secondary': secondary,
    'text-success': success,
    'text-danger': danger,
    'text-warning': warning,
    'text-info': info,
    'text-light': light,
    'text-dark': dark,
    'h1': h1,
    'h2': h2,
    'h3': h3,
    'h4': h4,
    'h5': h5,
    'h6': h6,
    'display-1': d1,
    'display-2': d2,
    'display-3': d3,
    'display-4': d4
  }, className);

  return _react2.default.createElement('p', _extends({ className: classes }, props, { style: { fontSize: size } }));
};

Text.displayName = 'Text';

Text.propTypes = {
  className: _propTypes2.default.string,
  small: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  textCentered: _propTypes2.default.bool,
  truncate: _propTypes2.default.bool,
  muted: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  h1: _propTypes2.default.bool,
  h2: _propTypes2.default.bool,
  h3: _propTypes2.default.bool,
  h4: _propTypes2.default.bool,
  h5: _propTypes2.default.bool,
  h6: _propTypes2.default.bool,
  d1: _propTypes2.default.bool,
  d2: _propTypes2.default.bool,
  d3: _propTypes2.default.bool,
  d4: _propTypes2.default.bool,
  hide: _propTypes2.default.bool
};

exports.default = Text;