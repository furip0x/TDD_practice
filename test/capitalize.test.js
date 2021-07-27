const capitalize = require('../code/capitalize');

test('capitalize test 1', () => {
  expect(capitalize('capitalize Me')).toBe('Capitalize Me');
});

test('capitalize test 2', () => {
  expect(capitalize('hello')).toBe('Hello');
});