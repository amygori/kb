class AssignmentsController < ApplicationController
  before_action :ensure_logged_in
  
  def index
    @assignments = current_user.assignments.all
  end

  def show
    @assignment = current_user.assignments.find(params[:id])
  end

  def new
    @assignment = current_user.assignments.build
  end

  def create
    @assignment = current_user.assignments.build(assignment_params)
    if @assignment.save
      redirect_to assignments_url, notice: "Your assignment was created successfully."
    else
      render :new
    end
  end

  private

  def assignment_params
    params.require(:assignment).permit(:title)
  end
end
