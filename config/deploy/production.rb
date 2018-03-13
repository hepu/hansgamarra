# config/deploy/production.rb

set :deploy_to, '/home/ubuntu/repos/hansgamarra'
set :rails_env, 'production'
set :puma_config, 'config/puma-production.rb'
set :puma_pid, '/home/ubuntu/pids/hansgamarra.pid'

server 'hansgamarra.com', user: 'ubuntu', roles: %w[web app db]

before 'deploy:starting', 'puma:stop'
before 'deploy:finished', 'db:migrate'
before 'deploy:finished', 'puma:restart'
