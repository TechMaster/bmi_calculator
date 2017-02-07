/**
 * Created by techmaster on 2/7/17.
 */
const bmi = require('./bmi/bmi');

const readlineSync = require('readline-sync');
const log = console.log;



/***
 * Convert string to double
 * @param input_string
 */
const convert_to_double = (input_string) => {
  return parseFloat(input_string);
};


/***
 * if input === 'q' then quit
 * @param message
 * @param validate_func
 */
const readInput = (message, validate_func) => {

    let answer = readlineSync.question(message);
    if (answer === 'q') {
      throw new Error('quit');
    }
    return validate_func(answer);

};


const loop_read_calculate_bmi = () => {
  let weight, height;
  try {
    weight = readInput('Weight pound: ', convert_to_double);
    height = readInput('Height inch: ', convert_to_double);
  } catch (err) {
    return;
  }

  try {
    log('BMI analysis is ', bmi.bmi_analysis(bmi.bmi(weight, height)));
  } catch (err) {
    log('Error: ', err.message);
  }

  loop_read_calculate_bmi();
};

console.log("Enter 'q' to quit");
loop_read_calculate_bmi();