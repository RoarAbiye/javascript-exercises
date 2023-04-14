const add = function(num1, num2) {
  return num1+num2
}

const subtract = function(num1, num2) {
  return num1-num2
};

const sum = function(...number_list) {
  return number_list[0].reduce((sum, ele) => {
    return sum + ele;
  },0)
};

const multiply = function(...number_list) {
  return number_list[0].reduce((sum, ele) => {
    return sum * ele;
  })
};

const power = function(num1, num2) {
  return Math.pow(num1,num2)
};

const factorial = function(num) {
  if (num ===0) {
    return 1;
  }

  else {
    return factorial(num-1) * num;
  }
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
