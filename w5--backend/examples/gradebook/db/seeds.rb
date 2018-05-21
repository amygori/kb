# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Student.delete_all
students = Student.create!([
  { name: "Addison" }, 
  { name: "Oakley" }, 
  { name: "Teagan" },
  { name: "Angel" },
  { name: "River" },
  { name: "Carter" },
  { name: "Ari" },
  { name: "Logan" },
  { name: "Dorian" },
  { name: "Nevada" }
])

Assignment.delete_all
assignments = Assignment.create!((1..10).map { |n| { title: "Assignment #{n}" }})

students.each do |student|
  assignments.each do |assignment|
    Grade.create!({student: student, assignment: assignment, score: Random.rand(101)})
  end
end
