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

var CalendarRow = function CalendarRow(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var classes = (0, _classnames2.default)('position-sticky', className);

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement('div', _extends({ className: 'd-inline-flex' }, props))
  );
};

CalendarRow.displayName = 'Calendar.Row';

CalendarRow.propTypes = {
  className: _propTypes2.default.string
};

exports.default = CalendarRow;