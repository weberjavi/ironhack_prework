/*Creamos dos objetos; 
En uno de ellos guardaremos los datos del usuario
y en el otro guardamos los valores de las respuestas al cuestionario*/
var user = {};
var responses = [];
var rigthAnswers = [],
    wrongAnswers = [];

function question1() {
	"use strict";
  var name = prompt('What is your name?');
  user.name = name;
}

question1();

function question2() {
  "use strict";
//Creamos una variable donde guardaremos el valor de la respuesta en cada uno de los supuestos
  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')
// Convertimos a minúsculas la respuesta para evitar que el programa diferencie entre respuestas en minúsculas o mayúsculas
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// Si la respuesta no es ninguna de las opciones dadas el programa repetirá la pregunta
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

question2();

function question3() {
  "use strict";
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
    case "java":
    case "livescript":
    case "javalive":
    case "scriptyscript":
    if (js === "livescript"){
      js = true;
      responses.push(js);
    } else{
      responses.push(false);
    }
    
    break;
    
    default:
    alert("Sorry, but " + js + " is not a valid answer. How about trying again?!?");
    return question3();
  }
}

question3();

function question4(){
  "use strict";
//Creamos un array vacío para guardar las respuestas
  var answer = []; 

  var webL = prompt("Cuáles son los tres lenguajes más extendidos en el desarrollo web Front-end (CSS, Scala, Python, HTML, Java, JavaScript, C#, C++) \nSepare sus respuestas con una coma")
//Con el método .replace identificamos los espacios en blanco (a través de una RegExp) y los eliminamos
  webL = webL.toLowerCase().replace(/ /g, "").split(",");

  if (webL.length < 3 || webL.length > 3) {
    alert("Por favor lea detenidamente la pregunta, debe introducir tres lenguajes!!");
    return question4();
  };

  for ( var i = 0; i < webL.length ; i++) {
    var language = webL[i];
    if (language === "css" || language === "html" || language === "javascript"){
      answer.push(language);
    }
  };
  if(answer.length === 3){
    var result = true;
    responses.push(result)
  } else{
    var result = false;
    responses.push(result)
  }
}
question4();


function question5(){
  "use strict";

  var answer = [];
  var respuesta1,
      respuesta2;

  
  var html5 = prompt("¿Cuál es el número de la última versión del lenguaje HTML?");

  if (html5 === "5") {
    respuesta1 = true;
    answer.push(respuesta1);
  } 

  var cern = prompt("¿En que institución se encontraba trabajando Tim Berners-Lee cuando creo HTML?" )
  cern = cern.toLowerCase();
  if (cern === "cern"){
    respuesta2 = true;
    answer.push(respuesta2);
  } else{
    var oportunidad2 = prompt("Por ser la última pregunta del test te vamos a dar otra oportunidad \nBerners-Lee también creó el protocolo necesarío para comunicar navegadores y servidores, cómo se llama este preotocolo?")
    oportunidad2 = oportunidad2.toLowerCase();
    if (oportunidad2 === "http"){
      respuesta2 = true;
      answer.push(respuesta2);
    }
  }
  if(answer.length === 2){
    var result = true;
    responses.push(result)
  } else{
    var result = false;
    responses.push(result)
  }
}
question5();
function evaluate(responsesArray) {
  "use strict";

  for(var i = 0; i < responsesArray.length; i++){
    var answer = responsesArray[i];
    if (answer === true){
      rigthAnswers.push(answer);
    }else{
      wrongAnswers.push(answer);
    }
  }
}

function showResults() {

alert("Felicidades " + user.name + ". El resultado del cuestionario es el siguiente \nRespuestas correctas: " + rigthAnswers.length + "\nRespuestas incorrectas: " + wrongAnswers.length + ".")

}

evaluate(responses);
showResults();












