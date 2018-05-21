class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name

      t.timestamps
    end

    add_index :students, :name, unique: true
  end
end
