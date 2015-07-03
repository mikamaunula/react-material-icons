'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var DeviceSignalCellularConnectedNoInternet4Bar = React.createClass({
  displayName: 'DeviceSignalCellularConnectedNoInternet4Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z' })
    );
  }

});

module.exports = DeviceSignalCellularConnectedNoInternet4Bar;