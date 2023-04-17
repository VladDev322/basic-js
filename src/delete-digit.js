const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let ar = String(n);
  let result = parseInt(ar.replace(ar[0], '')); 
  let test
  for (let i = 1; i < ar.length; i++) {
    test = parseInt(ar.replace(ar[i], ''))
    if (test > result) result = test
  }
  return result
}


module.exports = {
  deleteDigit
};
