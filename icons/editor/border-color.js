'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var EditorBorderColor = createClass({
  displayName: 'EditorBorderColor',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z' }),
      React.createElement('path', { 'fillOpacity': '.36', d: 'M0 20h24v4H0z' })
    );
  }

});

module.exports = EditorBorderColor;