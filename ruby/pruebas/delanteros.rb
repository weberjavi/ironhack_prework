delanteros = ["aspas" , "guidetti" , "borja", "fabian"]
delantero = delanteros 
for delantero in delanteros 
puts "#{delantero} ,"
end

delanteros.each do |delantero|
	puts "#{delantero} ,"
	if delantero == "borja"
	puts "borja."
	end
end	