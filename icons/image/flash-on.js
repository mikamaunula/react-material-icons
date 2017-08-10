'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ImageFlashOn = createClass({
  displayName: 'ImageFlashOn',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M7 2v11h3v9l7-12h-4l4-8z' })
    );
  }

});

module.exports = ImageFlashOn;