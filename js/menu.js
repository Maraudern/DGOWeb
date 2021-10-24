/* btnReal JS Document */

//菜单背景
$(window).scroll(function() {
  if ($(document).scrollTop()<=winHeight/2){
    $("nav").removeClass("navScroll");
  }
  else{
    $("nav").addClass("navScroll");
  }
});

