'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var CommunicationCallMade = createClass({
  displayName: 'CommunicationCallMade',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z' })
    );
  }

});

module.exports = CommunicationCallMade;