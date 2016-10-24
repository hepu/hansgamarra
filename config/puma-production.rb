#!/usr/bin/env puma

# config/puma-staging.rb

environment 'production'
daemonize
pidfile '/var/run/hansgamarra_production.pid'
bind 'unix:///var/run/hansgamarra.sock'
stdout_redirect '/var/www/hansgamarra/current/log/production.log', '/var/www/hansgamarra/current/log/production.log', true
