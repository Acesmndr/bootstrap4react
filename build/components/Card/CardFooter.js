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

var CardFooter = function CardFooter(_ref) {
  var className = _ref.className,
      muted = _ref.muted,
      centerAlign = _ref.centerAlign,
      leftAlign = _ref.leftAlign,
      rightAlign = _ref.rightAlign,
      props = _objectWithoutProperties(_ref, ['className', 'muted', 'centerAlign', 'leftAlign', 'rightAlign']);

  var classes = (0, _classnames2.default)('card-footer', {
    'text-muted': muted,
    'text-center': centerAlign,
    'text-left': leftAlign,
    'text-right': rightAlign
  }, className);

  return _react2.default.createElement('div', _extends({ className: classes }, props));
};

CardFooter.displayName = 'Card.Footer';

CardFooter.propTypes = {
  className: _propTypes2.default.string,
  muted: _propTypes2.default.bool,
  centerAlign: _propTypes2.default.bool,
  leftAlign: _propTypes2.default.bool,
  rightAlign: _propTypes2.default.bool
};

exports.default = CardFooter;