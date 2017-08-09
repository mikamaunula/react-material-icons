'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionTrendingFlat = createClass({
  displayName: 'ActionTrendingFlat',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M22 12l-4-4v3H3v2h15v3z' })
    );
  }

});

module.exports = ActionTrendingFlat;