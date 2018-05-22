# == Schema Information
#
# Table name: assignments
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class AssignmentTest < ActiveSupport::TestCase
  test "weight is 1 by default" do
    assignment = Assignment.new
    assert_equal 1, assignment.weight
  end
end
