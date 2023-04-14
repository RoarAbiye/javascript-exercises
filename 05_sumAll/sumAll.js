const sumAll = function(numberList) {
  let result = 0;

  for (let i = 0; i < numberList.length; i++) {
    result += numberList[i];
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
