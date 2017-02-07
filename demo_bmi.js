/**
 * Created by techmaster on 2/7/17.
 */
const bmi = require('./bmi/bmi');

const readline = require('readline');
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/***
 *
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
  rl.question(message, (answer) => {
    if (answer === 'q') {
      return rl.close();
    }

    return validate_func(answer);
  });
};


const loop_read_calculate_bmi = () => {
  let weight = readInput('Weight pound: ', convert_to_double());
  let height = readInput('Height inch: ', convert_to_double());
  try {
    log('BMI analysis is ', bmi.bmi_analysis(bmi.bmi(weight, height)));
  } catch (err) {
    log(err);
  }

  loop_read_calculate_bmi();
};


loop_read_calculate_bmi();