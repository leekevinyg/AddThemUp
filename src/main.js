$ = jQuery = require('jquery');
var React = require('react');
var Card = require('./components/Card.js');
var StarsFrame = require('./components/StarsFrame.js');
var ButtonFrame = require('./components/ButtonFrame.js');
var AnswerFrame = require('./components/AnswerFrame.js');
var NumbersFrame = require('./components/NumbersFrame.js');

(function() {
  "use strict";
  var Game = React.createClass({

    getInitialState: function() {
      return {
              selectedNumbers: [],
              numberOfStars: this.getRandomNumberBetweenOneAndNine()
      };
    },

    getRandomNumberBetweenOneAndNine: function() {
      return (Math.floor(Math.random() * 9) + 1);
    },

    addNumberClick: function(clickedNumber) {
      if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
        this.setState(
          {selectedNumbers: this.state.selectedNumbers.concat(clickedNumber)}
        );
      }
    },

    removeNumberClick: function(clickedNumber) {
      var selectedNumbers = this.state.selectedNumbers;
      var indexOfNumber = selectedNumbers.indexOf(clickedNumber);
      selectedNumbers.splice(indexOfNumber, 1);

      this.setState(
        {selectedNumbers: selectedNumbers}
      );
    },

    render: function() {
      var selectedNumbers = this.state.selectedNumbers;
      var numberOfStars = this.state.numberOfStars;

      return (
        <div id="game">
          <h2>Add them up!</h2>
          <hr />
          <div className="clearfix">
            <StarsFrame numberOfStars={numberOfStars}/>
            <ButtonFrame selectedNumbers={selectedNumbers}/>
            <AnswerFrame selectedNumbers={selectedNumbers} clickNumber={this.removeNumberClick}/>
          </div>

          <NumbersFrame selectedNumbers={selectedNumbers} clickNumber={this.addNumberClick}/>
        </div>
      );
    }
  });

React.render(<Game />, document.getElementById('app'));
})();
