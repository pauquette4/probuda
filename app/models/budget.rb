class Budget < ApplicationRecord
  belongs_to :projects
  validates :project_id, presence: true
  validates :description, presence: true
end
