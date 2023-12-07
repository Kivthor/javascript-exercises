const convertToCelsius = function(temp) {
  let convTemp = (temp - 32) * (5 / 9);
  console.log(convTemp);
  convTemp = Math.round(convTemp * 10) / 10;
  console.log(convTemp);
  return convTemp;

};

const convertToFahrenheit = function(temp2) {
  return Math.round((temp2 * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
