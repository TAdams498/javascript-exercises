const removeFromArray = function(inputArray, ...args) {
  let tempArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    let item = inputArray[i];
    let valid = true;
    for (let c = 0; c < args.length; c++) {
      if (item === args[c]) {
        valid = false;
      }
    }
    if (valid) {
      tempArray.push(inputArray[i])
    }
  }
  return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
