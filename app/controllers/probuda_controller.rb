class ProbudaController < ApplicationController
  include ReactOnRails::Controller
  #before_action :logged_in_user
  
  before_action :set_user
 
  before_action :data
  
  before_action :initialize_shared_store
  
  def index
    @user = User.new
  end
  
  def cover
   
  end
  
  private
  
  def initialize_shared_store
    redux_store("ProbudaStore", props: @probudaData)
    redux_store("CounterReduxStore", props: @counterData)
  
  end
  
  # def logged_in_user
  #   unless logged_in?
  #     flash[:danger] = "Please log in."
  #     redirect_to '#/login'
  #   end
  # end
  
  def set_user
    user_id = session[:user_id]
    if logged_in?
      @user = User.find_by(id: user_id)
    else
      @user = User.find(13)
    end
  end
  
  def data
    @counterData = {
      counterData: {
        counter: 109,
        name: "Bryan",
      }
    }
    
    @probudaData = {
      probudaData: {
        name: @user.name,
        email: @user.email,
        id: @user.id,
        password: @user.password_digest,
        password_confirmation: @user.password_digest,
        authenticity_token: form_authenticity_token,
        logged_in: logged_in?
      }
    }
  end
end
