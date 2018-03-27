Rails.application.routes.draw do
  namespace 'api' do
    resources 'cats'
  end

  root to: 'static_pages#root'
end
