'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var EditorSpaceBar = createClass({
  displayName: 'EditorSpaceBar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M18 9v4H6V9H4v6h16V9z' })
    );
  }

});

module.exports = EditorSpaceBar;