class Quote < ApplicationRecord
  def next_id
    self.class.where('id > ?', id).pluck(:id).first
  end

  def previous_id
    self.class.where('id < ?', id).pluck(:id).last
  end
end
