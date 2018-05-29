class CreateHolidays < ActiveRecord::Migration[5.2]
  def change
    create_table :holidays do |t|
      t.string :name
      t.date :observed_on
      t.string :country_of_origin

      t.timestamps
    end
  end
end
