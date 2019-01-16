'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('../Card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require('../Card/CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require('../Card/CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _CardTitle = require('../Card/CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Color = function (_React$PureComponent) {
  _inherits(Color, _React$PureComponent);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).apply(this, arguments));
  }

  _createClass(Color, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          width = _props.width,
          height = _props.height,
          whiteText = _props.whiteText;

      return _react2.default.createElement(
        _Card2.default,
        { width: '10%', minWidth: '110px', maxWidth: '130px', whiteText: whiteText },
        _react2.default.createElement(
          _Card2.default.Body,
          {
            style: {
              backgroundColor: value,
              height: height
            }
          },
          value
        ),
        _react2.default.createElement(
          _Card2.default.Footer,
          { muted: true },
          name
        )
      );
    }
  }]);

  return Color;
}(_react2.default.PureComponent);

exports.default = Color;


Color.propTypes = {
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  whiteText: _propTypes2.default.bool
};

Color.defaultProps = {
  whiteText: true,
  height: '80px'
};