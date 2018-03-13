$(document).ready(function() {
  var topMenuHeight = $("#menu").outerHeight()+15
  var screenHeight = window.outerHeight;

  $(".image-cover").css('height', screenHeight-topMenuHeight-44)

  var images = 4
  var currentImage = 1

  setInterval(function() {
    $('.img'+currentImage).removeClass('active-bg')
    currentImage += 1
    if (currentImage > images) {
      currentImage = 1
    }
    $('.img'+currentImage).addClass('active-bg')
  }, 6180)
})
