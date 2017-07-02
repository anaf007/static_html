var transitionstext = new Array;
transitionstext[0] = "progid:DXImageTransform.Microsoft.GradientWipe(duration=0.5)"; /** 从左往右渐变出 */
transitionstext[1] = "progid:DXImageTransform.Microsoft.Fade(duration=1)"; /** 整体渐变出 */
transitionstext[2] = "progid:DXImageTransform.Microsoft.Blinds(Duration=0.7,bands=20)"; /** 横向百叶窗 */
transitionstext[3] = "progid:DXImageTransform.Microsoft.Checkerboard(Duration=0.7,squaresX=20,squaresY=20)"; /** 方块百叶窗 */
transitionstext[4] = "progid:DXImageTransform.Microsoft.RandomDissolve(Duration=0.7,orientation=vertical)"; /** 随机点 */
transitionstext[5] = "progid:DXImageTransform.Microsoft.RandomBars(Duration=0.7,orientation=vertical)"; /** 随机竖线 */

var MaxImg;
var NowImg = 1;
var begin;
var interval = 4000;  /** 切换间隔 */
var hasNum=false;  /** 是否有数字快捷切换的判断 */

function initMax(){  /** 修正总数并触发动作 */
  for (var i=1;i<=20;i++){
    if(!document.getElementById("pic"+i)){
      MaxImg=i-1;
      break;
    }else{
      addMouseActions(document.getElementById("pic"+i));
    }
  }  

  if(document.getElementById("num1")) hasNum=true;
  if(MaxImg > 0)
    playit();  /**   第一次开始计时 */
}

function initialization(){   /**  自动切换 */
  if(NowImg == MaxImg) 
    next = 1;
  else
   next = NowImg + 1;

  document.getElementById("pic" + next).style.display="";
  filterShowIt(document.getElementById("pic" + next));
  document.getElementById("pic" + NowImg).style.display="none";

  if(hasNum) {
    for (var i=1;i<=MaxImg;i++){
       document.getElementById("num"+i).className="link";
      if(i == next){
        document.getElementById("num"+i).className="current";
      }
    }      
  }

  if(NowImg == MaxImg) 
    NowImg = 1;
  else
    NowImg++;    

  playit();    /**  新的计时 */

}

function showit(x){    /**   手动切换 */
  if(NowImg==x)return;
  if(MaxImg > 1){
    stopit();
    for (var i=1;i<=MaxImg;i++){
      document.getElementById("pic" + i).style.display="none";
      if(hasNum)
        document.getElementById("num"+i).className="link";
      if(i == x){
        document.getElementById("pic" + i).style.display="block";
        if(hasNum)
          document.getElementById("num"+i).className="current";
        filterShowIt(document.getElementById("pic" + i));
      }    
    }  
    NowImg=x;
  }
}

function playit(){  /**  重新开始自动计时 */
  if(MaxImg > 1){
    clearTimeout(begin); 
    begin = setTimeout('initialization()', interval);  
  }
}

function stopit(){   /**  停止计时 */
  if(MaxImg > 1)
    clearTimeout(begin); 
}

function filterShowIt(crosstick){    /**  添加切换的滤镜效果 */
  if(document.body.getAttribute('cms:paFlag') )return;
  if (!crosstick.filters)return;
  var innerHtml = crosstick.innerHTML;
  crosstick.innerHTML="";
  crosstick.style.filter=transitionstext[Math.floor(Math.random() * (transitionstext.length))];
  crosstick.filters[0].Apply();
  crosstick.innerHTML =innerHtml; 
  crosstick.filters[0].play();
}

function addMouseActions(obj){  /**  给对象增加鼠标事件：移入停止、移出开始 */
  obj.onmouseover=function(){
    stopit();
  }

  obj.onmouseout=function(){
    playit();
  }
}

if(document.all)
window.attachEvent('onload',initMax);
else
window.addEventListener('load',initMax,false);