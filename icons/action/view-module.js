'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionViewModule = createClass({
  displayName: 'ActionViewModule',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z' })
    );
  }

});

module.exports = ActionViewModule;