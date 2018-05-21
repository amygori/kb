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
  has_many :assignments, through: :grades

  validates :name, presence: true, uniqueness: true
end
