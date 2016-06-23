class ProjectsController < ApplicationController
  include ReactOnRails::Controller
  def index
    @projects = Project.last
    gon.rabl "app/views/projects/index.json.rabl", as: "projects"
    render 'index', formats: :json
  end
  
  def new
  end
  
  def show
  end
  
  def create
    @project = current_user.projects.build(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors, status: unprocessable_entity
    end
  end
  
  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    head :no_content
  end
  
  private
  
  def project_params
    params.require(:projects).permit(:title)
  end
  
end
