'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var NavigationArrowDropUp = createClass({
  displayName: 'NavigationArrowDropUp',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M7 14l5-5 5 5z' })
    );
  }

});

module.exports = NavigationArrowDropUp;