/* index JS Document */

//页面准备执行
$(document).ready(function(){
	//当窗体改变时设置轮播图大小为浏览器窗口大小/3
	$(window).resize(function() {
		var winHeight = $(window).height();
	    var picBoxHeight = winHeight/3;
	    $("#picBox").css("height",picBoxHeight);
	});
		var winHeight = $(window).height();
	    var picBoxHeight = winHeight/2;
	    $("#picBox").css("height",picBoxHeight);
});


window.onload=function(){new WOW().init();}



setInterval(function(){$("#time").html(current)},1000);
function current(){

var date1 = new Date('2018-10-02'); //开始时间
var date2 = new Date(); //结束bai时间
var date3 = date2.getTime()-date1.getTime(); //时间差的毫秒数
//计算du出zhi相差天数dao
var days=Math.floor(date3/(24*3600*1000));
//计算出小时数
var leave1=date3%(24*3600*1000) //计算天数后剩余的毫秒数
var hours=Math.floor(leave1/(3600*1000))
//计算相差分钟数
var leave2=leave1%(3600*1000) //计算小时数后剩余的毫秒数
var minutes=Math.floor(leave2/(60*1000))
//计算相差秒数
var leave3=leave2%(60*1000) //计算分钟数后剩余的毫秒数
var seconds=Math.round(leave3/1000)

var str='';
str +=days+'&nbsp;天&nbsp;';
str +=hours+'&nbsp;小时&nbsp;';
str +=minutes+'&nbsp;分钟&nbsp;';
str +=seconds+'&nbsp;秒&nbsp;';
return str; 

}



