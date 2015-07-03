'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var DeviceSignalCellularNull = React.createClass({
  displayName: 'DeviceSignalCellularNull',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z' })
    );
  }

});

module.exports = DeviceSignalCellularNull;