const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // если год делится на 4, 100 и 400, значит год Високосный
      } else return false; // если год делится на 4 и 100, но НЕ делится на 400, то год НЕ Високосный
    } else return true; // если год делится на 4, но НЕ делится на 100, то год Високосный
  } else return false; // если год НЕ делится на 4, то год НЕ Високосный
};

// Do not edit below this line
module.exports = leapYears;
