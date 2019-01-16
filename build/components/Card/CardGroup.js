'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
An all-around flexible and composable component
*/
var CardGroup = function CardGroup(_ref) {
  var className = _ref.className,
      centerAlign = _ref.centerAlign,
      leftAlign = _ref.leftAlign,
      rightAlign = _ref.rightAlign,
      width = _ref.width,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      props = _objectWithoutProperties(_ref, ['className', 'centerAlign', 'leftAlign', 'rightAlign', 'width', 'success', 'danger', 'warning', 'info', 'light', 'dark']);

  var classes = (0, _classnames2.default)('card-group', 'mb-4', {
    'text-center': centerAlign,
    'text-left': leftAlign,
    'text-right': rightAlign,
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark,
    'text-white': danger || success || warning || info || light || dark
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props, { style: { width: width } }));
};

CardGroup.propTypes = {
  width: _propTypes2.default.string,
  centerAlign: _propTypes2.default.bool,
  leftAlign: _propTypes2.default.bool,
  rightAlign: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

CardGroup.Card = _Card2.default;

exports.default = CardGroup;