//Este objeto determina el nombre, posición inicial y dirección inicial del vehículo
var myRover = {
  position: [0,0],
  direction: 'N'
};
//Funciones que definen movimientos y direcciones partiendo de los parámetros del rover previos
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

  if (myRover.position[0] < 0){
    myRover.position[0] = 9;
  } else if (myRover.position[0] > 9){
    myRover.position[0] = 0;
  } else if (myRover.position[1] < 0){
    myRover.position[1] = 9;
  } else if (myRover.position[1] > 9){
    myRover.position[1] = 0;
  }
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

  if (myRover.position[0] < 0){
    myRover.position[0] = 9;
  } else if (myRover.position[0] > 9){
    myRover.position[0] = 0;
  } else if (myRover.position[1] < 0){
    myRover.position[1] = 9;
  } else if (myRover.position[1] > 9){
    myRover.position[1] = 0;
  }
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


//En este objeto guardamos las funciones de movimiento creadas previamente 
//Otorgamos una clave (key) que hace referencia a los comandos introducidos (en la variable string)
//El valor (value) es el nombre de la función que ejecutaremos 
//Para ejecutar las funciones debemos introducirle el parámetro (vehículo que queremos mover) en el for loop
var moveFunctions = {
  "f": goForward,
  "b": goBackward,
  "l": turnLeft,
  "r": turnRight
}

var objetos ={
  [0,3] : "stone",
  [7,3] : "stone",
  [1,3] : "stone"
}



//En este array guardamos el damero que sirve como espacio para los movimientos del rover
// var damero = [];
// for(var x = 0; x < 10; x++){
//     damero[x] = [];    
//     for(var y = 0; y < 10; y++){ 
//         damero[x][y] = x + "," + y  ;    
//     }    
// }

//Aquí determinamos los espacios del damero en los que habrá un objeto
// damero[1][0] = "stone";
// damero[0][1] = "stone";
// damero[0][9] = "stone";

//
var string = "ffflffrrbbbf";
var actions = string.toLowerCase().split("");
//Este loop identifica los valores dentro del array actions[] y ejecuta las funciones asociadas a esos valores guradados (como keys) en el objeto moveFunctions{}
for(var i = 0; i < actions.length; i++){
  var orden = actions[i];
  moveFunctions[orden](myRover);
}


// function crash(damero){
//   if (damero[myRover.position[0], myRover.position[1]] == "stone" ) {
//     console.log("watch out you hit a " + damero)
//   } else{
//     console.log("you are in position " + damero)
//   }
// }



