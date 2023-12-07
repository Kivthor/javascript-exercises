const sumAll = function (num1, num2) {
  // console.log(`numbers are = (${num1}, ${num2})`); // (1, 4);
  // console.log(typeof num1);

  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  }

  let newNumber = 0;

  if (num1 < num2) {
    while (num1 <= num2) {
      newNumber += num1;
      num1++;
    }
  } else {
    while (num2 <= num1) {
      newNumber += num2;
      num2++;
    }
  }
  return newNumber;
};

// Do not edit below this line
module.exports = sumAll;
