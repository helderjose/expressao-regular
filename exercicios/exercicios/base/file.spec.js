import { uppercase } from './uppercase';

describe('Suite', () => {

  test('Given: abc, must be false', () => {
    expect(uppercase('abc')).toBeFalsy();
  });
});
