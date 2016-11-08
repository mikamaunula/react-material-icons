'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var DeviceSignalCellular2Bar = React.createClass({
  displayName: 'DeviceSignalCellular2Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fillOpacity': '.3', d: 'M2 22h20V2z' }),
      React.createElement('path', { d: 'M14 10L2 22h12z' })
    );
  }

});

module.exports = DeviceSignalCellular2Bar;