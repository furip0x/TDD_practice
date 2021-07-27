const analyze = require('../code/arrayAnalysis');

test('Array Analyze - 1', () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Array Analyze - 1', () => {
  expect(analyze([10,2,7,9])).toEqual({
    average: 7,
    min: 2,
    max: 10,
    length: 4,
  });
});

test('Array Analyze - 1', () => {
  expect(analyze([1,1,1,1,1,1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 6,
  });
});

test('Array Analyze - 1', () => {
  expect(analyze([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});