const palindromes = function (string) {
  let notAllowed = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "~", "`", "[", "{", "]", "}", "\\", "|", ";", ":", "\"", "'", "<", ",", ">", ".", "/", "?"];
  const stringArray = Array.from(string.toLowerCase());
  const filteredArray = stringArray.filter(character => !notAllowed.includes(character));

  //iterate through arrays, one in reverse and check if match
  let newString1 = filteredArray.reduce((a, b) => a + b, "");
  filteredArrayR = filteredArray.reverse();
  let newString2 = filteredArrayR.reduce((a, b) => a + b, "");

  if (newString1 === newString2) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
