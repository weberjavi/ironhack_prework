fizz = "Fizz"
buzz = "Buzz"
fizzBuzz = "FizzBuzz"

for i in 0..20 do
	mult3_5 = ( i % 3 == 0 && i % 5 == 0 )
	mult3 = ( i % 3 == 0 )
	mult5 = ( i % 5 == 0 )
	if mult3_5
		puts "-> #{fizzBuzz}"
	elsif mult3
		puts "-> #{fizz}"
	elsif mult5
		puts "-> #{buzz}"
	else	
  		puts "-> #{i}"
  	end	
end

#Este "each loop" podría leerse como:
#Realiza y repite una interacción sobre el rango de números del uno al cien y 
#cada vez que lo hagas otorga un nuevo valor a la variable (no definida) i y
#posteriormente ejecuta el código//
#En el primer loop las llaves {} sustituirían a las palabras clave "do" y "end"
#con el fin de escribir todo el loop en una sola linea (block)//
 
(1..10).each { |i| puts "-> #{i}" }

(1..20).each do |i|
	mult3_5 = ( i % 3 == 0 && i % 5 == 0 )
	mult3 = ( i % 3 == 0 )
	mult5 = ( i % 5 == 0 )
	if mult3_5
		puts "-> #{fizzBuzz}"
	elsif mult3
		puts "-> #{fizz}"
	elsif mult5
		puts "-> #{buzz}"
	else	
  		puts "-> #{i}"
  	end	
end

(1..100).each do |i|

	result = ""
	
	if i % 3 == 0 
		result << "Fizz"
	end
	if i % 5 == 0 
		result << "Buzz"
	end
	if ( i.to_s.start_with?("1") )
		result << "Bang"
	end 
	if ( i % 3 != 0 && i % 5 != 0 ) 
		result << "#{i}"
	end
	puts "-> #{result}"
end
