"use strict";

/* the following function determines if any two numbers in the
arrayOfPossibleNumbers can sum to the targetSum. We do this by
keeping track of the targetSum complement of each number in the
array as we encounter them. If we encounter a number in the array
again that is the value of a previously stored target sum complement
then we have found a possible sum! */
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

module.exports = TwoSumSolver;
