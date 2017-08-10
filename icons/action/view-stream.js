'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionViewStream = createClass({
  displayName: 'ActionViewStream',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M4 18h17v-6H4v6zM4 5v6h17V5H4z' })
    );
  }

});

module.exports = ActionViewStream;