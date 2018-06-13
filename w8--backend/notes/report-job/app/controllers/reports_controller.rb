class ReportsController < ApplicationController
  def new
  end

  def create
    report = Report.create!
    # pass the report instance to the job
    ExpensiveReportJob.perform_later(report)
    redirect_to report_path(report)
  end

  def show
    @report = Report.find(params[:id])
    if request.xhr?
      # status code 502 is 'Service Unavailable'
      # ActionController#head returns a response that has only a headerr
      # http://api.rubyonrails.org/classes/ActionController/Head.html#method-i-head
      if @report.ready?
        head 200
      else
        head 502
      end
    end
  end
end
