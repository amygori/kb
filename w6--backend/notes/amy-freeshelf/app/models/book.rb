class Book < ApplicationRecord
  validates :title, :url, presence: true, uniqueness: true

  belongs_to :creator, class_name: 'User', foreign_key: :user_id
  has_many :checkouts
  has_many :users, through: :checkouts

  def checked_out?
    self.checkouts.exists?
  end

end
