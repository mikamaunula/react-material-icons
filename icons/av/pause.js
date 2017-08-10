'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var AvPause = createClass({
  displayName: 'AvPause',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' })
    );
  }

});

module.exports = AvPause;