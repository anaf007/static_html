// JavaScript Document
$(function(){
	
	
	$(".nav_li").hover(function(){
			x=$(".nav_li").index(this)
			$(".nav_li p").eq(x).addClass('white');
		},function(){
			$(".nav_li p").eq(x).removeClass('white');
			})
			
			
	function f(){
		$(".container").animate({left:-154},500,function(){
			$(".container img:first").insertAfter($(".container img:last"));
			$(".container").css({left:0});
	});
	}
		$(".float_left").click(function(){
			$(".container").animate({left:-154},500)
			
			})
		$(".float_right").click(function(){
			$(".container").animate({left:154},500)
			
			$(".container").css({right:0});
			})
	setInterval(f,3000);
	
	
	
	$(".positon_1 a").addClass("hui")
	$(".positon_1 p").hover(function(){
			n=$(".positon_1 p").index(this)
		},function(){
			$(".positon_1 a").addClass("hui")
			})
	$(".positon_2 a").addClass("hui")
	$(".positon_2 p").hover(function(){
			n=$(".positon_2 p").index(this)
		},function(){
			$(".positon_2 a").addClass("hui")
			})
			
	$(".positon_3 a").addClass("hui")
	$(".positon_3 p").hover(function(){
			n=$(".positon_3 p").index(this)
		},function(){
			$(".positon_3 a").addClass("hui")
			})
			
	$(".positon_1").hide()
	$(".positon_2").hide()
	$(".positon_3").hide()
	$(".enterprise_1").mouseover(function(){
			$(".positon_1").show()
		})
	$(".positon_1").hover(function(){
			$(".positon_1").show()
		},function(){
			$(".positon_1").hide()	
			})
	$(".enterprise_1").mouseout(function(){
			$(".positon_1").hide()
		})
		
	
	$(".enterprise_2").mouseover(function(){
			$(".positon_2").show()
		})
	$(".positon_2").hover(function(){
			$(".positon_2").show()
		},function(){
			$(".positon_2").hide()	
			})
	$(".enterprise_2").mouseout(function(){
			$(".positon_2").hide()
		})
	
	$(".enterprise_3").mouseover(function(){
			$(".positon_3").show()
		})
	$(".positon_3").hover(function(){
			$(".positon_3").show()
		},function(){
			$(".positon_3").hide()	
			})
	$(".enterprise_3").mouseout(function(){
			$(".positon_3").hide()
		})
		
	
	})