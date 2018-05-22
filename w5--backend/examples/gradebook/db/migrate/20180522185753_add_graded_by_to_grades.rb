class AddGradedByToGrades < ActiveRecord::Migration[5.2]
  def change
    add_column :grades, :graded_by_id, :integer
  end
end
