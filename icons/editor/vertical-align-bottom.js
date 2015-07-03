'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var EditorVerticalAlignBottom = React.createClass({
  displayName: 'EditorVerticalAlignBottom',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z' })
    );
  }

});

module.exports = EditorVerticalAlignBottom;