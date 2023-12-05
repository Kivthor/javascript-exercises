const reverseString = function(string) {
  let newString = '';
  for (let i = 1; i <= string.length; i++) {
    newString += string.substr(-i, 1);
    // console.log(`${i} LOOP ITERATION --- newString = '${newString}'`);
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
