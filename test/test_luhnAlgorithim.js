var assert = require("chai").assert;
var check = require("../luhnAlgorithm.js");

describe("Luhn Alg", function() {
  it("should return true if the number passes the algorithm", function() {
    var number = 79927398713;
    var result = check(number);
    assert.isTrue(result);
  });

  it("should return false if the number fails the algorithm", function() {
    var number = 79927398714;
    var result = check(number);
    assert.isFalse(result);
  });

});