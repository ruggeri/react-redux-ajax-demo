class Cat < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :favorite_song, presence: true
  validates :is_liked, inclusion: { in: [false, true] }
end
