const sumAll = function(num1, num2) {
  if (num2 < num1) {
    let temp1 = num1;
    let temp2 = num2;
    num2 = temp1;
    num1 = temp2;
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if ((typeof num1 != "number") || (typeof num2 != "number")) {
    return "ERROR";
  }
  let total = 0;
  for (let i = num1; i < num2+1; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
