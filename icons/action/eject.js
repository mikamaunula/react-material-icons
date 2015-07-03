'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var ActionEject = React.createClass({
  displayName: 'ActionEject',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M5 17h14v2H5zm7-12L5.33 15h13.34z' })
    );
  }

});

module.exports = ActionEject;