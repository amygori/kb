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
  # test "the truth" do
  #   assert true
  # end

  test "student names must be unique" do
    student1 = Student.new(name: "Oz")
    student1.save!

    student2 = Student.new(name: "Oz")
    assert !student2.valid?
  end
end
