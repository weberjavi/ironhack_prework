# Las operaciones dentro de final_array van sucediendo de izquierda a derecha.
# Cada método toma como "argumento" la respuesta de la operación anterior
# El método .gsub se ejecuta sobre frase, que es el argumento introducido al invocar la función
# el argumento de .gsub(/\W/," ") indica que se deben eliminar todos los elementos que no sean palabras, incluidos los espacios, y sustituirlos por espacios
# también se puede utilizar .gsub(/[[:punct:]]/,"") ----- Ver Regular Expressions y POSIX bracket expresions
# El método .upcase se ejecutaria sobre la respuesta de .gsub, que todavía sería una "string"
# El método .split convierte la "string" inicial en un array de sub-strings y .sort las ordena alfabeticamente

def alphabetic_order(frase)
	final_array = frase..gsub(/\W/," ").upcase.split.sort
	puts "#{frase} => #{final_array}" 
end

alphabetic_order("Me muero, lentamente.")
alphabetic_order("Desde aqui se ve muy bien el mar!!!")