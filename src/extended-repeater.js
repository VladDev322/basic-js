const { resume } = require('browser-sync');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {
  throw new NotImplementedError('Not implemented');
  // let result = ''
  // if (options.separator === undefined) {
  //   for (let i = 0; i < options.repeatTimes; i++) {
  //     result += str
  //     if (i != options.repeatTimes - 1) result += '+'
  //   }
  // }
  // else if (options.addition === undefined) {
  //   for (let i = 0; i < options.repeatTimes; i++) {
  //     result += str
  //     if (i != options.repeatTimes - 1) result += options.separator
  //   }
  // }
  // else if (options.addition === undefined) {
  //   for (let i = 0; i < options.repeatTimes; i++) {
  //     result += str
  //     if (i != options.repeatTimes - 1) result += options.separator
  //   }
  // }
  // else if (options.additionSeparator === undefined) {
  //   for (let i = 0; i < options.repeatTimes; i++) {
  //     result += str
  //     for (let i = 0; i < options.additionRepeatTimes; i++) {
  //       result += options.addition
  //     }
  //     if (i != options.repeatTimes - 1) result += options.separator
  //   }
  // }
  // return result
}

module.exports = {
  repeater
};
