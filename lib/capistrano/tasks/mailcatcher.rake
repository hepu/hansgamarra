namespace :mailcatcher do
  desc "Starts mailcatcher"
  task :start do
    on roles(:web) do
      within current_path do
        execute :bundle, :exec, 'mailcatcher'
      end
    end
  end

  desc "Stops mailcatcher"
  task :stop do
    puts "Please stop mailcatcher manually on server"
  end
end