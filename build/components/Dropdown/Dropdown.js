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

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownDivider = require('./DropdownDivider');

var _DropdownDivider2 = _interopRequireDefault(_DropdownDivider);

require('./../../style/dropdown.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var title = _ref.title,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      link = _ref.link,
      large = _ref.large,
      small = _ref.small,
      outlined = _ref.outlined,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      loading = _ref.loading,
      href = _ref.href,
      onClick = _ref.onClick,
      up = _ref.up,
      down = _ref.down,
      left = _ref.left,
      right = _ref.right,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ['title', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'large', 'small', 'outlined', 'active', 'disabled', 'className', 'loading', 'href', 'onClick', 'up', 'down', 'left', 'right', 'id']);

  // let showDropdown = false;
  var parentClasses = (0, _classnames2.default)('dropdown', {
    'dropup': up,
    'dropright': right,
    'dropleft': left
  });
  var classes = (0, _classnames2.default)('btn', 'btn-primary', 'dropdown-toggle', {
    'btn-secondary': secondary,
    'btn-success': success,
    'btn-danger': danger,
    'btn-warning': warning,
    'btn-info': info,
    'btn-light': light,
    'btn-dark': dark,
    'btn-link': link,
    'btn-lg': large,
    'btn-sm': small,
    'btn-block': outlined,
    'active': active,
    'disabled': disabled
  }, className);
  var toggleDropDown = function toggleDropDown(e) {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href) {
      window.location = href;
      return;
    }
    e.target.nextElementSibling.classList.toggle('show');
  };
  return _react2.default.createElement(
    'div',
    { className: parentClasses },
    _react2.default.createElement(
      'button',
      _extends({ type: 'button', className: classes }, props, { 'data-toggle': 'dropdown', 'aria-haspopup': true, 'aria-expanded': false, id: id, onClick: function onClick(e) {
          toggleDropDown(e);
        } }),
      title
    ),
    _react2.default.createElement('div', _extends({ className: 'dropdown-menu', 'aria-labelledby': id }, props))
  );
};
Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  /** Disable Button */
  disabled: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  grouped: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  href: _propTypes2.default.string,
  up: _propTypes2.default.bool,
  down: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  id: _propTypes2.default.string

};

Dropdown.Item = _DropdownItem2.default;
Dropdown.Divider = _DropdownDivider2.default;

exports.default = Dropdown;