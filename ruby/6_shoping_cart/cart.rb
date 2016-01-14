class ShoppingCart
  def initialize
    @items = []
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

banana = Fruit.new("Banana",3)
hammer = Houseware.new("Hammer",112)
hammer.price
banana.price
banana.inspect
hammer.inspect
