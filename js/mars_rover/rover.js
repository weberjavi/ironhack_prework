var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBackward(rover) {
  switch (rover.direction) {
    case "N" : 
      rover.position[1]--
      break;
    case "E" :
      rover.position[0]--
    break;
    case "S":
      rover.position[1]++
    break;
    case "W" :
      rover.position[0]++
    break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
function turnRight(rover){
  switch (rover.direction) {
    case "N" :
      rover.direction = "E"
    break;
    case "E" :
      rover.direction = "S"
    break;
    case "S":
      rover.direction = "O"
    break;
    case "W":
      rover.direction = "N"
    break;
  };
  console.log(rover.direction);
}

function turnLeft(rover) {
  switch (rover.direction) {
    case "N" :
      rover.direction = "W"
    break;
    case "E" :
      rover.direction = "N"
    break;
    case "S":
      rover.direction = "E"
    break;
    case "W":
      rover.direction = "S"
    break;
  };
  console.log(rover.direction);
}


goForward(myRover);
goForward(myRover);
goForward(myRover);
goBackward(myRover);
turnRight(myRover);
turnRight(myRover);
turnLeft(myRover);

/*En este array guardamos el damero que sireve como espacio para los movimientos del rover*/
/*var damero = [];
for(var x = 0; x < 10; x++){
    damero[x] = [];    
    for(var y = 0; y < 10; y++){ 
        damero[x][y] = x + "," + y  ;    
    }    
}



damero[2][1] = "stone";
console.log(damero[1][1]);




function crash(damero){
  if (damero == "stone" ) {
    console.log("watch out you hit a " + damero)
  } else{
    console.log("you are in position " + damero)
  }
}
crash(damero[2][1]);
crash(damero[1][1]);




function position(damero){
  var positionN = [];
  var arrayString = damero.split(",");
  for (var i = 0 ; i < arrayString.length; i++){
    arrayString[i] = Number(arrayString[i]);
    positionN.push(arrayString[i]);
  }
  myRover.position = positionN ;
}
position(damero[1][1]);
console.log(myRover.position);



var string = "ffflffrrb";

var actions = string.toLowerCase().split("");

for(var i = 0, l = actions.length; i < l; i++){
  var fName = actions[i];
  return function fName()
}

function f(){
  console.log("funcion f")
}
function l(){
  console.log("funcion l")
}
function r(){
  console.log("funcion r")
}

function b(){
  console.log("funcion b")
}*/

