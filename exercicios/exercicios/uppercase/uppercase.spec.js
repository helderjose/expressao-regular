import { uppercase } from './uppercase';

describe('Suite', () => {

  test('Given: abc, must be false', () => {
    expect(uppercase('abc')).toBeFalsy();
  });

  test('Given: çbc, must be false', () => {
    expect(uppercase('abc')).toBeFalsy();
  });

  test('Given: Abc, must be true', () => {
    expect(uppercase('Abc')).toBeTruthy();
  });

  test('Given: Çbc, must be true', () => {
    expect(uppercase('Abc')).toBeTruthy();
  });
});
