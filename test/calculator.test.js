const calculator = require('../code/calculator');

test('add test - 1', () => {
  expect(calculator.add(0,0)).toBe(0);
});

test('add test - 2', () => {
  expect(calculator.add(1,1)).toBe(2);
});

test('substract test - 1', () => {
  expect(calculator.substract(1,1)).toBe(0);
});

test('substract test - 2', () => {
  expect(calculator.substract(10,5)).toBe(5);
});

test('divide test - 1', () => {
  expect(calculator.divide(1,1)).toBe(1);
});

test('divide test - 2', () => {
  expect(calculator.divide(10,5)).toBe(2);
});

test('multipy test - 1', () => {
  expect(calculator.multipy(1,2)).toBe(2);
});

test('multipy test - 2', () => {
  expect(calculator.multipy(10,5)).toBe(50);
});
