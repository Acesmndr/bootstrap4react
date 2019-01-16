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

require('./../../style/sidenav.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SidenavIcon = function SidenavIcon(_ref) {
  var className = _ref.className,
      href = _ref.href,
      src = _ref.src,
      active = _ref.active,
      disabled = _ref.disabled,
      rightAlign = _ref.rightAlign,
      props = _objectWithoutProperties(_ref, ['className', 'href', 'src', 'active', 'disabled', 'rightAlign']);

  var classes = (0, _classnames2.default)('nav-item', 'nav-link', 'sidenav-item', 'mx-1', {
    'active': active,
    'disabled': disabled,
    'ml-auto': rightAlign,
    'm-0': rightAlign,
    'p-0': rightAlign
  }, className);
  return _react2.default.createElement(
    'a',
    { className: classes, href: href },
    _react2.default.createElement(Image, { src: src, width: '48px' }),
    _react2.default.createElement('div', _extends({ className: 'sidenav-title' }, props))
  );
};

SidenavIcon.displayName = 'Sidenav.Icon';

SidenavIcon.propTypes = {
  className: _propTypes2.default.string,
  href: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  src: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  rightAlign: _propTypes2.default.bool
};

exports.default = SidenavIcon;