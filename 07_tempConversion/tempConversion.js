const ftoc = function(temp) {
  let newTemp = ((temp-32) * 0.5556);
  let withDec = Math.round(newTemp * 10) / 10
  return withDec;
};

const ctof = function(temp) {

  let newTemp = ((temp * 1.8) +32);
  let withDec = Math.round(newTemp * 10) / 10
  return withDec;
};

console.log(ftoc(100));
console.log(ctof(-10));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
