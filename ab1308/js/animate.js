// JavaScript Document
function f(){
		$(".banner_ad").animate({left:-960},1000,function(){
			$(".banner_ad img:first").insertAfter($(".banner_ad img:last"));
			$(".banner_ad").css({left:0});
	})
	}
		
	setInterval(f,3000);
	