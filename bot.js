var v = require('voca');

function answerQuery(query) {
  // We are using a library called 'voca' (see https://vocajs.com) which has
  // many useful functions for working with strings. The following first converts
  // 'query' to lover-case and then tests if the query contains various keywords
  // using 'v.includes'. You call all 'voca' functions by typing 'v.<some function>'/  
  query = v.lowerCase(query);
  if (v.includes(query, "rain") || v.includes(query, "sun") || v.includes(query, "weather"))
    return "I do not care too much about weather, I'm locked inside a data center.";
  return "Sorry Dave, I cannot do that."
}


function isPermitted(query) {
  // You will need to implement this function in the last part of the exercise 
  // (after you add 'filtering.js' tests); you can ignore it until then!
  return true;
}


function handleSayClick() {
  // We first get the 'message' that the user entered and 'conversation' element
  // which we are using for showing all the conversation history
  var message = document.getElementById('message').value.toLowerCase();
  var conversation = document.getElementById('conversation');
  
  // Check that the message does not contain any nasty words!
  if (!isPermitted(message)) {
    // If it does, just tell the user that we ignored their message
    conversation.innerHTML += "<p><strong>System:</strong> The message you entered is not allowed!</p>";
  } else {
    // Otherwise, get answer for the given query and show the query & answer
    var answer = answerQuery(message)
    conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
    conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
  }
}


// If we are running in a browser, add onclick handler 
// (if we are running tests, this will not do anything)
if (typeof document != "undefined") {
  document.getElementById("sayit").onclick = handleSayClick;
}

// Export the two functions that we need to access from test files!
module.exports = { 
  answerQuery: answerQuery, 
  isPermitted: isPermitted
}