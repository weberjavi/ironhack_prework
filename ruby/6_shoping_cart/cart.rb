class ShoppingCart
  	def initialize
    	@items = []
  	end

  	def add_item(item)
      	@items.push(item.price)
  	end

  	def checkout
  		final_price = 0
  		@items.each do |i|
  			final_price += i
  		end
  		return final_price
  	end
end

class Item
	def initialize (name, price)
		@name = name
		@price = price
	end

	def price
		return @price
	end
end

class Fruit < Item
	def price
		if Time.now.wday == 0 || Time.now.wday == 6
		    discount = @price * 0.10
			@price =  @price - discount	
			return @price
		else
			return @price	
		end
	end
	
end

class Houseware < Item
  	def price
      	if @price > 100
      		discount = @price * 0.05
      		@price = @price - discount
      		return @price
      	else
      		return @price
  		end
	end
end


banana = Fruit.new("Banana", 10)
oj = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
vacuum = Houseware.new("Vacuum Cleaner", 150)
anchovies = Item.new("Anchovies", 2)

cart = ShoppingCart.new
cart.add_item(rice)
cart.add_item(oj)
cart.add_item(oj)
cart.add_item(vacuum)
cart.add_item(banana)

puts cart.inspect
puts cart.checkout
