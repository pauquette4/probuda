class RemoveUserReferencesFromBudgets < ActiveRecord::Migration[5.0]
  def change
    remove_reference :budgets, :user, foreign_key: true
  end
end
