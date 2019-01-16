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

var Col = function Col(_ref) {
  var className = _ref.className,
      medium = _ref.medium,
      small = _ref.small,
      large = _ref.large,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ['className', 'medium', 'small', 'large', 'size']);

  var classes = (0, _classnames2.default)('col', 'col-' + size, medium ? 'col-md-' + medium : '', small ? 'col-sm-' + small : '', large ? 'col-lg-' + large : '', {}, className);
  return _react2.default.createElement('div', _extends({ className: classes }, props));
};

Col.propTypes = {
  className: _propTypes2.default.string,
  small: _propTypes2.default.number,
  medium: _propTypes2.default.number,
  large: _propTypes2.default.number,
  size: _propTypes2.default.number
};

exports.default = Col;