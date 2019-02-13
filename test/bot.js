var assert = require('assert');
var bot = require('../bot');

describe('Basic communication with the bot', function () {
  it('should respond to comment about rain', function () {
    var query = "I hope it stops raining soon!"
    var response = bot.answerQuery(query)
    assert.equal(true, response.startsWith("I do not care too much about weather"))
  });
});