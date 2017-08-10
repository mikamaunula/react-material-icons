'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var createClass = require('create-react-class');

var ActionEventSeat = createClass({
  displayName: 'ActionEventSeat',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement(
        'defs',
        null,
        React.createElement('path', { id: 'a', d: 'M0 0h24v24H0V0z' })
      ),
      React.createElement(
        'clipPath',
        { id: 'b' },
        React.createElement('use', { overflow: 'visible' })
      ),
      React.createElement('path', { d: 'M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z', 'clip-path': 'url(#b)' })
    );
  }

});

module.exports = ActionEventSeat;