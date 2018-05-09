# we need to tell this file, which we intend to run, where to find the classes we use here
require_relative 'phone'
require_relative 'person'

# instantiate a new phone and save to a variable
# We need to pass in two arguments for model and ringtone,
# because the class's intialize method expects those arguments
iphone = Phone.new("iPhone", "happy birthday")

# instantiate a new person and save to a variable
# We need to pass in a name and a phone
Lila = Person.new("Lila", iphone)


Lila.say_name
Lila.receive_call

puts "I can access the phone's model here:"
puts iphone.model
