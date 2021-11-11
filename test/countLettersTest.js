const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it(`returns 1 for number of letter R in "Red Buns"`, () => {
    assert.strictEqual(countLetters("Red Buns").R, 1);
  });
  it(`returns 4 for number of letter P in "Purple People"`, () => {
    assert.strictEqual(countLetters("Purple People").P, 4);
  });
  it("returns an object with keyed values for a String", () => {
    assert.include(countLetters("Tomatoes are great"),{ T: 3, O: 2, M: 1, A: 3, E: 3, S: 1, R: 2, G: 1 });
  });
  it("returns an empty object for undefined", () => {
    assert.include(countLetters, {});
  });
  it("returns an empty object for a blank string", () => {
    assert.include(countLetters(""), {});
  });
  it("returns an empty object for a string of spaces", () => {
    assert.include(countLetters("    "), {});
  });
});