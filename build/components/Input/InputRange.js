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

var InputRange = function InputRange(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      valid = _ref.valid,
      invalid = _ref.invalid,
      disabled = _ref.disabled,
      helpText = _ref.helpText,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['className', 'id', 'label', 'valid', 'invalid', 'disabled', 'helpText', 'min', 'max', 'step', 'value']);

  var classes = (0, _classnames2.default)('form-control-range', {
    'is-valid': valid,
    'is-invalid': invalid
  }, className);
  return _react2.default.createElement(
    'div',
    { className: 'form-group' },
    _react2.default.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    _react2.default.createElement('input', _extends({ type: 'range', className: classes, id: id, disabled: disabled, min: min, max: max, step: step, value: value }, props)),
    _react2.default.createElement(
      'small',
      { className: 'form-text text-muted' },
      helpText
    )
  );
};

// InputRange.displayName = 'Form.Text'

InputRange.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  valid: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readonly: _propTypes2.default.bool,
  helpText: _propTypes2.default.string,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  value: _propTypes2.default.number
};

exports.default = InputRange;