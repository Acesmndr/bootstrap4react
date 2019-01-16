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

require('./../../style/calendar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CalendarHeaderItem = function CalendarHeaderItem(_ref) {
  var className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      sticky = _ref.sticky,
      whiteText = _ref.whiteText,
      width = _ref.width,
      minWidth = _ref.minWidth,
      height = _ref.height,
      truncate = _ref.truncate,
      props = _objectWithoutProperties(_ref, ['className', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'sticky', 'whiteText', 'width', 'minWidth', 'height', 'truncate']);

  var classes = (0, _classnames2.default)('p-1', 'text-center', {
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark,
    'text-white': whiteText,
    'sticky-left': sticky,
    'fixed-corner-title': sticky,
    'text-truncate': truncate
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props, { style: { width: width, height: height, minWidth: minWidth } }));
};

CalendarHeaderItem.displayName = 'Calendar.HeaderItem';

CalendarHeaderItem.defaultProps = {
  height: '40px',
  width: '11vw',
  minWidth: '80px'
};

CalendarHeaderItem.propTypes = {
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  sticky: _propTypes2.default.bool,
  whiteText: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  minWidth: _propTypes2.default.string,
  height: _propTypes2.default.string,
  truncate: _propTypes2.default.string
};

exports.default = CalendarHeaderItem;