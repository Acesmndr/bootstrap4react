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

var Image = function Image(_ref) {
  var className = _ref.className,
      alt = _ref.alt,
      src = _ref.src,
      badge = _ref.badge,
      rounded = _ref.rounded,
      roundedTop = _ref.roundedTop,
      roundedRight = _ref.roundedRight,
      roundedBottom = _ref.roundedBottom,
      roundedLeft = _ref.roundedLeft,
      square = _ref.square,
      height = _ref.height,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ['className', 'alt', 'src', 'badge', 'rounded', 'roundedTop', 'roundedRight', 'roundedBottom', 'roundedLeft', 'square', 'height', 'width']);

  var classes = (0, _classnames2.default)('img', {
    'rounded': rounded,
    'rounded-top': roundedTop,
    'rounded-right': roundedRight,
    'rounded-bottom': roundedBottom,
    'rounded-left': roundedLeft,
    'rounded-0': square,
    'rounded-circle': badge
  }, className);

  return _react2.default.createElement('img', _extends({ src: src, alt: alt, style: { maxWidth: '100%' }, className: classes }, props, { height: height, width: width }));
};

Image.propTypes = {
  className: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  src: _propTypes2.default.string.isRequired,
  badge: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  roundedTop: _propTypes2.default.bool,
  roundedBottom: _propTypes2.default.bool,
  roundedLeft: _propTypes2.default.bool,
  roundedRight: _propTypes2.default.bool,
  square: _propTypes2.default.bool,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string
};

exports.default = Image;