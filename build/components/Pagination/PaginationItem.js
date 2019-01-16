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

var PaginationItem = function PaginationItem(_ref) {
  var className = _ref.className,
      active = _ref.active,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ['className', 'active', 'disabled']);

  var classes = (0, _classnames2.default)('page-item', {
    disabled: disabled,
    active: active
  }, className);

  return _react2.default.createElement(
    'li',
    { className: classes },
    ' ',
    _react2.default.createElement('a', _extends({ className: 'page-link', href: '#' }, props))
  );
};

PaginationItem.propTypes = {
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = PaginationItem;