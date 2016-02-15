$ = jQuery = require('jquery');
var React = require('react');
var StarsFrame = require('./components/StarsFrame.js');
var ButtonFrame = require('./components/ButtonFrame.js');
var AnswerFrame = require('./components/AnswerFrame.js');
var NumbersFrame = require('./components/NumbersFrame.js');
var DoneFrame = require('./components/DoneFrame.js');
var doesSumExist = require('./algorithms/TwoSumSolver.js');

(function() {
  "use strict";

  var Game = React.createClass({

    // React Lifecycle Hooks ============================================

    getInitialState: function() {
      return {
              selectedNumbers: [],
              usedNumbers: [],
              numberOfStars: this.getRandomNumberBetweenOneAndNine(),
              correct: null,
              redrawCount: 5,
              doneStatus: null
      };
    },

    render: function() {
      var selectedNumbers = this.state.selectedNumbers,
          numberOfStars = this.state.numberOfStars,
          correct = this.state.correct,
          usedNumbers = this.state.usedNumbers,
          redrawCount = this.state.redrawCount,
          gameOver = this.state.doneStatus,
          gameState = gameOver ? <DoneFrame doneStatus={gameOver} /> :
                                 <NumbersFrame selectedNumbers={selectedNumbers}
                                                 clickNumber={this.addNumberClick}
                                                 usedNumbers={usedNumbers}/>;
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
                         redraw={this.redraw}
                         redrawCount={redrawCount}/>
            <AnswerFrame selectedNumbers={selectedNumbers}
                         clickNumber={this.removeNumberClick}/>
          </div>
          {gameState}
        </div>
      );
    },

    // Helper Functions ============================================

    getRandomNumberBetweenOneAndNine: function() {
      return (Math.floor(Math.random() * 9) + 1);
    },

    updateGameStatus: function() {
      if (this.state.usedNumbers.length === 9) {
        this.setState({ doneStatus: 'Great job!'});
        return;
      }

      if(this.state.redrawCount === 0 && !this.possibleSolutions()) {
        this.setState({ doneStatus: 'Game Over!'});
        return;
      }
    },

    possibleSolutions: function() {
      var numberOfStars = this.state.numberOfStars,
          possibleNumbers = [],
          usedNumbers = this.state.usedNumbers;

      for (var index = 0; index <= 9; index++) {
        if (usedNumbers.indexOf(index) < 0) {
          possibleNumbers.push(index);
        }
      }

    return doesSumExist(possibleNumbers, numberOfStars);
    },

    acceptAnswerHandler: function() {
      var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
      this.setState({usedNumbers: usedNumbers,
                     selectedNumbers: [],
                     correct: null,
                     numberOfStars: this.getRandomNumberBetweenOneAndNine()}, function() {
                       this.updateGameStatus();
                     });
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
      if (this.state.redrawCount > 0) {
        var newNumberOfStars = this.getRandomNumberBetweenOneAndNine();
        this.setState({numberOfStars: newNumberOfStars,
                       correct: null,
                       selectedNumbers: [],
                       redrawCount: this.state.redrawCount - 1
                     }, function() {
                       this.updateGameStatus();
                     });
      }
    }
  });

React.render(<Game />, document.getElementById('app'));
})();
