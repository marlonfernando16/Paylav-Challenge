class Sale < ApplicationRecord
    include ActiveModel::ForbiddenAttributesProtection
    validates :purchaser_name, :item_description, :item_price, :purchase_count, :merchant_address, :merchant_name, presence: true
end
