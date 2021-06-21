/* btnReal JS Document */

//菜单背景
$(document).ready(function(){
    $("nav").addClass("navScroll");
});

$(window).scroll(function() {
  if ($(document).scrollTop()<=winHeight-50){
    $("nav").addClass("navScroll");
  }
  else{
    $("nav").removeClass("navScroll");
  }
});

