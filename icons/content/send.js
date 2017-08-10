'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ContentSend = createClass({
  displayName: 'ContentSend',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' })
    );
  }

});

module.exports = ContentSend;