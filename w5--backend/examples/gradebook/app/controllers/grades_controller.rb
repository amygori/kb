class GradesController < ApplicationController
  def index
    @grades = Grade.all
  end

  def new
    @assignment = Assignment.find(params[:assignment_id])
    @grade = Grade.new
  end

  def create
    @grade = Grade.new(grade_params)
    @grade.graded_by = current_user
    if @grade.save
      redirect_to grades_url
    else
      render :new
    end
  end

  def grade_params
    params.require(:grade).permit(:student_id, :assignment_id, :score)
  end
end
