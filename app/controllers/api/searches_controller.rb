class API::SearchesController < ApplicationController 
  def create
  end

  private
  def search_params
    params.require(:search).permit(:keyword)
  end
end
