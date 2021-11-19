//Function that takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
const countLetters = function(originalString) {
  let stringCount = {};
  if (!originalString) {
    return stringCount;
  }
  for (let char of originalString) {
    if (char !== ' ') {
      let formatChar = char.toLowerCase();
      if (stringCount[formatChar]) {
        stringCount[formatChar] += 1;
      } else {
        stringCount[formatChar] = 1;
      }
    }
  }
  return stringCount;
};

module.exports = countLetters;