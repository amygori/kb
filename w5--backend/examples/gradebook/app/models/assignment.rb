# == Schema Information
#
# Table name: assignments
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Assignment < ApplicationRecord
  has_many :grades

  validates :title, presence: true, uniqueness: true
  validates :weight, numericality: {
    greater_than: 0
  }
end
