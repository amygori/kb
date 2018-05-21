class CreateAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.string :title

      t.timestamps
    end

    add_index :assignments, :title, unique: true
  end
end
