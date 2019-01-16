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

var _PaginationItem = require('./PaginationItem');

var _PaginationItem2 = _interopRequireDefault(_PaginationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Pagination = function Pagination(_ref) {
  var className = _ref.className,
      large = _ref.large,
      small = _ref.small,
      centerAlign = _ref.centerAlign,
      leftAlign = _ref.leftAlign,
      rightAlign = _ref.rightAlign,
      props = _objectWithoutProperties(_ref, ['className', 'large', 'small', 'centerAlign', 'leftAlign', 'rightAlign']);

  var classes = (0, _classnames2.default)('pagination', {
    'pagination-lg': large,
    'pagination-sm': small,
    'justify-content-start': leftAlign,
    'justify-content-center': centerAlign,
    'justify-content-end': rightAlign

  }, className);

  return _react2.default.createElement(
    'nav',
    { 'aria-label': 'Page navigation example' },
    _react2.default.createElement('ul', _extends({ className: classes }, props))
  );
};

Pagination.Item = _PaginationItem2.default;

Pagination.propTypes = {
  className: _propTypes2.default.string,
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  centerAlign: _propTypes2.default.bool,
  leftAlign: _propTypes2.default.bool,
  rightAlign: _propTypes2.default.bool
};

exports.default = Pagination;