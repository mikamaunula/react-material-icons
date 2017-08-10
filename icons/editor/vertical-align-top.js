'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var EditorVerticalAlignTop = createClass({
  displayName: 'EditorVerticalAlignTop',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z' })
    );
  }

});

module.exports = EditorVerticalAlignTop;