
#ITERATION 1

def solve_cipher(input)
	#Convertimos la frase de entrada en un array en el que cada letra será un elemento
	input = input.split("")
	#Creamos un each loop que, tras convertir las letras del input a su equivalente ASCII (mediante el método .ord), resta uno a cada elemento.
	#Posteriormente poblamos el array con el resutado y en caso de que el valor sea menor que 97 (equivalente a "a" en caracteres ASCII) lo convertimos en 122 ("z")
	ascii = []
	input.each do |i| 
		i = i.ord - 1 
		if i < 97
			i = 122
			ascii << i
		else
			ascii << i
		end
	end
	#Creamos un array que convierte la numeración ASCII de entrada en el caracter correspondiente (a través del método .chr)
	#La función .map genera un nuevo array con las condiciones descritas dentro del {block}
	descifrado = ascii.map { |i| i.chr }
	#La función devuelve el string creado a partir del array 
	return descifrado.join("")
end	

solve_cipher("ifmmp")



#ITERATION 2

def solve_cipher(input, shift)
	#Convertimos la frase de entrada en un array en el que cada letra será un elemento
	input = input.split("")
	#Creamos un each loop que, tras convertir las letras del input a su equivalente ASCII (mediante el método .ord), resta uno a cada elemento.
	#Posteriormente poblamos el array con el resutado y en caso de que el valor sea menor que 97 (equivalente a "a" en caracteres ASCII) lo convertimos en 122 ("z")
	ascii = []
	input.each do |i| 

		i = i.ord + shift

		if i == 32 + shift

			i = " "
			ascii << i

		elsif i < 97

			i = 122
			ascii << i

		else

			ascii << i

		end
	end
	#Creamos un array que convierte la numeración ASCII de entrada en el caracter correspondiente (a través del método .chr)
	#La función .map genera un nuevo array con las condiciones descritas dentro del {block} y convertido a string con el método .join
	descifrado = ascii.map { |i| i.chr }.join("")
	#La función devuelve el string creado a partir del array 
	return descifrado
end	

solve_cipher("p| uhdo qdph lv grqdog gxfn", -3)

#ITERATION 3

def solve_cipher(input, shift = -3)
	#Convertimos la frase de entrada en un array en el que cada letra será un elemento
	input = input.split("")
	#Creamos un each loop que, tras convertir las letras del input a su equivalente ASCII (mediante el método .ord), resta uno a cada elemento.
	#Posteriormente poblamos el array con el resutado y en caso de que el valor sea menor que 97 (equivalente a "a" en caracteres ASCII) lo convertimos en 122 ("z")
	ascii = []
	input.each do |i| 

		i = i.ord + shift

		if i == 32 + shift

			i = " "
			ascii << i

		elsif i < 97

			i = 122
			ascii << i

		else

			ascii << i

		end
	end
	#Creamos un array que convierte la numeración ASCII de entrada en el caracter correspondiente (a través del método .chr)
	#La función .map genera un nuevo array con las condiciones descritas dentro del {block} y convertido a string con el método .join
	descifrado = ascii.map { |i| i.chr }.join("")
	#La función devuelve el string creado a partir del array 
	return descifrado
end	

solve_cipher("p| uhdo qdph lv grqdog gxfn")


