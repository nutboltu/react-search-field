'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _typeco = require('typeco');

var _typeco2 = _interopRequireDefault(_typeco);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENTER_KEY = 13;
var SEARCH_BUTTON_EDGE = 35;

var searchFieldStyle = {
  border: '1px #ddd solid',
  display: 'inline-flex',
  justifyContent: 'space-between',
  height: SEARCH_BUTTON_EDGE
};

var searchFieldButtonStyle = {
  height: SEARCH_BUTTON_EDGE,
  width: SEARCH_BUTTON_EDGE,
  outline: 'none',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: 0,
  boxSizing: 'border-box',
  appearance: 'none',
  border: 'none',
  borderLeft: '1px #ddd solid'
};

var searchFieldInputStyle = {
  outline: 'none',
  border: 'none',
  fontSize: 14,
  padding: 10,
  flex: 1,
  color: '#5a5a5a',
  fontWeight: 100
};

var SearchIcon = function SearchIcon() {
  var iconEdge = Math.ceil(SEARCH_BUTTON_EDGE * 0.60);
  var searchIconStyle = {
    fill: '#727272'
  };
  return _react2.default.createElement(
    'svg',
    {
      version: '1.1',
      x: '0px',
      y: '0px',
      width: iconEdge,
      height: iconEdge,
      viewBox: '0 0 635 635',
      style: searchIconStyle
    },
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905 c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891 c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702 C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092 c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z'
      })
    )
  );
};

var SearchField = function (_React$Component) {
  _inherits(SearchField, _React$Component);

  function SearchField(props) {
    _classCallCheck(this, SearchField);

    var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this, props));

    _this.state = {
      value: _this.props.searchText
    };

    _this.onChangeBound = _this.onChangeBound.bind(_this);
    _this.onEnterBound = _this.onEnterBound.bind(_this);
    _this.onSearchClick = _this.onSearchClick.bind(_this);
    return _this;
  }

  _createClass(SearchField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.searchText !== nextProps.searchText) {
        this.setState({
          value: nextProps.searchText
        });
      }
    }
  }, {
    key: 'onChangeBound',
    value: function onChangeBound(event) {
      this.setState({
        value: event.target.value
      });
      if (_typeco2.default.isFunction(this.props.onChange)) {
        this.props.onChange(this.state.value, event);
      }
    }
  }, {
    key: 'onEnterBound',
    value: function onEnterBound(event) {
      var isEnterPressed = event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
      if (isEnterPressed && _typeco2.default.isFunction(this.props.onEnter)) {
        this.props.onEnter(this.state.value, event);
      }
    }
  }, {
    key: 'onSearchClick',
    value: function onSearchClick() {
      if (_typeco2.default.isFunction(this.props.onSearchClick)) {
        this.props.onSearchClick(this.state.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          placeholder = _props.placeholder;

      var className = 'react-search-field ' + classNames;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: searchFieldStyle
        },
        _react2.default.createElement('input', {
          className: 'react-search-field-input',
          style: searchFieldInputStyle,
          onChange: this.onChangeBound,
          onKeyPress: this.onEnterBound,
          placeholder: placeholder,
          type: 'text',
          value: this.state.value
        }),
        _react2.default.createElement(
          'button',
          {
            className: 'react-search-field-button',
            type: 'button',
            style: searchFieldButtonStyle,
            onClick: this.onSearchClick
          },
          _react2.default.createElement(SearchIcon, null)
        )
      );
    }
  }]);

  return SearchField;
}(_react2.default.Component);

SearchField.propTypes = {
  classNames: _propTypes2.default.string,
  searchText: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  onSearchClick: _propTypes2.default.func
};

SearchField.defaultProps = {
  classNames: '',
  searchText: '',
  placeholder: 'Search',
  onChange: null,
  onEnter: null,
  onSearchClick: null
};

exports.default = SearchField;