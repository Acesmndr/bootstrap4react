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

var Badge = function Badge(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      pill = _ref.pill,
      className = _ref.className,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'pill', 'className', 'onClick']);

  var classes = (0, _classnames2.default)('badge', 'badge-primary', {
    'badge-pill': pill,
    'badge-secondary': secondary,
    'badge-success': success,
    'badge-danger': danger,
    'badge-warning': warning,
    'badge-info': info,
    'badge-light': light,
    'badge-dark': dark
  }, className);

  return _react2.default.createElement('span', _extends({ className: classes }, props));
};

Badge.displayName = 'Badge';

Badge.propTypes = {
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  pill: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = Badge;