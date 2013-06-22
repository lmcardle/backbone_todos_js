class TasksController < ApplicationController
  respond_to :json
  respond_to :html, only: [:index]

  def index
    @tasks = Task.all
    respond_to do |format|
      format.html
      format.json { render json: @tasks }
    end
  end

  def create
    @task = Task.new(params[:task])
    if @task.save
      render json: @task
    else
      render json: @task.errors, status: 422
    end
  end
end
