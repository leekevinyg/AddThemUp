jest.dontMock('../src/algorithms/TwoSumSolver.js');

describe('TwoSumSolverTest', function() {
 var TwoSumSolver = require('../src/algorithms/TwoSumSolver.js');

 it('an empty list should return false', function() {
    expect(TwoSumSolver([], 3)).toBe(false);
 });

 it('a single element list that equals the target sum should return true', function() {
    expect(TwoSumSolver([3], 3)).toBe(true);
 });

 it('a single element list that does not equal the target sum should return false', function() {
    expect(TwoSumSolver([1], 3)).toBe(false);
 });

 it('Odd numbered array, sum is at beginning of list', function() {
    expect(TwoSumSolver([1,2,3], 3)).toBe(true);
 });

 it('Odd numbered array, sum is at end of array', function() {
    expect(TwoSumSolver([1,2,3], 5)).toBe(true);
 });

 it('Odd numbered list, array contains duplicates', function() {
    expect(TwoSumSolver([1,1,5], 2)).toBe(true);
 });

 it('Odd numbered list, no sum', function() {
    expect(TwoSumSolver([1,1,5], 8)).toBe(false);
 });

 it('Even numbered list, array has sum', function() {
    expect(TwoSumSolver([1,4,5,6], 9)).toBe(true);
 });

 it('Even numbered list, array does not have sum', function() {
    expect(TwoSumSolver([1,4,5,6], 15)).toBe(false);
 });
 });
