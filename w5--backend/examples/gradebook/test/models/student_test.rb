# == Schema Information
#
# Table name: students
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class StudentTest < ActiveSupport::TestCase
  test "student names must be unique" do
    student1 = Student.new(name: "Oz")
    student1.save!

    student2 = Student.new(name: "Oz")
    assert !student2.valid?
  end

  test "a student with no grades has a nil average" do
    student = Student.create!(name: "Test")
    assert_nil student.average
  end

  test "a student with one grade has an average of that grade's score" do
    student = Student.create!(name: "Test")
    assignment = Assignment.create!(title: "Test")
    grade = student.grades.create!(assignment: assignment, score: 90)
    assert_equal student.average, 90

    grade.score = 80
    grade.save!
    assert_equal 80, student.average
  end

  test "a student with multiple grades has an average of those grades' scores" do
    student = Student.create!(name: "Test")
    assignment = Assignment.create!(title: "Test")
    student.grades.create!(assignment: assignment, score: 90)
    student.grades.create!(assignment: assignment, score: 80)
    assert_equal 85, student.average
  end

  test "lowest grades can be dropped when calculating a student's average" do
    student = Student.create!(name: "Test")
    assignment = Assignment.create!(title: "Test")
    student.grades.create!(assignment: assignment, score: 90)
    student.grades.create!(assignment: assignment, score: 80)
    student.grades.create!(assignment: assignment, score: 70)

    assert_equal 80, student.average(drop: 0)
    assert_equal 85, student.average(drop: 1)
    assert_equal 90, student.average(drop: 2)
    assert_nil student.average(drop: 3)
  end

  test "weighted assignments are calculated correctly in average" do
    student = Student.create!(name: "Test")
    assignment1 = Assignment.create!(title: "Test 1", weight: 1)
    assignment2 = Assignment.create!(title: "Test 2", weight: 2)
    student.grades.create!(assignment: assignment1, score: 70)
    student.grades.create!(assignment: assignment2, score: 85)

    assert_equal 80, student.average
  end
end
