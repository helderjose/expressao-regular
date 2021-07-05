import { countVowels } from './number-of-vowels';

// nao consegui usar a mesma variavel, todos os testes ficavam com o valor atribuido por ultimo.
describe('Suite', () => {
  let paramToTest_1 = 'This is Sparta ';
  let expected_1 = 4;

  test(`Given: '${paramToTest_1}', must be '${expected_1}'`, () => {
    expect(countVowels(paramToTest_1)).toBe(expected_1);
  });

  let paramToTest_2 = 'Say hello to my little friend';
  let expected_2 = 8;

  test(`Given: '${paramToTest_2}', must be '${expected_2}'`, () => {
    expect(countVowels(paramToTest_2)).toBe(expected_2);
  });

  let paramToTest_3 = null;
  let expected_3 = 0;

  test(`Given: '${paramToTest_3}', must be '${expected_3}'`, () => {
    expect(countVowels(paramToTest_3)).toBe(expected_3);
  });

  let paramToTest_4 = 'bcdf';
  let expected_4 = 0;

  test(`Given: '${paramToTest_4}', must be '${expected_4}'`, () => {
    expect(countVowels(paramToTest_4)).toBe(expected_4);
  });
});