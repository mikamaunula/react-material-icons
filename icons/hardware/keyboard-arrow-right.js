'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var HardwareKeyboardArrowRight = React.createClass({
  displayName: 'HardwareKeyboardArrowRight',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' })
    );
  }

});

module.exports = HardwareKeyboardArrowRight;