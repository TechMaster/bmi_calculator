/**
 * Created by techmaster on 2/7/17.
 */
const bmi = require('../bmi/bmi');

const chai = require('chai');
chai.should();



describe('Test BMI function', () => {

  it('it should throw when weight < 0', () => {
    (() => {
      bmi.bmi(-10, 100)
    }).should.throw('Input weight is invalid');
  });

  it('it should throw Input weight > 700', () => {
    (() => {
      bmi.bmi(700, 100)
    }).should.throw('Input weight is invalid');
  });

  it('it should throw Input height < 39', () => {
    (() => {
      bmi.bmi(200, 38)
    }).should.throw('Input height is invalid');
  });

});


describe('Test BMI analysis function', () => {
  it('it should return Normal', () => {
    bmi.bmi_analysis(24).should.equal('Normal');
  });

  it('it should return Overweight', () => {
    bmi.bmi_analysis(27).should.equal('Overweight');
  });

  it('it should return Underweight', () => {
    bmi.bmi_analysis(17).should.equal('Underweight');
  });

});