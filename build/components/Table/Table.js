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

var _Tr = require('../Table/Tr');

var _Tr2 = _interopRequireDefault(_Tr);

var _Td = require('../Table/Td');

var _Td2 = _interopRequireDefault(_Td);

var _Thead = require('../Table/Thead');

var _Thead2 = _interopRequireDefault(_Thead);

var _Th = require('../Table/Th');

var _Th2 = _interopRequireDefault(_Th);

require('./../../style/table.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
An all-around flexible and composable component
*/
var Table = function Table(_ref) {
  var className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      striped = _ref.striped,
      bordered = _ref.bordered,
      borderless = _ref.borderless,
      hoverable = _ref.hoverable,
      responsive = _ref.responsive,
      fullWidth = _ref.fullWidth,
      small = _ref.small,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ['className', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'striped', 'bordered', 'borderless', 'hoverable', 'responsive', 'fullWidth', 'small', 'width', 'height']);

  var classes = (0, _classnames2.default)('table', {
    'table-dark': dark,
    'table-light': light,
    'table-primary': primary,
    'table-secondary': secondary,
    'table-success': success,
    'table-danger': danger,
    'table-warning': warning,
    'table-info': info,
    'table-striped': striped,
    'table-bordered': bordered,
    'table-borderless': borderless,
    'table-hover': hoverable,
    'table-sm': small,
    'table-responsive': responsive
  }, className);
  return _react2.default.createElement('table', _extends({ className: classes }, props, { style: { width: width, height: height } }));
};

Table.propTypes = {
  fullWidth: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  borderless: _propTypes2.default.bool,
  hoverable: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  responsive: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = Table;