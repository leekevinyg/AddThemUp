"use strict";
var React = require('react');

var DoneFrame = React.createClass({

  render: function() {
    return (
      <div className="well text-center">
        <h2>{this.props.doneStatus}</h2>
      </div>
    );
  }
});

module.exports = DoneFrame;
