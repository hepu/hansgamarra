#!/usr/bin/env puma

# config/puma-staging.rb

environment 'production'
daemonize
pidfile '/home/ubuntu/pids/hansgamarra.pid'
bind 'unix:///home/ubuntu/sockets/hansgamarra.sock'
stdout_redirect '/home/ubuntu/repos/hansgamarra/current/log/production.log', '/home/ubuntu/repos/hansgamarra/current/log/production.log', true
