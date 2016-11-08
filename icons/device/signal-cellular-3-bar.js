'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var DeviceSignalCellular3Bar = React.createClass({
  displayName: 'DeviceSignalCellular3Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fillOpacity': '.3', d: 'M2 22h20V2z' }),
      React.createElement('path', { d: 'M17 7L2 22h15z' })
    );
  }

});

module.exports = DeviceSignalCellular3Bar;