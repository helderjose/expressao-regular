// https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-1.php

export const trimRegex = (sentence) => {
  if(typeof sentence === 'string') {
    sentence = sentence.replace(/^\s+|\s+$/g, '')
  }

  return sentence;
}