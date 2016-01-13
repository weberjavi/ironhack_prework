def solve_cipher(input)
	#Convertimos la frase de entrada en un array en el que cada letra será un elemento
	input = input.split("")
	#Creamos un array que, tras convertir las letras del input a su equivalente ASCII (mediante el método .ord), resta uno a cada elemento.
	#La función .map genera un nuevo array con las condiciones descritas dentro del {block}
	ascii = input.map { |i| i.ord - 1 }
	#Creamos un array que convierte la numeración ASCII de entrada en el caracter correspondiente (a través del método .chr)
	descifrado = ascii.map { |i| i.chr }
	#La función devuelve el string creado a partir del array 
	return descifrado.join("")
end	

solve_cipher("ifmmp")