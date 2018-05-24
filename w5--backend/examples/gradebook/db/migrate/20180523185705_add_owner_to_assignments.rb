class AddOwnerToAssignments < ActiveRecord::Migration[5.2]
  def change
    add_column :assignments, :owner_id, :integer
    add_foreign_key :assignments, :users, column: 'owner_id'
  end
end
