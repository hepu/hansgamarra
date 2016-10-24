namespace :puma do
  desc "Starts Puma"
  task :start do
    on roles(:web) do
      within current_path do
        puma_config = fetch(:puma_config)
        execute :bundle, :exec, "puma -C #{puma_config}"
      end
    end
  end
 
  desc "Stops Puma"
  task :stop do
    on roles(:web) do
      puma_pid = fetch(:puma_pid)
      begin
        execute "kill -s SIGTERM `cat #{puma_pid}`"
        execute "kill -9 `cat #{puma_pid}` ; true"
      rescue => e
        puts "No Puma pid found"
      end
    end
  end
 
  desc "Restart Puma"
  task :restart do
    on roles(:web) do
      Rake::Task['puma:stop'].invoke
      Rake::Task['puma:start'].invoke
    end
  end
end