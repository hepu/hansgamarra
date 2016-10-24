namespace :paperclip do
  desc "Refreshes paperclip missing styles"
  task :refresh do
    on roles(:web) do
      within current_path do
        execute :bundle, :exec, 'rake paperclip:refresh:missing_styles'
      end
    end
  end
end