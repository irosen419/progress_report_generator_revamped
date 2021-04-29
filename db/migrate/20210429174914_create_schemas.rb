class CreateSchemas < ActiveRecord::Migration[6.0]
  def change
    create_table :teachers do |t|
      t.string :first_name
      t.string :last_name

      t.timestamps
    end

    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.integer :grade

      t.timestamps
    end

    create_table :progress_reports do |t|
      t.integer :teacher_id
      t.integer :student_id

      t.timestamps
    end

    create_table :comments do |t|
      t.integer :progress_report_id
      t.text :body

      t.timestamps
    end

    create_table :classrooms do |t|
      t.string :subject
      t.integer :teacher_id
      t.integer :student_id

      t.timestamps
    end
  end
end
