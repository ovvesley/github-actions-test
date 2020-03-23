const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});


test('adds 3 + 6 to equal 9', () => {
  expect(sum(3, 6)).toBe(9);
});