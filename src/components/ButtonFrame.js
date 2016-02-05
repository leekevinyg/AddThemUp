"use strict";
var React = require('react');

var ButtonFrame = React.createClass({

  render: function() {
    var disabled;

    if (this.props.selectedNumbers.length === 0) {
      disabled = true;
    }

    return (
      <div id="button-frame">
        <button className="btn btn-primary btn-lg" disabled={disabled} onClick={this.props.validateAnswer}>
          =
        </button>
      </div>
    );
  }
});

module.exports = ButtonFrame;
