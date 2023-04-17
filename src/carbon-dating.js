const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') return false;
  if (isNaN(parseInt(sampleActivity))) return false;
  if (parseInt(sampleActivity) <= 0 || parseInt(sampleActivity) >= 15) return false
  return Math.ceil((Math.log(MODERN_ACTIVITY/(sampleActivity))*HALF_LIFE_PERIOD)/Math.log(2));
}
// (ln(MODERN_ACTIVITY/A)*HALF_LIFE_PERIOD)/ln(2)
console.log(dateSample('3.142')) //12926
console.log(dateSample('3')) //13308
console.log(dateSample('15'))


module.exports = {
  dateSample
};
