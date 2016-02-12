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
              correct: null,
              usedNumbers: [],
              redrawCount: 5
      };
    },

    getRandomNumberBetweenOneAndNine: function() {
      return (Math.floor(Math.random() * 9) + 1);
    },

    acceptAnswerHandler: function() {
      var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
      this.setState({usedNumbers: usedNumbers,
                     selectedNumbers: [],
                     correct: null,
                     numberOfStars: this.getRandomNumberBetweenOneAndNine()});

    },

    addNumberClick: function(clickedNumber) {
      if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
        this.setState(
          { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
            correct: null }
        );
      }
    },

    removeNumberClick: function(clickedNumber) {
      var selectedNumbers = this.state.selectedNumbers;
      var indexOfNumber = selectedNumbers.indexOf(clickedNumber);
      selectedNumbers.splice(indexOfNumber, 1);

      this.setState(
        { selectedNumbers: selectedNumbers,
          correct: null}
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

    redraw: function() {
      var newNumberOfStars = this.getRandomNumberBetweenOneAndNine();
      this.setState({numberOfStars: newNumberOfStars,
                     correct: null,
                     selectedNumbers: []});
    },

    render: function() {
      var selectedNumbers = this.state.selectedNumbers;
      var numberOfStars = this.state.numberOfStars;
      var correct = this.state.correct;
      var usedNumbers = this.state.usedNumbers;
      var redrawCount = this.state.redrawCount;

      return (
        <div id="game">
          <h2>Add them up!</h2>
          <hr />
          <div className="clearfix">
            <StarsFrame numberOfStars={numberOfStars}/>
            <ButtonFrame selectedNumbers={selectedNumbers}
                         validateAnswer={this.validateAnswer}
                         correct={correct}
                         acceptAnswer={this.acceptAnswerHandler}
                         redraw={redrawCount}/>
            <AnswerFrame selectedNumbers={selectedNumbers}
                         clickNumber={this.removeNumberClick}/>
          </div>

          <NumbersFrame selectedNumbers={selectedNumbers}
                        clickNumber={this.addNumberClick}
                        usedNumbers={usedNumbers}/>
        </div>
      );
    }
  });

React.render(<Game />, document.getElementById('app'));
})();
