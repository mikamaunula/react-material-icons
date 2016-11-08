'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var DeviceNetworkCell = React.createClass({
  displayName: 'DeviceNetworkCell',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fillOpacity': '.3', d: 'M2 22h20V2z' }),
      React.createElement('path', { d: 'M17 7L2 22h15z' })
    );
  }

});

module.exports = DeviceNetworkCell;