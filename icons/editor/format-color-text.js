'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var EditorFormatColorText = createClass({
  displayName: 'EditorFormatColorText',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fillOpacity': '.36', d: 'M0 20h24v4H0z' }),
      React.createElement('path', { d: 'M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z' })
    );
  }

});

module.exports = EditorFormatColorText;