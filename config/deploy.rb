# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'hansgamarra'
set :repo_url, 'git@github.com:hepu/hansgamarra.git'
set :rvm_ruby_version, '2.1.5@hansgamarra --create'
set :deploy_via, :remote_cache
set :scm, :git
set :keep_releases, 5
set :branch, ENV['branch'] || 'master'
set :linked_dirs, fetch(:linked_dirs, []).push('public')
