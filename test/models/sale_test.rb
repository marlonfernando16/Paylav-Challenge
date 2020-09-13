require 'test_helper'

class SaleTest < ActiveSupport::TestCase
  test "should not save sale without all required attributes" do
    sale = Sale.new
    assert_not sale.save
  end
end
