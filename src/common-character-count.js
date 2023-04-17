const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(text1, text2) {
  let s1 = text1
  let s2 = text2
  let result = 0;
  for (letter of s1) {
    if (s2.includes(letter)) {
      result++;
      s2 = s2.replace(letter, '')
    }
  }
  return result
}

module.exports = {
  getCommonCharacterCount
};
