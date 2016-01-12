puts "¿Cuál es el archivo de origen (añada la extensión apropiada)?"
origen = gets.chomp
contenido_origen = IO.read(origen)
puts "¿Cuál es el nombre del archivo de destino?"
destino = gets.chomp
IO.write(destino, contenido_origen)