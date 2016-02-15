"use strict";

/* the following function determines if any two numbers in the
arrayOfPossibleNumbers can sum to the targetSum. We do this by
storing the targetSum complement of each of the numbers in the
array as we encounter them. If we encounter a number in the array
again that is the value of a previously stored complement then
we have found a sum! */
var TwoSumSolver = function(arrayOfPossibleNumbers, targetSum) {

  var targetSumComplementHashTable = {},
      lengthOfArray = arrayOfPossibleNumbers.length,
      indexOfFirstElement = 0;

  if (arrayOfPossibleNumbers.length === 1 &&
      arrayOfPossibleNumbers[indexOfFirstElement] === targetSum) {
      return true;
    }

  for (var i = 0; i <= lengthOfArray; i++) {
    var targetSumComplement = targetSum - arrayOfPossibleNumbers[i];

    if (targetSumComplementHashTable[targetSumComplement]) {
      return true;
    } else {
      targetSumComplementHashTable[arrayOfPossibleNumbers[i]] = true;
    }
  }
  return false;
}

/*  Old version - less efficient - O(n^2)

    var lengthOfArray = arrayOfPossibleNumbers.length,
        indexOfFirstElement = 0;

    if (arrayOfPossibleNumbers.length === 1 &&
        arrayOfPossibleNumbers[indexOfFirstElement] === targetSum) {
       return true;
    }

    for (var i = 0; i <= lengthOfArray - 1; i++) {
      var currentNumber = arrayOfPossibleNumbers[i];

      for (var j = i + 1; j <= lengthOfArray; j++ ) {
        if (currentNumber + arrayOfPossibleNumbers[j] === targetSum) {
          return true;
        }
      }
    }
    return false;
  };

*/

module.exports = TwoSumSolver;
