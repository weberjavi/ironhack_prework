# Las operaciones dentro de sorted_array van sucediendo de izquierda a derecha.
# Cada método toma como "argumento" la respuesta de la operación anterior
# El método .gsub se ejecuta sobre frase, que es el argumento introducido al invocar la función
# el argumento de .gsub(/\W/," ") indica que se deben eliminar todos los elementos que no sean palabras, incluidos los espacios, y sustituirlos por espacios
# también se puede utilizar .gsub(/[[:punct:]]/,"") ----- Ver Regular Expressions y POSIX bracket expresions
# El método .split convierte la "string" inicial en un array de sub-strings y .sort las ordena alfabeticamente
#--------
# El método sort tiene en cuenta si las palabras contienen mayúsculas (siendo estas colocadas en primer lugar)
# por lo que para hacer insensible a ls mayusculas la comparación se debe introducir un parámetro de comparación 
# Sobre diferentes parámetro de comparación ver --------- http://www.evc-cit.info/cit020/beginning-programming/chp_07/custom_sort.html


def alphabetic_order(frase)

	sorted_array = frase.gsub(/\W/," ").split.sort

	final_array = sorted_array.sort { |a , b| a.upcase <=> b.upcase }

	puts "#{frase} => #{final_array}" 

end

alphabetic_order("Desde aqui se ve muy bien el mar!!!")