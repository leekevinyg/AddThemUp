jest.dontMock('../src/components/TwoSumSolver.js');

describe('TwoSumSolverTest', function()
{
 var TwoSumSolver = require('../src/components/TwoSumSolver.js');

 it('an empty list should return false', function() {
    expect(TwoSumSolver([], 3)).toBe(false);
 });

 it('a single element list that equals the target sum should return true', function()
 {
    expect(TwoSumSolver([3], 3)).toBe(true);
 });

 it('a single element list that does not equal the target sum should return false', function() {
    expect(TwoSumSolver([1], 3)).toBe(false);
 });

 it('Odd numbered list, sum is at beginning of list', function() {
    expect(TwoSumSolver([1,2,3], 3)).toBe(true);
 });

 it('Odd numbered list, sum is at end of list', function() {
    expect(TwoSumSolver([1,2,3], 5)).toBe(true);
 });

 it('Odd numbered list, array contains duplicates', function() {
    expect(TwoSumSolver([1,1,5], 2)).toBe(true);
 });

 it('Odd numbered list, sum uses all numbers', function() {
    expect(TwoSumSolver([1,1,1], 3)).toBe(true);
 });

});
