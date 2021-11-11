const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

//Test Code

const bestTVShowsByGenre = {
  reality: "The Real Housewives of Beverly Hills",
  comedy: "The Good Place",
  drama:  "How to Get Away With Murder"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Good Place"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Sailor Moon"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Real Housewives of Beverly Hills"), "reality");