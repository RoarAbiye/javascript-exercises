const fibonacci = function (num) {
  if (num < 0) return "OOPS";

  fibList = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibList[i] = fibList[i - 1] + fibList[i - 2];
  }
  return fibList[num];
};
console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
