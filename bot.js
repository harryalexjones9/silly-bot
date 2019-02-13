var v = require('voca');

function isPermitted(query) {
  var words = v.words(v.lowerCase(query));
//  if (words.indexOf("brexit") != -1) return false;
  //if (words.indexOf("shit") != -1) return false;
  return true;
}

function answerQuery(query) {
  query = v.lowerCase(query);
  if (v.includes(query, "rain") || v.includes(query, "sun") || v.includes(query, "weather"))
    return "I do not care too much about weather, I'm locked inside a data center.";
  if (v.includes(query, "tea"))
    return "I would love some tea, but they have not created one for silicon-based life forms yet.";
  return "Sorry Dave, I cannot do that."
}

function handleSayClick() {
  var message = document.getElementById('message').value.toLowerCase();
  var conversation = document.getElementById('conversation');
  if (isPermitted(message)) {
    var answer = answerQuery(message)
    conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
    conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
  } else {
    conversation.innerHTML += "<p><strong>System:</strong> The message you entered is not allowed!</p>";
  }
}

if (typeof document != "undefined") {
  document.getElementById("sayit").onclick = handleSayClick;
}

module.exports = { 
  answerQuery: answerQuery, 
  isPermitted: isPermitted
}