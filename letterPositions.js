// function that returns all indices (zero-based positions) in the string where each character is found

const letterPositions = function(sentence) {
  const results = {};

  if (!sentence) {
    return results;
  }
  
  let i = 0;
  for (let char of sentence) {
    if (char !== ' ') {
      let formatChar = char.toLowerCase();
      if (results[formatChar]) {
        results[formatChar].push(i);
      } else {
        results[formatChar] = [i];
      }
    }
    i++;
  }
  return results;
};

module.exports = letterPositions;
