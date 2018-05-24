module ApplicationHelper
  def flash_classes(name)
    if name == 'notice'
      "alert alert-info"
    elsif name == 'alert'
      "alert alert-danger"
    else
      "alert"
    end
  end

  def dash_if_nil(value)
    if value.nil?
      "-"
    else
      value
    end
  end
end
