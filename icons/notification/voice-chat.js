'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var NotificationVoiceChat = createClass({
  displayName: 'NotificationVoiceChat',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z' })
    );
  }

});

module.exports = NotificationVoiceChat;