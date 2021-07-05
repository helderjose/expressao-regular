// https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-1.php

export const uppercase = (sentence) => {
  let pattern = /^[A-Z]/;
  return pattern.test(sentence);
}