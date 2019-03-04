class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.text :description
      t.string :label
      t.string :genre, null: false
      t.date :release_date, null: false
      t.integer :user_id, null: false
    end

    add_index :songs, :title
    add_index :songs, :release_date
    add_index :songs, :genre
    add_index :songs, :user_id
  end
end
