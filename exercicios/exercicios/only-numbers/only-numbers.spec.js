import { onlyNumbers } from './only-numbers';

describe('Only Numbers', () => {

  test('Given null, must be false', () => {
    expect(onlyNumbers(null)).toBeFalsy();
  });

  test('Given abc, must be false', () => {
    expect(onlyNumbers('abc')).toBeFalsy();
  });

  test('Given ABC, must be false', () => {
    expect(onlyNumbers('ABC')).toBeFalsy();
  });

  test('Given 123abc456, must be false', () => {
    expect(onlyNumbers('123abc456')).toBeFalsy();
  });

  test('Given abc123def, must be false', () => {
    expect(onlyNumbers('abc123def')).toBeFalsy();
  });

  test('Given \'123\', must be true', () => {
    expect(onlyNumbers('123')).toBeTruthy();
  });

  test('Given 123, must be true', () => {
    expect(onlyNumbers(123)).toBeTruthy();
  });

  test('Given 3, must be true', () => {
    expect(onlyNumbers(3)).toBeTruthy();
  });

});
