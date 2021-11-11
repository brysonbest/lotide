const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');


const places = ["Mexico", "Madrid", "New York"];

assertArraysEqual(map(places, word => word[0]), ["M", "M", "N"]); //true

const things = ["Potatoes", "Tables", "Pens"];

assertArraysEqual(map(things, word => word.length), [8, 6, 4]); //true

const numbers = [5, 10, 15, 20];

assertArraysEqual(map(numbers, number => number * 10), [50, 100, 150, 200]); //true
