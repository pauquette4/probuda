require 'test_helper'

class BudgetTest < ActiveSupport::TestCase
  def setup
    @user = users(:michael)
    # This code is not idiomatically correct.
    @budget = @user.budgets.build(description: "Lorem ipsum")
  end

  test "should be valid" do
    assert @budget.valid?
  end

  test "user id should be present" do
    @budget.user_id = nil
    assert_not @budget.valid?
  end
  
  test "should enforce description presence" do
    @budget.description = "     "
    assert_not @budget.valid?
  end
end
