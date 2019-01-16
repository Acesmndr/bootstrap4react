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

var _cflogoNameLight = require('../../../logo/cflogo-name-light.png');

var _cflogoNameLight2 = _interopRequireDefault(_cflogoNameLight);

var _cflogoNameDark = require('../../../logo/cflogo-name-dark.png');

var _cflogoNameDark2 = _interopRequireDefault(_cflogoNameDark);

var _cflogoName = require('../../../logo/cflogo-name.png');

var _cflogoName2 = _interopRequireDefault(_cflogoName);

var _cflogoLarge = require('../../../logo/cflogo-large.png');

var _cflogoLarge2 = _interopRequireDefault(_cflogoLarge);

var _cflogoSmall = require('../../../logo/cflogo-small.png');

var _cflogoSmall2 = _interopRequireDefault(_cflogoSmall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CFLogo = function CFLogo(_ref) {
  var className = _ref.className,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      name = _ref.name,
      light = _ref.light,
      dark = _ref.dark,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ['className', 'small', 'medium', 'large', 'name', 'light', 'dark', 'height']);

  var source = [{
    src: _cflogoNameLight2.default,
    active: name && light
  }, {
    src: _cflogoNameDark2.default,
    active: name && dark
  }, {
    src: _cflogoName2.default,
    active: name
  }, {
    src: _cflogoLarge2.default,
    active: large
  }, {
    src: _cflogoSmall2.default,
    active: small
  }, {
    src: _cflogoSmall2.default,
    active: true
  }].filter(function (imageSrcObj) {
    return imageSrcObj.active;
  })[0].src;
  var size = [{
    value: height,
    active: !!height
  }, {
    value: '96px',
    active: large
  }, {
    value: '64px',
    active: medium
  }, {
    value: '32px',
    active: small
  }, {
    value: '48px',
    active: true
  }].filter(function (heightObj) {
    return heightObj.active;
  })[0].value;
  var classes = (0, _classnames2.default)('d-inline-block', {}, className);
  return _react2.default.createElement('img', _extends({ src: source, alt: 'CloudFactory Logo', style: { height: size }, className: classes }, props));
};

CFLogo.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.string,
  name: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  light: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  height: _propTypes2.default.string
};

exports.default = CFLogo;