'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var EditorFunctions = createClass({
  displayName: 'EditorFunctions',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z' })
    );
  }

});

module.exports = EditorFunctions;