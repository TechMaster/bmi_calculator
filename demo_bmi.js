/**
 * Created by techmaster on 2/7/17.
 */
const bmi = require('./bmi/bmi');

try {
  let bmi_index = bmi.bmi(100, 100);
  console.log('bmi_index = ', bmi_index);
} catch (error) {
  console.log(error.message);
}