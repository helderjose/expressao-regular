import { oneSpace } from './one-space';

// nao consegui usar a mesma variavel, todos os testes ficavam com o valor atribuido por ultimo.
describe('Suite', () => {
  let paramToTest_1 = ' This is  Spartaaaaa ';
  let expected_1 = 'This is Spartaaaaa';

  test(`Given: '${paramToTest_1}', must be '${expected_1}'`, () => {
    expect(oneSpace(paramToTest_1)).toBe(expected_1);
  });

  let paramToTest_2 = '  I  am  Batman  ';
  let expected_2 = 'I am Batman';

  test(`Given: '${paramToTest_2}', must be '${expected_2}'`, () => {
    expect(oneSpace(paramToTest_2)).toBe(expected_2);
  });

  let paramToTest_3 = '   I   will     be      back   ';
  let expected_3 = 'I will be back';

  test(`Given: '${paramToTest_3}', must be '${expected_3}'`, () => {
    expect(oneSpace(paramToTest_3)).toBe(expected_3);
  });
});
