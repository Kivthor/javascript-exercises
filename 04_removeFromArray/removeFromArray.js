const removeFromArray = function(array, ...theArgs) {
  return newArray = array.filter((elements) => !theArgs.includes(elements));
};

// Do not edit below this line
module.exports = removeFromArray;
