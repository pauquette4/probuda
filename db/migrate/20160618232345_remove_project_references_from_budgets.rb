class RemoveProjectReferencesFromBudgets < ActiveRecord::Migration[5.0]
  def change
    remove_reference :budgets, :project, foreign_key: true
  end
end
