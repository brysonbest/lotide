const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it(`returns 1 for number of letter R in "Red Buns"`, () => {
    assert.strictEqual(countLetters("Red Buns").r, 1);
  });
  it(`returns 4 for number of letter P in "Purple People"`, () => {
    assert.strictEqual(countLetters("Purple People").p, 4);
  });
  it("returns an object with keyed values for a String", () => {
    assert.include(countLetters("Tomatoes are great"),{ t: 3, o: 2, m: 1, a: 3, e: 3, s: 1, r: 2, g: 1 });
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
  it(`returns 5 for number letter o in 'Lovemore Lovej Jokonya'`, () => {
    assert.strictEqual(countLetters('Lovemore Lovej Jokonya').o, 5, {});
  });
});