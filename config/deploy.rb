# config valid only for current version of Capistrano
lock '3.8.1'

set :application, 'hansgamarra'
set :repo_url, 'git@github.com:hepu/hansgamarra.git'
set :rvm_ruby_version, '2.1.5@hansgamarra --create'
set :deploy_via, :remote_cache
set :scm, :git
set :keep_releases, 5
set :branch, ENV['branch'] || 'master'
set :linked_dirs, fetch(:linked_dirs, []).push('public')

set :ssh_options, {
  user: "ubuntu",
  keys: ["~/ssh_keys/hepu-aws-certificate.cer"],
  forward_agent: false,
}

# Hooks
after :deploy, "deploy:restart"

# Tasks
namespace :deploy do
  task :restart do
    on roles(:web) do |host|
      execute('mkdir /home/ubuntu/sockets; true')
      execute('mkdir /home/ubuntu/pids; true')
    end
  end
end
