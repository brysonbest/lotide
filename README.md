# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brysonbest/lotide`

**Require it:**

`const _ = require('@brysonbest/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Function that compares two input arrays and prints a message indicating whether or not they match.
* `assertEqual(value1, value2)`: Function that compares two values and prints a message indicating whether or not they match.
* `assertObjectsEqual(object1, object2)`: Function that compares two objects and prints a message regarding whether or not they match.
* `countLetters(string)`: Function that takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `countOnly(itemArray, itemToCount)`: Function that takes in an array of items, and returns how many instances of each item were found in that array.
* `eqArrays(array1, array2)`: Function that checks for matching of two arrays.
* `eqObjects(object1, object2)`: Function that checks for matching of two objects.
* `findKey(object, callback)`: Function that takes in an object and a callback function. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(object, value)`: Function that takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, it returns undefined.
* `flatten(array)`: Function that flattens a given array by one level, and returns it as a new array.
* `head(array)`: Function that returns the first item in an array.
* `letterPositions(string)`: Function that returns all indices (zero-based positions) in a string where each character is found.
* `map(array, callback)`: Function that takes in an array and a callback function, and returns a new array based on the results of the callback function.
* `middle(array)`: Function that takes in an array and returns the middle-most element(s) of the array.
* `tail(array)`: Function that returns the all items from an array as a new array, excluding the first item in the original array.
* `takeUntil(array, callback)`: Function that keeps collecting items from a provided array until the callback function provided returns a truthy value.
* `without(array, values)`: Function that returns a subset of a given array, removing unwanted values.