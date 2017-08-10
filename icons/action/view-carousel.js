'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionViewCarousel = createClass({
  displayName: 'ActionViewCarousel',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z' })
    );
  }

});

module.exports = ActionViewCarousel;