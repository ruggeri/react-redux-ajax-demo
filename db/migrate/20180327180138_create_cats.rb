class CreateCats < ActiveRecord::Migration[5.1]
  def change
    create_table :cats do |t|
      t.string :name, null: false, unique: true
      t.string :favorite_song, null: false
      t.boolean :is_liked, null: false
      t.timestamps
    end
  end
end
