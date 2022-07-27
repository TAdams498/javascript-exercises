const fibonacci = function(index) {
  let fibArr = [1, 1];
  if (index < 0) {
    return "OOPS";
  }
  if (fibArr[index]) {
    return fibArr[index - 1];
  }
  else {
    for (let i = 2; i < index; i++) {
      fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr[index - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
