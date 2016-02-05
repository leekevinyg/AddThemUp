"use strict";
var React = require('react');

var Form = React.createClass({
  handleSubmit: function(submitEvent) {
    submitEvent.preventDefault();
    var loginInput = React.findDOMNode(this.refs.login);
    this.props.addCardToForm(loginInput.value);
    this.clearLoginInput();
  },

  clearLoginInput: function() {
    var loginInput = React.findDOMNode(this.refs.login);
    loginInput.value = '';
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit} className="well">
        <input placeholder="github login" ref="login"/>
        <button className="btn btn-primary">Add</button>
      </form>
    );
  }
});

module.exports = Form;
