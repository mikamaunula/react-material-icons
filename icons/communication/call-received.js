'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var CommunicationCallReceived = createClass({
  displayName: 'CommunicationCallReceived',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z' })
    );
  }

});

module.exports = CommunicationCallReceived;