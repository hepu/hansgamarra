# config/deploy/production.rb

set :deploy_to, '/home/ubuntu/repos/hansgamarra'
set :rails_env, 'production'
set :puma_config, 'config/puma-production.rb'
set :puma_pid, '/home/ubuntu/pids/hansgamarra.pid'

server '34.202.120.182', user: 'ubuntu', roles: %w{web app db}

before "deploy:finished", "db:migrate"
before "deploy:finished", "puma:restart"
