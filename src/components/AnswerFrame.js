"use strict";
var React = require('react');

var AnswerFrame = React.createClass({
  render: function() {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function(selectedNumber) {
      return (
        <span onClick={props.clickNumber.bind(null, selectedNumber)}>
          {selectedNumber}
        </span>
      );
    });

    return (
      <div id="answer-frame">
       <div className="well">
         {selectedNumbers}
       </div>
      </div>
    );
  }
});

module.exports = AnswerFrame;
