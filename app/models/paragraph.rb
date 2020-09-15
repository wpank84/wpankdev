class Paragraph < ApplicationRecord
  belongs_to :project
  validates :title, presence: true
  validates :content, presence: true
end
