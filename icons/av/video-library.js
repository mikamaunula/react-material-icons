'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var AvVideoLibrary = createClass({
  displayName: 'AvVideoLibrary',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z' })
    );
  }

});

module.exports = AvVideoLibrary;