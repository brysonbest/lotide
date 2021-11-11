const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

//test codes


assertArraysEqual(letterPositions("Work it Out").t, [6, 10]); //true
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]); //true
assertArraysEqual(letterPositions(""), {}); //true