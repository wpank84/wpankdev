class Project < ApplicationRecord
  has_many :paragraphs, dependent: :destroy
end
