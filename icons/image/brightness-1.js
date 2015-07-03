'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var ImageBrightness1 = React.createClass({
  displayName: 'ImageBrightness1',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('circle', { cx: '12', cy: '12', r: '10' })
    );
  }

});

module.exports = ImageBrightness1;