import { trimRegex } from './trim-regex';

describe('Suite', () => {

  test('Given: null, return null', () => {
    expect(trimRegex(null)).toBeNull();
  });

  test('Given: \'  abc  \', return \'abc\'', () => {
    expect(trimRegex('  abc  ')).toEqual('abc');
  });

  test('Given: \'  123  \', return \'123\'', () => {
    expect(trimRegex('  123  ')).toEqual('123');
  });

  test('Given: 123, return 123', () => {
    expect(trimRegex(123)).toEqual(123);
  });

  test('Given: \'abc\', return \'abc\'', () => {
    expect(trimRegex('  abc  ')).toEqual('abc');
  });
});
