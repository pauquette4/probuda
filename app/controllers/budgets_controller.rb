class BudgetsController < ApplicationController
  include ReactOnRails::Controller
  def index
    @budgets = Budget.last
    gon.rabl "app/views/budgets/index.json.rabl", as: "budgets"
    render 'index', formats: :json
  end
  
  def new
    
  end
  
  def show
  end
  
  def create
    @budget = Budget.new(budget_params)
    if @budget.save
      render json: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end
  
  def update
    @budget = Budget.find(params[:id])
    if @budget.update(budget_params)
      render json: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
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
                                     :total, :category, :project_id)
    end
  
end