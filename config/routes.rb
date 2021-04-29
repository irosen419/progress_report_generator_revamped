Rails.application.routes.draw do
  resources :classrooms
  resources :comments
  resources :progress_reports
  resources :students
  resources :teachers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
