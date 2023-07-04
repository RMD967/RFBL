Rails.application.routes.draw do
  get '/services/audio_production', to: 'services#audio_production'
  get '/services/graphic_design', to: 'services#graphic_design'
  get '/services/video_production', to: 'services#video_production'
  get '/services/web_development', to: 'services#web_development'
  get '/services/live_event_stream', to: 'services#live_event_stream'
  get '/services/index', to: 'services#index'
  get 'team/our_team', to: 'team#our_team'
  get 'team/RMD', to: 'team#RMD'
  get 'pages/about', to: 'pages#about'
  root to: 'pages#home'
end
