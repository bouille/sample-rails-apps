ActionController::Routing::Routes.draw do |map|
  map.page ':action', :controller => 'pages'
  map.root :controller => 'pages'

  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing the them or commenting them out if you're using named routes and resources.
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
