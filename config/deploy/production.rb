# config/deploy/production.rb

set :deploy_to, '/var/www/hansgamarra'
set :rails_env, 'production'
set :puma_config, 'config/puma-production.rb'
set :puma_pid, '/var/run/puma_production.pid'

server 'hansgamarra.com', user: 'root', roles: %w{web app db}

before "deploy:finished", "db:migrate"
before "deploy:finished", "puma:restart"
