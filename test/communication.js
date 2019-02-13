var assert = require('assert');
var bot = require('../bot');

describe('Basic communication with the bot', function () {
  // Here, we use a testing library called Mocha (https://mochajs.org), which lets
  // us specify how certain functions from our code should behave. In this file,
  // we define several tests for our 'answerQuery' function.

  it('should respond to comment about rain', function () {
    // The bot should always give the answer below when query contains 'rain'
    var query = "I hope it stops raining soon!"
    var response = bot.answerQuery(query)
    assert.equal(response, "I do not care too much about weather, I'm locked inside a data center.")
  });

  it('should respond to comment about tea', function () {
    // The bot should always give the answer below when query contains 'tea'
    var query = "Teatime! See you later."
    var response = bot.answerQuery(query)
    assert.equal(response, "I would love some tea, but they have not created one for silicon-based life forms yet.")
  });

});