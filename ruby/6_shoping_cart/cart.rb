class ShoppingCart
  def initialize
    @items = []
  end
  def add_item(item)
      @items.push(item.price)
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
orange_juice = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
vacuum_cleaner = Houseware.new("Vacuum Cleaner", 150)
anchovies = Item.new("Anchovies", 2)

banana.price
orange_juice.price
rice.price
vacuum_cleaner.price
anchovies.price