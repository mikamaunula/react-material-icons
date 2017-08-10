'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionChangeHistory = createClass({
  displayName: 'ActionChangeHistory',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z' })
    );
  }

});

module.exports = ActionChangeHistory;