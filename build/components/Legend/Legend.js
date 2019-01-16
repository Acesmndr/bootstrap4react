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

var Legend = function Legend(_ref) {
  var className = _ref.className,
      text = _ref.text,
      value = _ref.value,
      height = _ref.height,
      width = _ref.width,
      striped = _ref.striped,
      padding = _ref.padding,
      props = _objectWithoutProperties(_ref, ['className', 'text', 'value', 'height', 'width', 'striped', 'padding']);

  var classes = (0, _classnames2.default)('d-inline-block', className);
  var colorClasses = (0, _classnames2.default)('d-inline-block', 'mx-2', {
    'progress-bar-striped': striped
  });
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    _react2.default.createElement('div', {
      className: colorClasses,
      style: {
        backgroundColor: value,
        minHeight: height,
        minWidth: width,
        padding: padding
      }
    }),
    _react2.default.createElement(
      'div',
      { className: 'd-inline-block text-muted small align-top' },
      text
    )
  );
};

Legend.propTypes = {
  className: _propTypes2.default.string,
  text: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  value: _propTypes2.default.string,
  striped: _propTypes2.default.bool,
  padding: _propTypes2.default.string
};

Legend.defaultProps = {
  height: '20px',
  width: '40px'
};

exports.default = Legend;