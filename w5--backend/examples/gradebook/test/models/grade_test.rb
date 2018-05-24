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

require 'test_helper'

class GradeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
