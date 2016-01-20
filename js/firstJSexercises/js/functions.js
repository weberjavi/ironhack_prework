//EXERCISE 1
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"




/*
function dniLetter( dni ) {

	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	var invalid = "Invalid parameter";
	var remainder = dni % 23;
	var result = lockup.charAt(remainder);

	if (dni > 0){
		return result;
	}
	else if (dni < 0){
		return invalid;
	} 
	else if (dni !== typeof 1){
		return invalid;
	} 
    
}

console.log( dniLetter( 12345678 ) === 'Z');
console.log( dniLetter( 34667892 ) === 'S');
console.log( dniLetter( 92234488 ) === 'A');

*/


//EXERCISE 2
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Improve the exercise above to be able to perform this new functionality
// Of course it has to keep working as usual with right inputs.

/*

console.log( dniLetter( -1 ) === 'Invalid parameter');
console.log( dniLetter( "A1234567" ) === 'Invalid parameter');

*/


//EXERCISE 3
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Write a function that takes an array of words and returns the length of the longest one.

/*

function findLongestWord( array_words ){

	var wordToNumber =[];
	//Creamos un "for loop" que se repite tantas veces como elementos contenga el array utilizado como parámetro de la función
	for (i = 0; i < array_words.length; i++){
		//Convertimos en string cada uno de los elementos contenidos en el array (en cada iteración del loop se convierte el elemento actual)
		var words = array_words[i].toString();
		//Hayamos la longitud de cada una de las palabras contenidas en el array
		var length = words.length;
		//Poblamos el array previamente creado wordToNumber con el resultado del cálculo de la longitud de las palabras contenidas en el array empleado como parámetro de la función
		wordToNumber.push(length);	
	}
	//Ordenamos de mayor a menor el array de números a través del método .sort(), pasando como parámetro una función comparativa ("compareFunction")
	//Podemos encontrar una explicación al funcionamiento de la "compareFunction" aquí: http://www.w3schools.com/js/js_array_methods.asp
	var numberSorted = wordToNumber.sort(function(a, b){return b-a});
	//El elemento que "devuelve" la función será el primero del array numberSorted, es decir el número de letras de la palabra más larga del array utilizado como parámetro de la función
	return numberSorted[0];
}

console.log( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"] ) ===6 );
console.log( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) === 7 );
console.log( findLongestWord( ["Red", "Blue", "Green"] ) === 5 );

*/

//EXERCISE 4
//
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// You have to complete the calculateAverage function (it is a few lines below), and it has
// to return the average of every number in a array instead of the "Not implemented yet" message.

/*
var array_lengths = [];
array_lengths.push( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"]) );
array_lengths.push( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) );
array_lengths.push( findLongestWord( ["Red", "Blue", "Green"] ) );
array_lengths.push( findLongestWord( ["Iglesias", "Rivera", "Sánchez", "Rajoy", "Garzón"] ) );
array_lengths.push( findLongestWord( ["Esternocleidomastoideo", "Cuadriceps", "Biceps"] ) );
array_lengths.push( findLongestWord( ["A Coruña", "Lugo", "Ourense", "Pontevedra"] ) );
//<place to add more lines>, read next commented text and you will understand

console.log( "These are the longest lengths of each group: " + array_lengths );
console.log( calculateAverage( array_lengths ) === 6 && "The average of longest lengths is: " + calculateAverage( array_lengths ));

function calculateAverage( array )
{
	//Creamos una variable para guardar el valor de a suma de la longitud de las palabras despues de cada iteración
	var wordSum = 0;
	//Creamos un "for loop" que se repite tantas veces como elementos contenga el array utilizado como parámetro de la función
	for (i = 0; i < array.length; i++ ){
		//Actualizamos la variable wordSum añadiéndole el valor de cada nuevo elemento del array
		wordSum = wordSum + array[i];
	}
	//Calculamos la media (average) dividiendo la suma de todas las palabras entre el número de palabras
	var average = wordSum / array.length;
	return( average )
}
// Now add more lengths to the array_lengths. You have to do it where <place to add more lines> is written. 
// You can use this structure: array_lengths.push( findLongestWord( [<add some elements>] ) );
// Don't foget to add words to the array. The longer the better!
// Now reload the page and see how changed the average.

*/


//EXERCISE 5
//
// Restore the comments marks (/* */) of the previous exercises. Exercises 4 and 5 have to be commented
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// As a condition you must use the object freqCounter.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


/*
function charFreq( string ) {
    //En esta variable guardo el array creado a partir del string usado como parámetro de la función
	var stringArray = string.split("");
	var freqCounter = {};
    //Este loop iteraciona sobre los valores del array recién creado
	for(i = 0; i < stringArray.length; i++){
	    //En cada iteración se crea una "key" que toma como nombre el valor de los elementos del array 
	    //(es decir las letras de la string inicial) 
	    var key = stringArray[i];
		
		if(key in freqCounter){
		    freqCounter[key] = freqCounter[key] + 1;
		}else{
		    freqCounter[key] = 1;
		}
		
	}
	return freqCounter;
}

counter = charFreq("abbabcbdbabdbdbabababcbcbab");
console.log( counter['a'] === 7);
console.log( counter.b === 14);
console.log( counter['c'] === 3);

counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( counter.x === 7 );
console.log( counter['y'] === 10 );
console.log( counter.z === 3 );
console.log( counter['a'] === 1 );
console.log( counter['s'] === 1 );
console.log( counter.d === 1 );
console.log( counter['f'] === 1 );


*/

//BONUS EXERCISE
//
// Restore the comments marks (/* */) of the previous exercise
// Uncomment the exercise code deleting /* and */ chars
// Build a program that transform a boring array into an awesome array.
// The original array has to go through many processes, we divided every process
// in functions. You have to code these functions.
// Here you have some useful functions you can use wherever you need along the program.
// isFinite(), splice(), unshift(), push(), join(), sort(), Math.floor().
// These aren't all the needed functions, and also you can use different ones. They are only suggested functions.
// If you want to know what do they do or learn more functions, you can go to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// http://www.w3schools.com/js/default.asp
// Use the search option in both of them to find a function.



function arrayAwesomenator( array ) 
{
	array = deleteRubbish( array );
	array = arrangeElements( array );
	array = beautifyLetters( array );
	array = beautifyNumbers( array );
	array = sortArray( array );
	array = arrayToString( array );

	return array;
}
function deleteRubbish( array )
{
	//It receives an array and returns it without '*' chars
	//Example:  deleteRubbish(['a',1,'*',5]) returns ['a',1,5]
	
	for(i = 0; i < array.length; i++){  //El loop iteraciona sobre todos los elementos del array

		if(array[i] === "*"){  //En cuanto detecta que el valor de un elemento del array es igual a "*"
			array.splice(i, 1);  //Los parámetros del método: splice(<index del primer elemento a eliminar> , <número de elementos a eliminar>)
		}
	}
	return array;
}

function arrangeElements( array )
{
	//It receives an array with numbers and letters mixed and returns it with its items arrange:
	//First goes the numbers and then the letters. The order of the elements together does not matter.
	//Example: arrangeElements(['B', 'a', 4 , 23, 'J']) returns [23, 4, 'B', 'a', 'J']
 	array.sort();
	return array;

}

function beautifyLetters( array )
{
	//It receives an array with numbers and letters and returns it with uppercase vowels and lowercase consonants. Numbers remain unchanged
	//Example: beautifyLetters([1,5,7,'a','J',"p",'E']) returns [1,5,7,'A','j',p,'E']

	var newArray = [];//Creamos un nuevo array en el que se guardaran los nuevos elementos generados en el loop
	
	for(i = 0; i < array.length; i++){//El loop iteraciona sobre todos los elementos del array usado como parámetro de la función
	    
	    var value = array[i];
	    
	    if(value === "a" || value === "A" || value === "e" || value === "E" ||  value === "i" || value === "I" || value === "o" || value === "O" || value === "u" || value === "U" ){
	        value = value.toUpperCase();
	        newArray.push(value);
	        
	    }else if (typeof value == "string"){
	        value = value.toLowerCase();
	        newArray.push(value);
	    }else{
	        newArray.push(value);
	    }
	}
	array = newArray;
	return array;
}

function beautifyNumbers( array )
{
	//It receives an array with numbers and letters and returns it with its numbers beautified. Letters remain unchanged
	//Beautify process is to reduce a number into a single digit number by adding all its digits together: 
	// 123 = 6 because 1+2+3 = 6
	// 9 = 9
	// 9956 = 2 because 9+9+5+6 = 29 -> 2+9 = 11 -> 1+1 = 2
	// 793 = 1 because 7+9+3 = 19 -> 1+9 = 10 -> 1+0 = 1
	//Example: beautifyNumbers([23,59, 4,'A','b']) returns [5, 5, 4, 'A', 'b']
	var newArray = []; //Creamos un array vacio donde se guardarán los nuevos elementos que se vayan creando
	for(i = 0; i < array.length; i++){
	    value = array[i];
	    if(typeof value == "string"){ //Si el valor es del tipo "string" se añade directamente al array
	        newArray.push(value);
	    }else if(typeof value == "number"){
	        if(value < 10){ //Si el valor es un número menor de diez también se añade directamente al array
	            newArray.push(value);
	        }else{
	            value = value.toString(); // El número se convierte en una "string"
	            stringArray = value.split(""); // De esta manera se puede dividir en "substrings" guardadas en un array
	            var numberArray = [];
	            for(n = 0; n < stringArray.length; n++){ //En este loop cambiamos el tipo de dato de los elementos del array de "string" a "number"
	                string = stringArray[n];
	                number = Number(string);
	                numberArray.push(number);
	            }  
	            for (index = 0, sum = 0; index < numberArray.length; index++){
	                num = numberArray[index];
	                sum = sum + num;
	            }
	            if(sum < 10){//Si el valor de la suma es inferior a 10 se añade al array definitivo
	             newArray.push(sum);
	            }else{//en caso contrario se repite el proceso...
	                sum = sum.toString();
	                sumArray = sum.split("");
	                var newNumberArray = [];
	                for(x = 0; x < sumArray.length; x++){
	                    STRING = sumArray[x];
	                    NUMBER = Number(STRING);
	                    newNumberArray.push(NUMBER);
	                }
	                for(y = 0, SUM = 0; y < newNumberArray.length; y++){
	                    NUM = newNumberArray[y];
	                    SUM = SUM + NUM;
	                }
	                newArray.push(SUM);
	            } 
	       }
	    }
	    
	}
	array = newArray;
	return array;
}

function sortArray( array )
{
	//It receives an array with numbers and letters and returns it with its items sorted. Numbers on one side and letters on the other.
	//Example: sortArray([5,5, 4, 1, 'j', A','b', 'E']) returns [1, 4, 5, 5, 'A', 'b', 'E', 'j']
	
	numberArray = [];//Creamos los arrays vacíos donde se guardarán los valores separados de tipo string y number
	stringArray = [];
	
	for(i = 0; i < array.length; i++){//Generamos un loop que iteraciona sobre el array separando los valores según su tipo
	    value = array[i];
	    if (typeof value == "string"){
	        stringArray.push(value);
	    }else{
	        numberArray.push(value);
	    }
	}
	numberArraySorted = numberArray.sort(function(a,b){return a-b}); //Ordenamos los números en orden ascendente
	stringArraySorted = stringArray.sort(function(a,b){ //La función que empleamos como parámetro compara cada valor individualmente
														//Convierte los elementos a minúsculas y determina si son mayores o menores entre si
														//Para ello les otorga un valor de 1, 0 o -1 dependiendo si alfabéticamente son anteriores, iguales o posteriores
                    	    a = a.toLowerCase();
                    	    b = b.toLowerCase();
                    	    if (a < b){return -1}
                    	    if (a > b){return 1}
                    	    return 0;
                    	});

    sortedArray = numberArraySorted.concat(stringArraySorted);
	
    array = sortedArray;
	return array;
}


function arrayToString( array )
{
	//It receives an array and returns a string with all its elements.
	//Example: arrayToString([1, 4, 5, 5, 'A', 'b', 'E', 'j']) returns "1455AbEj"
	string = array.toString();
	array = string.replace(/,/g , "");
	return array;
}
console.log(arrayAwesomenator(["a", 6, "B", "F", "*", 8, 78, "J" ]) === "668Abfj");
console.log(arrayAwesomenator(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y" ]) === "46688AAbcfjjqry");




