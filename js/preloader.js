/* preloader JS Document */

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时
function completeLoading() {
    if (document.readyState == "complete") {
        $('body').addClass('loaded'); 
        $('#preloader .load_title').remove(); 
    }
}
//
$(window).load(function(){ 
    $('body').addClass('loaded'); 
    $('#preloader .load_title').remove(); 
}); 