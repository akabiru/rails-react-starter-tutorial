class Api::QuotesController < ApplicationController

  def show
    @quote = Quote.find(quote_params[:id])
  end

  private

  def quote_params
    params.permit(:id)
  end
end
