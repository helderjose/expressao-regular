import { countWords } from './count-words';

describe('Suite', () => {

  test('Given: This is Sparta., must be 3', () => {
    expect(countWords('This is Sparta.')).toBe(3);
  });

  test('Given: The quick brown fox jumps over the lazy dog., must be 9', () => {
    expect(countWords('The quick brown fox jumps over the lazy dog.')).toBe(9);
  });
});
