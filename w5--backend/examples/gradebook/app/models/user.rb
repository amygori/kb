# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#

class User < ApplicationRecord
  has_secure_password
  has_many :assignments, foreign_key: 'owner_id'
  
  def to_s
    username
  end
end
