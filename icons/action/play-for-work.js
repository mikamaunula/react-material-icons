'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionPlayForWork = createClass({
  displayName: 'ActionPlayForWork',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { fill: '#010101', d: 'M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z' })
    );
  }

});

module.exports = ActionPlayForWork;