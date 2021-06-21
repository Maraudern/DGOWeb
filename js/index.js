/* after JS Document */
var after = 0;
var before = 0;
var change = true;
var winHeight = $(window).height();

//当窗体改变时执行
$(window).resize(function() {
	var winHeight = $(window).height();
	$("#rotation").css("height",winHeight);
});

//
function rotation0(){
	$(".picsItem").siblings().removeClass("before").removeClass("after");
	$(".picsItem").eq(before).addClass("before");
	$(".picsItem").eq(after).addClass("after");
	$(".picsItem").eq(after).animate({height:'100%',width:'100%' ,top:'50%' ,left:'50%'},0,rotation1);
}
function rotation1(){
	$(".picsItem").eq(before).animate({height:'80%',width:'80%'},1000,rotation2);
	$(".title").eq(before).addClass("animated fadeOut");
	$(".buttons").eq(before).addClass("animated fadeOut");
}
function rotation2(){
	$(".picsItem").eq(before).animate({left:'-100%'},500,rotation3);
}
function rotation3(){
	$(".title").eq(before).removeClass("animated fadeOut");
	$(".buttons").eq(before).removeClass("animated fadeOut");
}

//每隔十秒执行
let timer = setInterval('scroll()',10000)
function scroll() {
	change = false;
	setTimeout(function () { change = true; }, 1600);
	after ++//点一次元素下标值加一
	before = after - 1;
	if(after > 2){after = 0; before = 2;}
	$(".btnNumItem").eq(after).addClass("btnNumItemActive").siblings().removeClass("btnNumItemActive");//按钮样式更改
	rotation0();
}

//页面准备执行
$(document).ready(function(){
	$("#rotation").css("height",winHeight);
	//按钮（btnNumItem） 点击事件
	$(".btnNumItem").click(function(){	
		if(change == true){
			if(after != $(this).index()){
				clearInterval(timer);
				timer = setInterval('scroll()',10000);
				change = false;
				setTimeout(function () { change = true; }, 1600);
				before = after
				after = $(this).index();//获取点击元素的下标值
				$(this).addClass("btnNumItemActive").siblings().removeClass("btnNumItemActive");//点击按钮 按钮样式更改
				rotation0();
			}
		}
	});
	//按钮（left） 点击事件
	$(".left").click(function(){
		if(change == true){
			clearInterval(timer);
			timer = setInterval('scroll()',10000);
			change = false;
			setTimeout(function () { change = true; }, 1600);
			after --//点一次元素下标值加一
			before = after + 1;
			if(after < 0){after = 2; before = 0;}
			$(".btnNumItem").eq(after).addClass("btnNumItemActive").siblings().removeClass("btnNumItemActive");//点击按钮 按钮样式更改
			rotation0();
		}
	});
	//按钮（right） 点击事件	
	$(".right").click(function(){
		if(change == true){
			clearInterval(timer);
			timer = setInterval('scroll()',10000);
			change = false;
			setTimeout(function () { change = true; }, 1600);
			after ++//点一次元素下标值加一
			before = after - 1;
			if(after > 2){after = 0; before = 2;}
			$(".btnNumItem").eq(after).addClass("btnNumItemActive").siblings().removeClass("btnNumItemActive");//点击按钮 按钮样式更改
			rotation0();
		}
	});
});

//按钮（关于我们） 点击事件
$(".btn1").click(function(){
	var winHeight = $(window).height();
	$("html,body").animate({ scrollTop: winHeight-49 }, 500);
});