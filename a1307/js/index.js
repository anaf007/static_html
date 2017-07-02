// JavaScript Document
$(function(){
	function f(){
		$(".container").animate({left:-946},1000,function(){
			$(".container img:first").insertAfter($(".container img:last"));
			$(".container").css({left:0});
	});
	}
	setInterval(f,4000);
	
})

$(function(){
	function f(){
		$(".img_left").animate({left:-190},1000,function(){
			$(".img_left img:first").insertAfter($(".img_left img:last"));
			$(".img_left").css({left:0});
	});
	}
	setInterval(f,2000);
	
})

$(function(){
	var n=0;
	$(".left_button").click(function(){
		/*if(n<999){
			n=n+1;	
		}else{
			n=0;	
		}*/
		$(".img_left").animate({left:-190},1000)
		})
})

$(function(){
	$(".right_button").click(function(){
		$(".img_left").animate({right:-190},333)
			})
})