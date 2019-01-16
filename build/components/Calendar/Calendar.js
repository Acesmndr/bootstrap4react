'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CalendarRow = require('./CalendarRow');

var _CalendarRow2 = _interopRequireDefault(_CalendarRow);

var _CalendarHeader = require('./CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarHeaderItem = require('./CalendarHeaderItem');

var _CalendarHeaderItem2 = _interopRequireDefault(_CalendarHeaderItem);

var _CalendarItem = require('./CalendarItem');

var _CalendarItem2 = _interopRequireDefault(_CalendarItem);

var _CalendarEvent = require('./CalendarEvent');

var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./../../style/calendar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
An all-around flexible and composable component
*/
var Calendar = function Calendar(_ref) {
  var className = _ref.className,
      centerAlign = _ref.centerAlign,
      leftAlign = _ref.leftAlign,
      rightAlign = _ref.rightAlign,
      height = _ref.height,
      width = _ref.width,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      whiteText = _ref.whiteText,
      fixedHeightWidth = _ref.fixedHeightWidth,
      props = _objectWithoutProperties(_ref, ['className', 'centerAlign', 'leftAlign', 'rightAlign', 'height', 'width', 'minWidth', 'maxWidth', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'whiteText', 'fixedHeightWidth']);

  var parentClasses = (0, _classnames2.default)('mb-2', {
    'd-inline-flex': width || height
  }, className);
  var childClasses = (0, _classnames2.default)('container-fluid', 'p-0', {
    'overflow-scroll': width || height
  });
  return _react2.default.createElement(
    'div',
    { className: parentClasses, style: { width: width, height: height } },
    _react2.default.createElement('div', _extends({ className: childClasses }, props))
  );
};

Calendar.defaultProps = {
  minWidth: '200px'
};

Calendar.propTypes = {
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  minWidth: _propTypes2.default.string,
  maxWidth: _propTypes2.default.string,
  whiteText: _propTypes2.default.bool,
  centerAlign: _propTypes2.default.bool,
  leftAlign: _propTypes2.default.bool,
  rightAlign: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  fixedHeightWidth: _propTypes2.default.bool
};

Calendar.Header = _CalendarHeader2.default;
Calendar.Row = _CalendarRow2.default;
Calendar.Item = _CalendarItem2.default;
Calendar.Event = _CalendarEvent2.default;
Calendar.HeaderItem = _CalendarHeaderItem2.default;

exports.default = Calendar;