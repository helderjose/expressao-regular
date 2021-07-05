export const countVowels = (sentence) => {
  let pattern = /[aeiou]/gi;

  try {
    return sentence.match(pattern).length
  } catch (e) {
    return 0;
  }
}
