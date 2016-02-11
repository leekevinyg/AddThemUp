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
              numberOfStars: this.getRandomNumberBetweenOneAndNine(),
              correct: null
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

    sumSelectedNumbers: function() {
      return this.state.selectedNumbers.reduce(function(previousValue, nextValue) {
        return previousValue + nextValue;
      }, 0);
    },

    validateAnswer: function() {
      var correct = (this.state.numberOfStars === this.sumSelectedNumbers());
      this.setState({correct: correct});
    },

    render: function() {
      var selectedNumbers = this.state.selectedNumbers;
      var numberOfStars = this.state.numberOfStars;
      var correct = this.state.correct;

      return (
        <div id="game">
          <h2>Add them up!</h2>
          <hr />
          <div className="clearfix">
            <StarsFrame numberOfStars={numberOfStars}/>
            <ButtonFrame selectedNumbers={selectedNumbers}
                         validateAnswer={this.validateAnswer}
                         correct={correct} />
            <AnswerFrame selectedNumbers={selectedNumbers} clickNumber={this.removeNumberClick}/>
          </div>

          <NumbersFrame selectedNumbers={selectedNumbers} clickNumber={this.addNumberClick}/>
        </div>
      );
    }
  });

React.render(<Game />, document.getElementById('app'));
})();
