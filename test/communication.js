var assert = require('assert');
var bot = require('../bot');

describe('Basic communication with the bot', function () {

  it('should respond to comment about rain', function () {
    var query = "I hope it stops raining soon!"
    var response = bot.answerQuery(query)
    assert.equal(response, "I do not care too much about weather, I'm locked inside a data center.")
  });

  it('should respond to comment about tea', function () {
    var query = "Teatime! See you later."
    var response = bot.answerQuery(query)
    assert.equal(response, "I would love some tea, but they have not created one for silicon-based life forms yet.")
  });

});