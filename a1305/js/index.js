// JavaScript Document
$(function(){
	
	/*二级导航*/
	$(".index").hide()
	$(".nav li").hover(function(){
		n=$(".nav li").index(this);
		$(".nav p").eq(n).addClass("white")
		$(".index").eq(n).show(222)
		$(".nav span").eq(n).css("color","#FFF")
		},function(){
			$(".nav p").eq(n).removeClass("white")
			$(".index").slideUp(222)
			$(".nav span").eq(n).css("color","#78650d")
				})
	/*按钮切换banner*/
	$(".button li").mouseover(function(){
		x=$(".button li").index(this);
		$(".button li").css("background-image","url(images/3_03.png)")
		$(".button li").eq(x).css("background-image","url(images/3_05.png)")
		$(".img_box img").fadeOut(0)
		$(".img_box img").eq(x).fadeIn(333)
	})
	
	/*图文模块*/
	$(".index_list").hover(function(){
		v=$(".index_list").index(this)
		$(".text").eq(v).animate({top:0},222)
		},function(){
			$(".text").animate({top:116},111)
	})
})