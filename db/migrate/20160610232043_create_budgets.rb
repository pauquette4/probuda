class CreateBudgets < ActiveRecord::Migration[5.0]
  def change
    create_table :budgets do |t|
      t.string :description
      t.float :amount
      t.float :units
      t.float :x
      t.float :rate
      t.float :total
      t.string :category, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :budgets, [:user_id, :category]
  end
end
