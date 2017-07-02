// JavaScript Document
$(function(){							//鼠标移入显示，移除隐藏
	$(".second").hide();
	$(".nav_1").hover(function(){
		n=$(".nav_1").index(this);
		$(".second").eq(n).show(100);
		},function(){
		$(".second").hide(100);	
			})
})

$(function(){								//css调用
	$(".ne_1").eq(0).addClass("ne_1T");
	$(".ne_1").click(function(){
		$(".ne_1").removeClass("ne_1T");
		$(this).addClass("ne_1T");
		})
})

$(function(){							//点击显示
	$(".abstract").hide();
	$(".abstract").eq(0).show();
	$(".ne_1").click(function(){
		x=$(".ne_1").index(this);
		$(".abstract").hide();
		$(".abstract").eq(x).fadeIn(300).show();
		});
})

$(function(){								//css调用
	$(".se_1").eq(0).addClass("se_1T");
	$(".se_1").click(function(){
		$(".se_1").removeClass("se_1T");
		$(this).addClass("se_1T");
		})
})

$(function(){							//点击显示
	$(".select_1").hide();
	$(".select_1").eq(0).show();
	$(".se_1").click(function(){
		x=$(".se_1").index(this);
		$(".select_1").hide();
		$(".select_1").eq(x).fadeIn(300).show();
		});
})


function getStyle(obj,name)						//轮播图
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}

function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}

function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }
	   
	},30)
}

  window.onload = function()
  {
	  var oDiv = document.getElementById('playBox');
	  var oPre = getByClass(oDiv,'pre')[0];
	  var oNext = getByClass(oDiv,'next')[0];
	  var oUlBig = getByClass(oDiv,'oUlplay')[0];
	  var aBigLi = oUlBig.getElementsByTagName('li');
	  var oDivSmall = getByClass(oDiv,'smalltitle')[0]
	  var aLiSmall = oDivSmall.getElementsByTagName('li');
	  
	  function tab()
	  {
	     for(var i=0; i<aLiSmall.length; i++)
	     {
		    aLiSmall[i].className = '';
	     }
	     aLiSmall[now].className = 'thistitle'
	     startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	  }
	  var now = 0;
	  for(var i=0; i<aLiSmall.length; i++)
	  {
		  aLiSmall[i].index = i;
		  aLiSmall[i].onclick = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	  oPre.onclick = function()
	  {
		  now--
		  if(now ==-1)
		  {
			  now = aBigLi.length;
		  }
		   tab();
	  }
	   oNext.onclick = function()
	  {
		   now++
		  if(now ==aBigLi.length)
		  {
			  now = 0;
		  }
		  tab();
	  }
	  var timer = setInterval(oNext.onclick,5000) //滚动间隔时间设置
	  oDiv.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv.onmouseout = function()
	  {
		  timer = setInterval(oNext.onclick,5000) //滚动间隔时间设置
	  }
  }