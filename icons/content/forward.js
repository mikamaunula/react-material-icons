'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var ContentForward = React.createClass({
  displayName: 'ContentForward',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M12 8V4l8 8-8 8v-4H4V8z' })
    );
  }

});

module.exports = ContentForward;