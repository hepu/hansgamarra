$(document).ready(function() {
  // Cache selectors
  var topMenu = $("#menu"),
  topMenuHeight = topMenu.outerHeight()+15,
  // All list items
  menuItems = topMenu.find("li"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    console.log($(this))
  });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;
    console.log(`fromTop: ${fromTop}`)
    // Get id of current scroll item
    // var cur = scrollItems.map(function(){
    //   if ($(this).offset().top < fromTop)
    //   return this;
    // });
    // Get the id of the current element
    // cur = cur[cur.length-1];
    // var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    // menuItems
    // .parent().removeClass("active")
    // .end().filter("[href='#"+id+"']").parent().addClass("active");
  });
})
