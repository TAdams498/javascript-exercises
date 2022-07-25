const reverseString = function(string) {
  let strArray = [];
  let reverseString = "";
  for (let i = 0; i < string.length; i++) {
    strArray.push(string.substring(i, i + 1));
  }
  temp = strArray.length;
  for (let i = 0; i < temp; i++) {
    reverseString += strArray.pop();
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
