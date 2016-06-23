class Project < ApplicationRecord
  belongs_to :users
  has_many :budgets
  validates :user_id, presence: true
  validates :title, presence: true
end
