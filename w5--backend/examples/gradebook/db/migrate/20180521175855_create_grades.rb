class CreateGrades < ActiveRecord::Migration[5.2]
  def change
    create_table :grades do |t|
      t.integer :score
      t.belongs_to :student, foreign_key: true
      t.belongs_to :assignment, foreign_key: true

      t.timestamps
    end
  end
end
