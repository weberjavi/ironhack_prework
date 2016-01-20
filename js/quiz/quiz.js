var user = {}
var responses = []

/*function question1() {
	"use strict";
  var name = prompt('What is your name?');
  user.name = name;
}
question1();

function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

question2();*/

function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
    case "java":
    case "livescript":
    case "javalive":
    case "scriptyscript":
    responses.push(js);
    break;
    
    default:
    alert("Sorry, but " + js + " is not a valid answer. How about trying again?!?");
    return question3();
  }
}
question3();

