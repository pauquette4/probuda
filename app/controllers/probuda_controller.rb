class ProbudaController < ApplicationController
  include ReactOnRails::Controller
  
  before_action :set_user
 
  before_action :data
  
  before_action :initialize_shared_store
  
  def index
    
  end
  
  def cover
   
  end
  
  private
  
  def initialize_shared_store
    redux_store("ProbudaStore", props: @probudaData)
  end
  
  def set_user
    user_id = session[:user_id]
    
    if logged_in?
      @user = User.find_by(id: user_id)
      @budgets = []
      Project.where(user_id: @user).find_each do |project|
        budget = project.budgets.all
        @budgets << budget
      end
    else
      @user = User.find(13)
      @projects = Project.find_by(user_id: @user)
    end
    
    if @user.projects.count > 0
      @currentProjectID = @user.projects.first.id
      @currentProjectTitle = @user.projects.first.title

    else
      @currentProjectID = 0
      @currentProjectTitle = ""
    end
    
  end
  
  def data
    @probudaData = {
      probudaData: {
        name: @user.name,
        email: @user.email,
        id: @user.id,
        password: @user.password_digest,
        password_confirmation: @user.password_digest,
        authenticity_token: form_authenticity_token,
        logged_in: logged_in?,
        budgets: @budgets,
        projects: @user.projects.all,
        currentProject: { index: 0, id: @currentProjectID,
                          title: @currentProjectTitle },
      }
    }
  end
end
