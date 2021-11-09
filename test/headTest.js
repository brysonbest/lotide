const head = require('../head');
const assertEqual = require('../assertEqual');

// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Tomato", "Potato", "Lasagna"]), "Lasagna");
assertEqual(head([5,6,7]), 6);
assertEqual(head([]), 3);
assertEqual(head([3]), 3);