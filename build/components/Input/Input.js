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

var Input = function Input(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder,
      email = _ref.email,
      password = _ref.password,
      text = _ref.text,
      textarea = _ref.textarea,
      valid = _ref.valid,
      invalid = _ref.invalid,
      disabled = _ref.disabled,
      helpText = _ref.helpText,
      large = _ref.large,
      small = _ref.small,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'label', 'placeholder', 'email', 'password', 'text', 'textarea', 'valid', 'invalid', 'disabled', 'helpText', 'large', 'small']);

  var classes = (0, _classnames2.default)('form-control', {
    'is-valid': valid,
    'is-invalid': invalid,
    'form-control-lg': large,
    'form-control-sm': small
  }, className);
  var type = [{
    name: 'password',
    value: password
  }, {
    name: 'email',
    value: email
  }, {
    name: 'textarea',
    value: textarea
  }, {
    name: 'text',
    value: true
  }].filter(function (x) {
    return x.value;
  })[0];
  return _react2.default.createElement(
    'div',
    { className: 'form-group' },
    _react2.default.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    type.name !== 'textarea' ? _react2.default.createElement('input', _extends({ type: type.name, className: classes, id: id, placeholder: placeholder, disabled: disabled }, props)) : _react2.default.createElement('textarea', _extends({ className: classes, id: id, placeholder: placeholder, disabled: disabled }, props)),
    _react2.default.createElement(
      'small',
      { className: 'form-text text-muted' },
      helpText
    )
  );
};

Input.displayName = 'Input';

Input.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  email: _propTypes2.default.bool,
  password: _propTypes2.default.bool,
  text: _propTypes2.default.bool,
  textarea: _propTypes2.default.bool,
  valid: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readonly: _propTypes2.default.bool,
  helpText: _propTypes2.default.string,
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool
};

exports.default = Input;