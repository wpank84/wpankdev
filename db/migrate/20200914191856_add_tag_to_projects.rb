class AddTagToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :tag, :string
  end
end
