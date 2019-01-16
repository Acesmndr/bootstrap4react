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

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder,
      valid = _ref.valid,
      invalid = _ref.invalid,
      disabled = _ref.disabled,
      inline = _ref.inline,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'label', 'placeholder', 'valid', 'invalid', 'disabled', 'inline']);

  var classes = (0, _classnames2.default)('form-check-input', {
    'is-valid': valid,
    'is-invalid': invalid
  }, className);
  var parentClasses = (0, _classnames2.default)('form-check', {
    'form-check-inline': inline
  });
  return _react2.default.createElement(
    'div',
    { className: parentClasses },
    _react2.default.createElement('input', _extends({ className: classes, type: 'checkbox', id: id }, props)),
    _react2.default.createElement(
      'label',
      { className: 'form-check-label', htmlFor: id },
      label
    )
  );
};

// Checkbox.displayName = 'Form.Text'

Checkbox.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  valid: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  inline: _propTypes2.default.bool
};

exports.default = Checkbox;