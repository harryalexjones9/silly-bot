var assert = require('assert');
var bot = require('../bot');

describe('Blocking offensive words from queries', function () {

  it('should block sentence about Brexit', function () {
    var query = "Brexit is going to be great!"
    assert.equal(bot.isPermitted(query), false)
  });

  it('should block sentence using shit', function () {
    var query = "I'm not getting paid enough for this shit!"
    assert.equal(bot.isPermitted(query), false)
  });

  it('should not block sentence about shitake mushrooms', function () {
    var query = "Shitake is my favorite musrhoom."
    assert.equal(bot.isPermitted(query), true)
  });

});