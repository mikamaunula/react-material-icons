'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionViewArray = createClass({
  displayName: 'ActionViewArray',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z' })
    );
  }

});

module.exports = ActionViewArray;