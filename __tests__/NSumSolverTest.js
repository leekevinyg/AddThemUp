jest.dontMock('../src/algorithms/NSumSolver.js');

describe('N-SumSolverTest', function() {
 var nSumSolver = require('../src/algorithms/nSumSolver.js');

 it('an empty list should return false', function() {
    expect(nSumSolver([], 3)).toBe(false);
 });

 it('a one element list that sums to target should return true', function() {
    expect(nSumSolver([3], 3)).toBe(false);
 });

 it('a one element list that does not sum to target should return false', function() {
    expect(nSumSolver([1], 3)).toBe(false);
 });

 it('a two element list that sums to target should return true', function() {
    expect(nSumSolver([1,2], 3)).toBe(true);
 });

 it('a two element list that does not sum to target should return false', function() {
    expect(nSumSolver([2,3], 3)).toBe(false);
 });

 it('an odd n element list that contains a subset that sums to target should return true', function() {
    expect(nSumSolver([1,8,10,20,1], 19)).toBe(true);
 });

 it('an odd n element list that contains no subset that sums to target should return false', function() {
    expect(nSumSolver([1,8,10,3], 0)).toBe(false);
 });

 it('an even n element list that contains a subset that sums to target should return true', function() {
    expect(nSumSolver([1,8,10,20], 19)).toBe(true);
 });

 it('an even n element list that contains a subset that sums to target should return true', function() {
    expect(nSumSolver([1,8,10,20,80,2], 19)).toBe(true);
 });

 it('an even n element list that contains no subset that sums to target should return false', function() {
    expect(nSumSolver([1,8,10,3], 0)).toBe(false);
 });

 });
