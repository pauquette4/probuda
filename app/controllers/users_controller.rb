class UsersController < ApplicationController

  def index
    @users = User.all
  end
  def new
    @user=User.new
  end
  
  def show
    @user = User.find(params[:id])
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      flash[:success] = "Weclome to Probuda!"
      redirect_to '#/dashboard'
    else
      render 'new'
    end
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:success] = "Profile updated!"
      redirect_to '#/settings'
    else
      flash[:danger] = "Invalid change, updates rejected. Please try again."
      redirect_to '#/settings'
    end
  end
  
  private
  
  def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
  end
end
