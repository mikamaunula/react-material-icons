'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ContentRemove = createClass({
  displayName: 'ContentRemove',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M19 13H5v-2h14v2z' })
    );
  }

});

module.exports = ContentRemove;