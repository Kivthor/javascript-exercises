const repeatString = function(string, num) {
  if (num < 0) {
   return 'ERROR';
  }

  const inputStringLength = string.length;
  let newString = '';

  for (let i = 0; i < num; i++) {
    newString = string; // => newString = 'hey'
    string += string.slice(0, inputStringLength); // => string = 'hey' + 'hey; => 'heyhey'
    console.log(`input string length = ${inputStringLength}`);
  }
  console.log('---------END OF THE LOOP--------');
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
