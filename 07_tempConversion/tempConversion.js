const ftoc = function(fTemp) {
  temp = (fTemp - 32) * (5/9);
  cTemp = Math.round(temp * 10) / 10;
  return cTemp;
};

const ctof = function(cTemp) {
  temp = (cTemp * (9/5)) + 32;
  fTemp = Math.round(temp * 10) / 10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
