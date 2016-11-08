'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var DeviceSignalCellular1Bar = React.createClass({
  displayName: 'DeviceSignalCellular1Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fillOpacity': '.3', d: 'M2 22h20V2z' }),
      React.createElement('path', { d: 'M12 12L2 22h10z' })
    );
  }

});

module.exports = DeviceSignalCellular1Bar;