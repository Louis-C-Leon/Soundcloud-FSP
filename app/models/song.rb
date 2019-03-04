# == Schema Information
#
# Table name: songs
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text
#  genre        :string           not null
#  release_date :date             not null
#  user_id      :integer          not null
#

class Song < ApplicationRecord

  validates :title, :genre, :release_date, :user_id, presence: true
  
  has_one_attached :image
  has_one_attached :song_file

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
  
end
