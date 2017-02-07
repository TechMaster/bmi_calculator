/**
 * Created by techmaster on 2/7/17.
 */

const pound_to_kg = 0.45359237;
const inch_to_meter = 0.0254;
exports.pound_to_kg = pound_to_kg;
exports.inch_to_meter = inch_to_meter;


/***
 * Calculate BMI Index. See page 90 of Book "Java Programming" by Daniel Lang
 * @param {Number} weight measured in pound
 * @param {Number} height measured in inch
 * @returns {Number} bmi index
 */
exports.bmi = (weight, height) => {
  const weight_kg = weight * pound_to_kg;
  const height_m = height * inch_to_meter;

  if (weight_kg < 20 || weight_kg > 300) {
    throw new Error(`Input weight is invalid ${weight_kg} kg`);
  }

  if (height_m < 1 || height_m > 2.6) {
    throw new Error(`Input height is invalid ${height_m} meter` );

  }

  return weight_kg / (height_m * height_m);
};


/***
 *
 * @param {Number} bmi_index BMI index returned from function bmi(weight, height)
 * @returns {Number} text analysis per range of BMI index
 */
exports.bmi_analysis = (bmi_index) => {
  if (bmi_index < 18.5) {
    return 'Underweight';
  } else if (bmi_index < 25) {
    return 'Normal';
  } else if (bmi_index < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
};

