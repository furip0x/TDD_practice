const reverseString = require('../code/reverseString');

test('reverse string 1', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverse string 3', () => {
  expect(reverseString("you can't reverse me")).toBe("em esrever t'nac uoy");
});

test('reverse string 2', () => {
  expect(reverseString("abcd* 1234-")).toBe("-4321 *dcba");
});