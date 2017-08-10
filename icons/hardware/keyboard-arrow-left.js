'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var HardwareKeyboardArrowLeft = createClass({
  displayName: 'HardwareKeyboardArrowLeft',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' })
    );
  }

});

module.exports = HardwareKeyboardArrowLeft;