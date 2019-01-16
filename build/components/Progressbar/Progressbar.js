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

require('./../../style/progressbar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Progressbar = function Progressbar(_ref) {
  var max = _ref.max,
      min = _ref.min,
      current = _ref.current,
      showPercentage = _ref.showPercentage,
      height = _ref.height,
      success = _ref.success,
      danger = _ref.danger,
      warning = _ref.warning,
      info = _ref.info,
      light = _ref.light,
      dark = _ref.dark,
      animated = _ref.animated,
      striped = _ref.striped,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['max', 'min', 'current', 'showPercentage', 'height', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'animated', 'striped', 'className']);

  var currentPercentage = Math.abs((current - min) / (max - min) * 100) + '%';
  var classes = (0, _classnames2.default)('progress-bar', {
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark,
    'progress-bar-striped': striped,
    'progress-bar-animated': animated
  }, className);

  return _react2.default.createElement(
    'div',
    { className: 'progress', style: { height: height } },
    _react2.default.createElement(
      'div',
      _extends({ className: classes, role: 'progressbar', 'aria-valuenow': current, 'aria-valuemin': min, 'aria-valuemax': max }, props, { style: { width: currentPercentage } }),
      showPercentage ? currentPercentage : ''
    )
  );
};

Progressbar.displayName = 'Progressbar';

Progressbar.defaultProps = {
  max: '100',
  min: '0',
  current: '50'
};

Progressbar.propTypes = {
  className: _propTypes2.default.string,
  max: _propTypes2.default.string,
  min: _propTypes2.default.string,
  current: _propTypes2.default.string,
  success: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  info: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  striped: _propTypes2.default.bool,
  animated: _propTypes2.default.bool,
  height: _propTypes2.default.string
};

exports.default = Progressbar;