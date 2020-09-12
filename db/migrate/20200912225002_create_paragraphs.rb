class CreateParagraphs < ActiveRecord::Migration[6.0]
  def change
    create_table :paragraphs do |t|
      t.string :content
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
