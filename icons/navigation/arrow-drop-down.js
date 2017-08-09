'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var NavigationArrowDropDown = createClass({
  displayName: 'NavigationArrowDropDown',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M7 10l5 5 5-5z' })
    );
  }

});

module.exports = NavigationArrowDropDown;