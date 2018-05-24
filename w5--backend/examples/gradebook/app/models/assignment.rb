# == Schema Information
#
# Table name: assignments
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  weight     :integer          default(1), not null
#  owner_id   :integer
#

class Assignment < ApplicationRecord
  has_many :grades
  has_many :students, through: :grades
  belongs_to :owner, class_name: 'User'

  validates :title, presence: true, uniqueness: true
  validates :weight, numericality: {
    greater_than: 0
  }

  def students_completed
    grades.count
  end

  def average
    return nil if grades.empty?
    total = grades.map { |grade| grade.score }.sum / grades.count
    return total
  end
end
