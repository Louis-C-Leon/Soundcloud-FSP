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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
