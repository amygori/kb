class Phone
  # accessor methods -- add these after demoing the getter and setter meothods
  ## this is an example of metaprogramming -- it creates the other methods for you
  # metaprogramming (methods that define other methods) is very common in Ruby
  # this method shorthand is also called a "macro"
  attr_accessor :model, :ringtone

  def initialize(model, ringtone)
    puts "TA DA! Setting up new phone!!"
    @model = model
    @ringtone = ringtone
  end

  # getter method
  # commented out because the attr_accessor creates this method for you
  # def make
  #   @make
  # end

  # setter method
  # commented out because the attr_accessor creates this method for you
  # def make=(make)
  #   @make = make
  # end

  def ring
    puts @ringtone
  end

  def call(number)
   "Dialing #{number}"
  end

end