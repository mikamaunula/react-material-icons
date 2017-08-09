'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var AvPlayArrow = createClass({
  displayName: 'AvPlayArrow',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M8 5v14l11-7z' })
    );
  }

});

module.exports = AvPlayArrow;