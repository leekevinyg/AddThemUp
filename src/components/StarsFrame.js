"use strict";
var React = require('react');

var StarsFrame = React.createClass({

  render: function() {

    var numberOfStars = this.props.numberOfStars,
        stars = [];

    for (var i = 0; i < numberOfStars; i++) {
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
      );
    }

    return (
      <div id="stars-frame">
       <div className="well">
         {stars}
       </div>
      </div>
    );
  }
});

module.exports = StarsFrame;
