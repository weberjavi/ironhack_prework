
(1..100).each do |i|

	start_1 = i.to_s.start_with?("1")
	result = ""
	
	if i % 3 == 0 
		result << "Fizz"
	end
	if i % 5 == 0 
		result << "Buzz"
	end
	if  start_1 
		result << "Bang"
	end 
	if i % 3 != 0 && i % 5 != 0 && start_1 == false 
		result = "#{i}"
	end
	puts "-> #{result}"
end
