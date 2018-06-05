class Recipe < ApplicationRecord

  has_one_attached :image
  paginates_per 100
end
