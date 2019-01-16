'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CalendarItem = require('./CalendarItem');

var _CalendarItem2 = _interopRequireDefault(_CalendarItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./../../style/calendar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Fragment = _react2.default.Fragment;
var CalendarHeader = function CalendarHeader(_ref) {
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
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ['className', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'sticky', 'height']);

  var classes = (0, _classnames2.default)('d-inline-flex', 'pt-1', 'text-white', 'header', {
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark
  }, className);

  var headerClassName = function headerClassName(sticky) {
    return (0, _classnames2.default)('area', 'p-1', 'text-center', {
      'sticky-left': sticky,
      'fixed-corner-title': sticky
    });
  };

  return _react2.default.createElement(
    'div',
    { className: 'sticky-top unset-zindex' },
    _react2.default.createElement('div', _extends({ className: classes }, props, { style: { height: height } }))
  );
};

CalendarHeader.displayName = 'Calendar.Header';

CalendarHeader.defaultProps = {};

CalendarHeader.propTypes = {
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  headers: _propTypes2.default.array,
  height: _propTypes2.default.string,
  sticky: _propTypes2.default.bool
};

exports.default = CalendarHeader;