class SalesController < ApplicationController
  def index
    @sales = Sale.all
  end

  def create
    Sale.create(sale_params["_json"])
    respond_to do |format|
      format.html { redirect_to sales_index_path, turbolinks: false }
    end
  end

  def sale_params 
    params.permit(_json:[:purchaser_name, :item_description, :item_price, :purchase_count, :merchant_address, :merchant_name])
  end

end
