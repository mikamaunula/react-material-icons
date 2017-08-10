'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var EditorFormatItalic = createClass({
  displayName: 'EditorFormatItalic',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z' })
    );
  }

});

module.exports = EditorFormatItalic;