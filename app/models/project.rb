class Project < ApplicationRecord
  has_many :paragraphs, dependent: :destroy
  validates :title, presence: true
  validates :description, presence: true
end
