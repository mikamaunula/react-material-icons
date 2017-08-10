'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var DeviceSignalCellular0Bar = createClass({
  displayName: 'DeviceSignalCellular0Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fillOpacity': '.3', d: 'M2 22h20V2z' })
    );
  }

});

module.exports = DeviceSignalCellular0Bar;