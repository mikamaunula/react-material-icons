'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionPolymer = createClass({
  displayName: 'ActionPolymer',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z' })
    );
  }

});

module.exports = ActionPolymer;