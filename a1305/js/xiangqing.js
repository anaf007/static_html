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
})