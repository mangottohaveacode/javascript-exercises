const add = function(number1,number2) {
	return number1+number2;
};

const subtract = function(number1,number2) {
	return number1-number2;
};

const sum = function(array) {
	let sum = 0;
  for(let i=0; i<array.length;i++){
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) { //5,3,4
  if(array.length === 0) 
    return 0;

  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
  }
  
  return product;
};


console.log(multiply([2,8,3]));

const power = function(base,exponent) {
  //expect(calculator.power(4,4)).toBe(256); // 4 to 4 power is 256
  let result = 1;
	for(let i=0; i<exponent;i++){
    result = result * base;
  }
  return result;
};

const factorial = function(number) {
  let result = 1;
	for(let i=1; i<=number;i++){
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
