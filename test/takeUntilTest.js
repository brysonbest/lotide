const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

//Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); //true


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]); //true

const data3 = [];
assertArraysEqual(takeUntil(data3, x => x === 'yes'), []); //true

const data4 = ['work', 5, 'hello', 11];
assertArraysEqual(takeUntil(data4, x => x === 'work'), []); //true
assertArraysEqual(takeUntil(data4, x => x === 11), ['work', 5, 'hello']); //true