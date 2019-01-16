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

require('./../../style/avatar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      alt = _ref.alt,
      src = _ref.src,
      round = _ref.round,
      rounded = _ref.rounded,
      roundedTop = _ref.roundedTop,
      roundedRight = _ref.roundedRight,
      roundedBottom = _ref.roundedBottom,
      roundedLeft = _ref.roundedLeft,
      square = _ref.square,
      size = _ref.size,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      bgColor = _ref.bgColor,
      props = _objectWithoutProperties(_ref, ['className', 'alt', 'src', 'round', 'rounded', 'roundedTop', 'roundedRight', 'roundedBottom', 'roundedLeft', 'square', 'size', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'bgColor']);

  var classes = (0, _classnames2.default)('cf-avatar', 'd-inline-block', 'text-center', 'text-white', 'border', 'shadow-sm', {
    'rounded': rounded,
    'rounded-top': roundedTop,
    'rounded-right': roundedRight,
    'rounded-bottom': roundedBottom,
    'rounded-left': roundedLeft,
    'rounded-0': square,
    'rounded-circle': round,
    'bg-primary': !bgColor,
    'bg-secondary': secondary,
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark
  }, className);
  if (src) {
    return _react2.default.createElement('img', _extends({ src: src, alt: alt, style: { height: size, width: size }, className: classes }, props));
  }
  return _react2.default.createElement('div', _extends({ className: classes, style: { height: size, width: size, lineHeight: size, fontSize: parseInt(parseInt(size) / 3) + 'px', background: bgColor } }, props));
};

Avatar.propTypes = {
  className: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  src: _propTypes2.default.string,
  round: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  roundedTop: _propTypes2.default.bool,
  roundedBottom: _propTypes2.default.bool,
  roundedLeft: _propTypes2.default.bool,
  roundedRight: _propTypes2.default.bool,
  square: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  bgColor: _propTypes2.default.string
};

Avatar.defaultProps = {
  size: '40px'
};

exports.default = Avatar;