#Creamos una clase (CLASS) donde definimos las características del batido
#Las características (@INSTANCE VARIABLE) serán sabor y precio
class MilkShake
  	def initialize(flavor, price)
    	@flavor = flavor
    	@price = price
  	end
end

#Creamos una clase (CLASS) donde definimos los ingredientes que se añadan al batido
#Las características de los ingredientes (@INSTANCE VARIABLE) serán nombre y precio
class Ingredient
	attr_reader :name, :price #A través de attr_reader permitimos que estos atributos puedan ser leidos desde fuera de la clase Ingredient 
  	def initialize(name, price)
    	@name = name
    	@price = price
  	end
end

#Para crear un "ejemplar de clase" (CLASS INSTANCE) debemos crear una variable y dentro de ella invocar el método .new sobre la clase 
#El método .new es común a todas las clases y es "autogenerado" en el momento en el que se crea la clase
#banana = Ingredient.new(“Banana”, 2)


class MilkShake
  	def initialize
    	@base_price = 3
    	@ingredients = [ ]        
  	end

  	def add_ingredient(ingredient)
    	@ingredients.push(ingredient)
 	end

 	def price_of_milkshake
  		#Let's establish what our counter should be before we start adding ingredients into the mix
  		total_price_of_milkshake = @base_price
  		#Add each ingredients price to our total
  		@ingredients.each do |ingredient|
    		total_price_of_milkshake += ingredient.price
  		end
  		#return  our total price to whoever called for it
   		return total_price_of_milkshake
	end
end




=begin
An empty list where we can add milkshakes
A method to add milkshakes to this list
A method to checkout all of the milkshakes in our list
Hint: Model this class in the same way we created the milkshake class, and call the price_of_milkshake method to return a milkshakes total price when checking out.
=end

class ShakeShop < MilkShake
	def initialize
		@milkshakes_total = []		
	end
	def add_milkshake(milkshake)
		@milkshakes_total.push(milkshake.price_of_milkshake)
		return @milkshakes_total
	end
def checkout
		checkout_total_price = 0
		@milkshakes_total.each do |i|
			checkout_total_price += i
		end		
		puts checkout_total_price
	end

end

nizars_milkshake = MilkShake.new
javi_milkshake = MilkShake.new
banana = Ingredient.new("Banana", 2)
chocolate_chips = Ingredient.new("Chocolate Chips", 1)
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)
javi_milkshake.add_ingredient(banana)
shop = ShakeShop.new

shop.add_milkshake(javi_milkshake)

shop.add_milkshake(nizars_milkshake)

shop.checkout




