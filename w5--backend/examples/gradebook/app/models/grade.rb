# == Schema Information
#
# Table name: grades
#
#  id            :bigint(8)        not null, primary key
#  score         :integer
#  student_id    :bigint(8)
#  assignment_id :bigint(8)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  graded_by_id  :integer
#

class Grade < ApplicationRecord
  belongs_to :student
  belongs_to :assignment
  belongs_to :graded_by, class_name: "User"

  validates :score, presence: true, 
    numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  validates_uniqueness_of :student, scope: :assignment
end
