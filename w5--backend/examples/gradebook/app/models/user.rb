class User < ApplicationRecord
  has_secure_password
  
  def to_s
    username
  end
end
