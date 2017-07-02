// JavaScript Document
/*首页*//*导航*/
$(function(){
	$(".second").hide();
	$(".single").hover(function(){
		n=$(".single").index(this);
		$(".second").eq(n).show();
		},function(){
		$(".second").hide();	
			})
})

$(function(){
	$(".title").mouseover(function(){
		$(".title").removeClass("titleT");
		$(this).addClass("titleT");
		})
})

/*通栏*/
$(function(){
	function f(){
		$(".roll").animate({left:-1600},1000,function(){
			$(".roll img:first").insertAfter($(".roll img:last"));
			$(".roll").css({left:0});
	});
	}
	setInterval(f,3000);
})

$(function(){
	$(".button li").mouseover(function(){
		$(".button li").removeClass("buttonT");
		$(this).addClass("buttonT");
		})
})

/*$(function(){
    $(".roll img").hide();
		$(".roll img").eq(0).show();
	$(".b-1").click(function(){
		x=$(".b-1").index(this);
		$(".roll img").hide();
		$(".roll img").eq(x).fadeIn(1000).show();
		})	
})*/
$(function(){
	$(".roll img").hide();
	$(".roll img").eq(0).show();
	$(".b-1").click(function(){
		$(".roll img").hide();
		$(".r-1").fadeIn(500).show();
	});	
	$(".b-2").click(function(){
		$(".roll img").hide();
		$(".r-2").fadeIn(500).show();
	});
	$(".b-3").click(function(){
		$(".roll img").hide();
		$(".r-3").fadeIn(500).show();
	});
	$(".b-4").click(function(){
		$(".roll img").hide();
		$(".r-4").fadeIn(500).show();
	});
})


/*企业创始人*/
$(function(){
	function f(){
		$(".move").animate({left:-166},1000,function(){
			$(".move div:first").insertAfter($(".move div:last"));
			$(".move").css({left:0});
	});
	}
	setInterval(f,3000);
})

$(function(){
	$(".re-1").mouseover(function(){
		$(".re-1").removeClass("referralT");
		$(this).addClass("referralT");
		})
})

$(function(){
    $(".segment").hide();
		$(".segment").eq(0).show();
	$(".re-1").mouseover(function(){
		x=$(".re-1").index(this);
		$(".segment").hide();
		$(".segment").eq(x).show();
		})	
})


/*产品展示*/
$(function(){
    $(".sublevel img").hide();
		$(".sublevel img").eq(0).show();
	$(".ci-1").click(function(){
		x=$(".ci-1").index(this);
		$(".sublevel img").hide();
		$(".sublevel img").eq(x).show();
		})	
})

$(function(){
	$(".ci-1").mouseover(function(){
		$(".ci-1").removeClass("circleButtonT");
		$(this).addClass("circleButtonT");
		})
})


/*电热水龙头系列*/
$(function(){
	$(".boxes").hover(function(){
			x=$(".boxes").index(this)
			$(".pull").eq(x).animate({top:0},200);
		},function(){
			$(".pull").eq(x).animate({top:150},200);
			});
})

$(function(){
	$(".two").click(function(){
		$(".two").removeClass("twoT");
		$(this).addClass("twoT");
		})
})
$(function(){
	$(".two_1").click(function(){
		$(".two_1").removeClass("twoT");
		$(this).addClass("twoT");
		})
})
$(function(){
	$(".two_2").click(function(){
		$(".two_2").removeClass("twoT");
		$(this).addClass("twoT");
		})
})
$(function(){
	$(".two_3").click(function(){
		$(".two_3").removeClass("twoT");
		$(this).addClass("twoT");
		})
})

/*商品详情页*/
$(function(){
    $(".large img").hide();
		$(".large img").eq(0).show();
	$(".petite img").mouseover(function(){
		x=$(".petite img").index(this);
		$(".large img").hide();
		$(".large img").eq(x).show();
		})	
})

$(function(){
	$(".elect li").mouseover(function(){
		$(".elect li").removeClass("electT");
		$(this).addClass("electT");
		})
})

$(function(){
    $(".describe").hide();
		$(".describe").eq(0).show();
	$(".elect li").mouseover(function(){
		x=$(".elect li").index(this);
		$(".describe").hide();
		$(".describe").eq(x).show();
		})	
})


