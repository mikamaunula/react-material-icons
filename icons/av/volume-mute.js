'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var AvVolumeMute = createClass({
  displayName: 'AvVolumeMute',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M7 9v6h4l5 5V4l-5 5H7z' })
    );
  }

});

module.exports = AvVolumeMute;