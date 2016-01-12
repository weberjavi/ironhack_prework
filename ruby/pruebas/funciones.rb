def division (a,b)
	puts a/b
end

resultado = division(20.00,6.00)

flavours = "chocolate, mint, strawberry, vanilla, caramel, chili"
flavours_array = flavours.split( ",")
print flavours_array

puts "awesome".include? "you"
puts "awesome".include? "me"
phrase = "Just kidding, you’re awesome too"
puts phrase.include? "aw"


#require 'pry'  
total = 1+1  
#binding.pry  
puts "The result is #{total}"


puts 1 == 1 && 1 > 2
puts 1 == 1 && 3 > 2
puts 1 == 1 || 1 > 2
puts 1 == 1 || 3 > 2

numbers = [1,2,3]

for element in numbers
  puts "-> #{element}"
end

numbers.each do |item|
  puts "--> #{item}"
end

my_hash = {}
my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"
my_hash["CAT"] = "Catalunya"

my_hash.each do |key,value|
  puts "#{key} stands for #{value}"
end