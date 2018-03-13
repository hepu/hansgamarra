class RootController < ApplicationController
  def index
    @links = {
      facebook: 'https://www.facebook.com/hepu13',
      linkedin: 'https://co.linkedin.com/in/hans-gamarra',
      twitter: 'https://twitter.com/Hepu1303',
      youtube: 'https://www.youtube.com/user/Hepu1308',
      google_plus: 'https://plus.google.com/u/0/113955679218936974599',
      github: 'https://github.com/hepu',
      instagram: 'https://www.instagram.com/hansgamarra',
      los_crankers: 'http://loscrankers.com'
    }
  end
end
