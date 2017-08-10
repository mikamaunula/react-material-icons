'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var HardwareKeyboardBackspace = createClass({
  displayName: 'HardwareKeyboardBackspace',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z' })
    );
  }

});

module.exports = HardwareKeyboardBackspace;