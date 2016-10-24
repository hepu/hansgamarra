namespace :db do
  desc "Resets database"
  task :reset do
    on roles(:web) do
      within current_path do
        execute :bundle, :exec, 'rake db:drop'
        execute :bundle, :exec, 'rake db:create'
        Rake::Task['db:migrate'].invoke
        Rake::Task['db:seed'].invoke
      end
    end
  end

  desc "Run seeds"
  task :seed do
    on roles(:web) do
      within current_path do
        execute :bundle, :exec, 'rake db:seed'
      end
    end
  end

  desc "Run migrations"
  task :migrate do
    on roles(:web) do
      within current_path do
        execute :bundle, :exec, 'rake db:migrate'
      end
    end
  end
end