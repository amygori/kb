# == Schema Information
#
# Table name: students
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Student < ApplicationRecord
  has_many :grades
  has_many :graded_assignments, through: :grades, class_name: "Assignment"

  validates :name, presence: true, uniqueness: true

  def average(drop: 0)
    grades_to_use = grades.order(:score).offset(drop)
    weighted_total = grades_to_use.map { |grade| 
      grade.score * grade.assignment.weight 
    }.sum
    weighted_count = grades_to_use.map { |grade| grade.assignment.weight }.sum
    return nil if weighted_count == 0
    weighted_total / weighted_count
  end
end
