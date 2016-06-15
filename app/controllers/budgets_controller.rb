class BudgetsController < ApplicationController
  include ReactOnRails::Controller
  
  def new
    
  end
  
  def create
    @budget = current_user.budgets.build(budget_params)
    if @budget.save
      render json: @budget
    else
      render json: @budget.errors, status: unprocessable_entity
    end
  end
  
  def destroy
    @budget = Budget.find(params[:id])
    @budget.destroy
    head :no_content
  end
  
  private
  
    def budget_params
      params.require(:budgets).permit(:description, :amount, :units, :x, :rate, 
                                     :total, :category)
    end
  
end