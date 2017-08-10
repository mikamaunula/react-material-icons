'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var EditorPublish = createClass({
  displayName: 'EditorPublish',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z' })
    );
  }

});

module.exports = EditorPublish;