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

require('./../../style/button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      outlinePrimary = _ref.outlinePrimary,
      outlineSecondary = _ref.outlineSecondary,
      outlineSuccess = _ref.outlineSuccess,
      outlineDanger = _ref.outlineDanger,
      outlineWarning = _ref.outlineWarning,
      outlineInfo = _ref.outlineInfo,
      outlineLight = _ref.outlineLight,
      outlineDark = _ref.outlineDark,
      link = _ref.link,
      large = _ref.large,
      small = _ref.small,
      outlined = _ref.outlined,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      loading = _ref.loading,
      onClick = _ref.onClick,
      grouped = _ref.grouped,
      props = _objectWithoutProperties(_ref, ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'outlinePrimary', 'outlineSecondary', 'outlineSuccess', 'outlineDanger', 'outlineWarning', 'outlineInfo', 'outlineLight', 'outlineDark', 'link', 'large', 'small', 'outlined', 'active', 'disabled', 'className', 'loading', 'onClick', 'grouped']);

  var classes = (0, _classnames2.default)('btn', 'btn-primary', {
    'btn-secondary': secondary,
    'btn-success': success,
    'btn-danger': danger,
    'btn-warning': warning,
    'btn-info': info,
    'btn-light': light,
    'btn-dark': dark,
    'btn-outline-primary': outlinePrimary,
    'btn-outline-secondary': outlineSecondary,
    'btn-outline-success': outlineSuccess,
    'btn-outline-danger': outlineDanger,
    'btn-outline-warning': outlineWarning,
    'btn-outline-info': outlineInfo,
    'btn-outline-light': outlineLight,
    'btn-outline-dark': outlineDark,
    'btn-link': link,
    'btn-lg': large,
    'btn-sm': small,
    'btn-block': outlined,
    'active': active,
    'disabled': disabled,
    'm-1': !grouped,
    'btn-loading': loading
  }, className);

  return _react2.default.createElement('button', _extends({ type: 'button', className: classes, onClick: onClick }, props));
};

Button.displayName = 'Button';

Button.defaultProps = {
  onClick: function onClick(evt) {
    evt.preventDefault();
  }
};

Button.propTypes = {
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  outlinePrimary: _propTypes2.default.bool,
  outlineSecondary: _propTypes2.default.bool,
  outlineSuccess: _propTypes2.default.bool,
  outlineDanger: _propTypes2.default.bool,
  outlineWarning: _propTypes2.default.bool,
  outlineInfo: _propTypes2.default.bool,
  outlineLight: _propTypes2.default.bool,
  outlineDark: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  /** Disable Button */
  disabled: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  grouped: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = Button;