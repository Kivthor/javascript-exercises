const repeatString = function(string, num) {
  // определяем новую переменную, которую будет выводить функция 
  let newString = '';
  // если требуемое число повторений строки меньше нуля то функция возвратит "ERROR"
  if (num < 0) {
    newString = 'ERROR';
    return newString;
  }

  for (let i = 0; i < num; i++) {
    newString = string; // => newString = 'hey'
    string += string.slice(0, 3); // => string = 'hey' + 'hey; => 'heyhey'
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
