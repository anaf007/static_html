// JavaScript Document
$(function(){
	function f(){
		$(".rollBox").animate({left:-244},2000,function(){
			$(".rollBox li:first").insertAfter($(".roll a:last"));
			$(".rollBox").css({left:0});
	});
	}
	setInterval(f,3000);
})
$(function(){
	$(".rollBox").mouseover(function(){
		$(".rollBox").stop(2000);
		})
})

$(function(){								//css调用
	$(".nn").eq(0).addClass("navBox_1T");
	$(".nn").click(function(){
		$(".nn").removeClass("navBox_1T");
		$(this).addClass("navBox_1T");
		})
})

$(function(){							//点击显示
	$(".switchover").hide();
	$(".switchover").eq(0).show();
	$(".nn").click(function(){
		x=$(".nn").index(this);
		$(".switchover").hide();
		$(".switchover").eq(x).fadeIn(500).show();
		});
})

