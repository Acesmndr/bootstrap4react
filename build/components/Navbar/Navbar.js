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

var _NavbarItem = require('../Navbar/NavbarItem');

var _NavbarItem2 = _interopRequireDefault(_NavbarItem);

var _CFLogo = require('../CFLogo/CFLogo');

var _CFLogo2 = _interopRequireDefault(_CFLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
An all-around flexible and composable component
*/
var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      fixed = _ref.fixed,
      sticky = _ref.sticky,
      href = _ref.href,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ['className', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'fixed', 'sticky', 'href', 'id']);

  var parentClasses = (0, _classnames2.default)('navbar', 'navbar-expand-sm', 'py-1', 'shadow', 'mb-2', {
    'fixed-top': fixed,
    'sticky-top': sticky,
    'navbar-light': light,
    'bg-primary': primary,
    'bg-light': light,
    'navbar-dark': !light,
    'bg-dark': dark,
    'bg-secondary': secondary,
    'bg-danger': danger,
    'bg-success': success
  }, className);
  var childClasses = (0, _classnames2.default)('navbar-collapse', 'collapse', 'navbar-nav', {});
  var toggleNavbar = function toggleNavbar(e) {
    e.target.parentElement.nextElementSibling.classList.toggle('show');
  };
  return _react2.default.createElement(
    'nav',
    { className: parentClasses },
    _react2.default.createElement(
      'a',
      { className: 'navbar-brand', href: href },
      _react2.default.createElement(_CFLogo2.default, { small: true })
    ),
    _react2.default.createElement(
      'button',
      { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'aria-controls': id, 'aria-label': 'Toggle navigation', onClick: function onClick(e) {
          toggleNavbar(e);
        } },
      _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
    ),
    _react2.default.createElement('div', _extends({ className: childClasses, id: id }, props))
  );
};

Navbar.Item = _NavbarItem2.default;

Navbar.defaultProps = {
  href: '#'
};

Navbar.propTypes = {
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  fixed: _propTypes2.default.bool,
  sticky: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  href: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = Navbar;