class SaySomethingNiceJob < ApplicationJob
  queue_as :default

  def perform(*args)
    puts "🌈 You are literally the best."
    puts "Here is a hedgehog with an umbrella:"
    puts "🦔 ☂️"
  end
end
