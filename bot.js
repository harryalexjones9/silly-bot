var v = require('voca');

function answerQuery(query) {
  if (v.includes(query, "rain") || v.includes(query, "sun") || v.includes(query, "weather"))
    return "I do not care too much about weather, I'm locked inside a data center.";
  return "Sorry Dave, I cannot do that."
}


function handleSayClick() {
  var message = document.getElementById('message').value.toLowerCase();
  var conversation = document.getElementById('conversation');
  var answer = answerQuery(message)
  conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
  conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
}

if (typeof document != "undefined") {
  document.getElementById("sayit").onclick = handleSayClick;
}

module.exports = { answerQuery: answerQuery }