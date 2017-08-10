'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionAccountBalance = createClass({
  displayName: 'ActionAccountBalance',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z' })
    );
  }

});

module.exports = ActionAccountBalance;