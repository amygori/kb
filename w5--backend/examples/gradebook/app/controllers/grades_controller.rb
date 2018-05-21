class GradesController < ApplicationController
  def index
    @grades = Grade.all
  end

  def new
    @grade = Grade.new
  end

  def create
    @grade = Grade.new(grade_params)
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
