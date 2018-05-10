# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user }

  belongs_to :user
  has_many :playlistings,
    dependent: :destroy
  has_many :tracks, through: :playlistings
  has_many :albums, through: :tracks
  has_many :follows
  has_many :followers, through: :follows

  def tracks_in_order 
    # is this supposed to have a sort longer term?
    self.tracks
  end
end
