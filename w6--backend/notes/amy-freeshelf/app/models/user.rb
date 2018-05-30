class User < ApplicationRecord
  has_secure_password

  validates :name, :email, presence: true
  validates :email, uniqueness: true, case_sensitive: false
  validates :password, confirmation: true

  has_many :books_created
  has_many :checkouts
  has_many :books_checked_out, through: :checkouts
end
