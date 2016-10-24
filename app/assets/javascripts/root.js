$(document).ready(function() {
  var topMenuHeight = $("#menu").outerHeight()+15
  var screenHeight = window.outerHeight;

  $(".image-cover").css('height', screenHeight-topMenuHeight-44)
})
