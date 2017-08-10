'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var CommunicationClearAll = createClass({
  displayName: 'CommunicationClearAll',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z' })
    );
  }

});

module.exports = CommunicationClearAll;