class Artist < ApplicationRecord
  include PgSearch

  pg_search_scope :search_name, against: [:name]
  pg_search_scope :search_all,
    against: [:name, :bio],
    using: {
      tsearch: { dictionary: 'english' }
    }
end
