const removeFromArray = function(array, ...theArgs) {
  
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < theArgs.length; k++) {
      if (array[i] === theArgs[k]) {
        array.splice(array.indexOf(array[i]), 1);
        i--;
        break;
      }
    }
  }

  return array;

  // return newArray = array.filter((elements) => !theArgs.includes(elements));
};

// Do not edit below this line
module.exports = removeFromArray;
