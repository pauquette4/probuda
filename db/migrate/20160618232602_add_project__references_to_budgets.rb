class AddProjectReferencesToBudgets < ActiveRecord::Migration[5.0]
  def change
    add_reference :budgets, :project, foreign_key: true
  end
end
