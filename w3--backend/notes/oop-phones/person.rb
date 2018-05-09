class Person
  attr_accessor :name

  def initialize(name, phone)
    @name = name
    @phone = phone
  end

  def say_name
    puts "Hi my name is " + @name
  end

  def receive_call
    @phone.ring
  end

end
