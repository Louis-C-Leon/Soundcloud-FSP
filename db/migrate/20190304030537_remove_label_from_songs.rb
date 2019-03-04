class RemoveLabelFromSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :label, :string
  end
end
