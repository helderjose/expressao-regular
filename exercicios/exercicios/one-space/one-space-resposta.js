export const oneSpace = (sentence) => {
  //exclude  start and end white-space
  sentence = sentence.replace(/(^\s*)|(\s*$)/gi,"");

  //convert 2 or more spaces to 1
  sentence = sentence.replace(/[ ]{2,}/gi,' ');

  return sentence;
}