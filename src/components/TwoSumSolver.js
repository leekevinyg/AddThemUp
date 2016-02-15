"use strict";

var TwoSumSolver = function(arrayOfPossibleNumbers, targetSum)
{
    var lengthOfArray = arrayOfPossibleNumbers.length,
        indexOfFirstElement = 0;

    if (arrayOfPossibleNumbers.length === 1 &&
        arrayOfPossibleNumbers[indexOfFirstElement] === targetSum)
    {
       return true;
    }

    for (var i = 0; i <= lengthOfArray - 1; i++)
    {
      var currentNumber = arrayOfPossibleNumbers[i];

      for (var j = i + 1; j <= lengthOfArray; j++ )
      {
        if (currentNumber + arrayOfPossibleNumbers[j] === targetSum)
        {
          return true;
        }
      }
    }
    return false;
  };

module.exports = TwoSumSolver;

/*
    doesSumExist: function(targetSum, arrayOfPossibleNumbers) {
      // We iterate through the arrayOfPossibleNumbers and store key/value pairs where:
      // key = number, value = targetSums' complement of that number i.e., (targetSum - number)
      // Then, we simply do a hashtable lookup for each number and see if the complement is present
      // in the arrayOfPossibleNumbers. If it is, a possible sum exists and we return true.
      // [Testing] Edge caes:
      //  -one number solution
      //  -sorted list, unsorted list
      //  -list containing 1,2...up to length of list
      //  -list with zeros

      arrayOfPossibleNumbers = arrayOfPossibleNumbers.concat(0); // handle one number solution to game

      alert("in does sum exist");
      var hashTableOfNumberComplements = this.getNumberComplements(targetSum, arrayOfPossibleNumbers);

      for (var index = 0; index <= arrayOfPossibleNumbers.length - 1; index++) {
        var currentNumber = arrayOfPossibleNumbers[index];
        var complementOfCurrentNumber = hashTableOfNumberComplements[currentNumber];
        if (arrayOfPossibleNumbers.indexOf(complementOfCurrentNumber) > 0) {
          return true;
        }
      }
      return false;
    },

    getNumberComplements: function(targetSum, arrayOfPossibleNumbers) {
      alert("in get Number complements");
      var hashTableOfNumberComplements = {};

      for (var index = 0; index <= arrayOfPossibleNumbers.length - 1; index++) {
        var currentNumber = arrayOfPossibleNumbers[index],
            complement = targetSum - currentNumber;
        hashTableOfNumberComplements[currentNumber] = complement;
      }

      alert(hashTableOfNumberComplements);

      return hashTableOfNumberComplements;
    },
*/
