'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardImage = require('./CardImage');

var _CardImage2 = _interopRequireDefault(_CardImage);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardText = require('./CardText');

var _CardText2 = _interopRequireDefault(_CardText);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
An all-around flexible and composable component
*/
var Card = function Card(_ref) {
  var className = _ref.className,
      centerAlign = _ref.centerAlign,
      leftAlign = _ref.leftAlign,
      rightAlign = _ref.rightAlign,
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
      props = _objectWithoutProperties(_ref, ['className', 'centerAlign', 'leftAlign', 'rightAlign', 'width', 'minWidth', 'maxWidth', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'whiteText']);

  var classes = (0, _classnames2.default)('card', 'mb-2', 'shadow-sm', {
    'text-center': centerAlign,
    'text-left': leftAlign,
    'text-right': rightAlign,
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark,
    'text-white': whiteText || primary || secondary || danger || success || warning || info || dark
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props, { style: { width: width, minWidth: minWidth, maxWidth: maxWidth } }));
};

Card.defaultProps = {
  minWidth: '200px'
};

Card.propTypes = {
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
  className: _propTypes2.default.string
};

Card.Image = _CardImage2.default;
Card.Header = _CardHeader2.default;
Card.Body = _CardBody2.default;
Card.Text = _CardText2.default;
Card.Title = _CardTitle2.default;
Card.Footer = _CardFooter2.default;

exports.default = Card;