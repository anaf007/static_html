;(function () {
//<!-- 移除类名收起 service-expanded，默认展开 -->

	if(window['dimensional'] || window['kefu_qq'] || window['wei_config']) {

		function AddFavorite2(title, url) {
            try {
                window.external.addFavorite(url, title);
            }
            catch (e) {
                try {
                    window.sidebar.addPanel(title, url, "");
                }
                catch (e) {
                    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
                }
            }
        }
        function $$(ID){
        	return document.getElementById(ID);
        }
		var css = document.createElement('link');
		css.type = 'text/css';
		css.rel = "stylesheet";

		var cacth = [];

		var is_show = 'service-expand'; 
		if(Util_115.Cookie.get('qq_drift') && Util_115.Cookie.get('qq_drift') == '1') {
			is_show = '';
		}

		cacth.push('<div class="service-handle"><a class="ssbtn handle-'+(is_show.length ? 'close' : 'expand')+'" title="'+(is_show.length ? '隐藏工具条' : '显示工具条')+'"  href="javascript:;">'+
						'<i class="ss-arrow ssa-'+(is_show.length ? 'right': 'left')+'"></i>'+
						'<span>'+(is_show.length ? '隐藏工具条' : '显示工具条')+'</span>'+
					'</a></div>')
		cacth.push('<div class="service-cont">');

		/*二维码*/
		if(window['dimensional']) {
			cacth.push('<a href="javascript:;" class="ssbtn" title="扫描访问手机站" id="js-code_area">'+
								'<i class="ss-icon ssi-code"></i><span>二维码</span>'+
				    			//'<img src="'+window['dimensional'].split(',')[0]+'" width="116" height="116">'+
				    	'</a>');
		}


		if(window['wei_fav']) {
			cacth.push('<a class="ssbtn" href="javascript:;" title="收藏本站" onclick="javascript:AddFavorite && AddFavorite(\''+window['wei_fav'].title+'\', \''+window['wei_fav'].url+'\');">'+
		    			'<i class="ss-icon ssi-fav"></i>'+
		    			'<span>收藏本站</span>'+
		    		'</a>');
		}

		

		/*QQ*/
		if(window['kefu_qq'] && kefu_qq.length) {
			/*样式加载*/
			kefu_qq = kefu_qq.split(',');
		    for(var i=0, len = kefu_qq.length; i<len; i++) {
				cacth.push('<a class="ssbtn" title="QQ:'+kefu_qq[i]+'" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin='+kefu_qq[i]+'&site=qq&menu=yes">'+
				    			'<i class="ss-icon ssi-qq"></i>'+
				    			'<span>'+kefu_qq[i]+'</span>'+
			                '</a>');
			}
		}

		if(window['wei_config']) {
			var wei_config = window['wei_config'];
			for(var i in wei_config) {
				if(wei_config[i].length) {
					if(i == 'qrcode')
					{
						continue;
					}
					cacth.push('<a class="ssbtn" title="'+(i == 'weixin' ? '腾讯微信' : (i == 'tencent' ? '腾讯微博': '新浪微博') )+'" href="'+(i == 'weixin' ? 'javascript:;" id="js-weixin_open'  : wei_config[i])+'" target="_blank">'+
			    			'<i class="ss-icon ssi-'+i+'"></i>'+
			    			'<span>'+(i == 'weixin' ? '腾讯微信' : (i == 'tencent' ? '腾讯微博': '新浪微博') )+'</span>'+
			    		'</a>');
				}
			}
			
		}

		
		cacth.push('</div>');
		cacth.push('<div class="service-bottom"><a class="ssbtn" title="回顶部" href="javascript:;" onclick="javascript:$(document).scrollTop(0);">'+
				    	'<i class="ss-arrow ssa-up"></i>'+
				    	'<span>回顶部</span>'+
				    '</a></div>');
		


	 	var is_qq_position = window['is_qq_position'] ? true : false;
		var service_side = document.createElement('div');
		service_side.className = 'service-side '+ is_show;
		service_side.style.zIndex = 49;
		service_side.innerHTML = cacth.join('');

		if(is_qq_position) {
			service_side.style.display = 'none';
		}


		service_side.firstChild.firstChild.onclick = function () {

			if(is_qq_position) {
				service_side.style.display = 'none';
				return false;
			}


			var cls = service_side.className;
			if(cls.indexOf('expand') != -1) {
				service_side.className = 'service-side';
				var el = this;

				if(Util_115 && Util_115.Cookie) {
					Util_115.Cookie.set('qq_drift', '1');
				}
				setTimeout(function () {
					el.className = 'ssbtn handle-expand';
					el.title = '显示工具条';
					el.innerHTML = '<i class="ss-arrow ssa-left"></i><span>显示工具条</span>';
				},100);
			}else {
				service_side.className = 'service-side service-expand';
				this.className = 'ssbtn handle-close';
				this.title = '隐藏工具条';
				this.innerHTML = '<i class="ss-arrow ssa-right"></i><span>隐藏工具条</span>';
				if(Util_115 && Util_115.Cookie) {
					Util_115.Cookie.set('qq_drift', '0');
				}
			}
		}

		var addPlug = function () {
			css.onload = function () {
                                var code_show;					
				var weixin_open;
                                var $code_box;
				document.body.appendChild(service_side);
				service_side.style.marginTop = -(service_side.offsetHeight/2)+'px';
				if(window['wei_config'] && wei_config.qrcode && wx_config.wx_fixed == '1' ){
				    var $ss = $(' <div class="code-corner" style="display: ;"><p class="code-area js-code"><img src="'+wei_config.qrcode+'"></p><a href="javascript:;" class="close js-close">关闭</a><p class="desc">我们的二维码</p></div>')
				    $(document.body).append($ss);
				    $ss.find('.js-close').click(function(event) {
				    	/* Act on the event */
				    	$ss.remove();
				    	return false;
				    });
                                    
				    $ss.find('.js-code').click(function(event) {
				    	//$('#js-weixin_open').click();
                                        if(!$code_box) {
                                            $code_box = $('<div class="code-popup" style="display:none;z-index:99"><p class="code-area"><img src="'+window['wei_config']['qrcode']+'"></p><a href="javascript:;" class="close js-close">关闭</a><p class="desc">扫描关注我们</p></div>')
                                               $(document.body).append($code_box);
                                               $code_box.find('.js-close').click(function(){
                                                   $code_box.hide();
                                                   return false;
                                               })
                                                
                                        }
                                        $code_box.show();
                                        if(code_show) {
                                                code_show.style.display = 'none';
                                        }
                                        if(weixin_open) {
                                                weixin_open.style.display = 'none';
                                        }
                                        
				    	return false;
				    });
				}	

				

				setTimeout(function () {
					
					if($$('js-code_area')) {	
						$$('js-code_area').onclick = function (e) {
							if(!code_show) {
								code_show = document.createElement('div');
								code_show.style.display = 'none';
								code_show.className = 'code-popup';
								code_show.style.zIndex = '99';
								code_show.innerHTML = '<p class="code-area"><img src="'+window['dimensional'].split(',')[0]+'"></p><a href="javascript:;" class="close" id="js-code_close">关闭</a><p class="desc">扫描访问手机站</p>'
								document.body.appendChild(code_show);
								code_show.getElementsByTagName('a')[0].onclick = function (e) {
									code_show.style.display = 'none';
									e = e || window.event;  
								    if(e.stopPropagation) { //W3C阻止冒泡方法  
								        e.stopPropagation();  
								    } else {  
								        e.cancelBubble = true; //IE阻止冒泡方法  
								    } 
								}
							}
							code_show.style.display = 'block';
                                                        if( $code_box){
                                                             $code_box.hide();
                                                        }
							if(weixin_open) {
								weixin_open.style.display = 'none';
							}
							e = e || window.event;  
						    if(e.stopPropagation) { //W3C阻止冒泡方法  
						        e.stopPropagation();  
						    } else {  
						        e.cancelBubble = true; //IE阻止冒泡方法  
						    } 
						    
						    return false;
						}
					}

					if($$('js-weixin_open')) {
						$$('js-weixin_open').onclick = function (e) {
							if(!weixin_open) {
								weixin_open = document.createElement('div');
								weixin_open.style.display = 'none';
								weixin_open.className = 'code-popup';
								weixin_open.style.zIndex = '99';
								weixin_open.innerHTML = '<p class="code-area"><img src="'+window['wei_config']['weixin']+'"></p><a href="javascript:;" class="close">关闭</a><p class="desc">扫描关注我们</p>'
								document.body.appendChild(weixin_open);
								weixin_open.getElementsByTagName('a')[0].onclick = function (e) {
									weixin_open.style.display = 'none';
									e = e || window.event;  
								    if(e.stopPropagation) { //W3C阻止冒泡方法  
								        e.stopPropagation();  
								    } else {  
								        e.cancelBubble = true; //IE阻止冒泡方法  
								    } 
								}
							}
							weixin_open.style.display = 'block';	
                                                        if( $code_box){
                                                             $code_box.hide();
                                                        }
							if(code_show) {
								code_show.style.display = 'none';
							}

							e = e || window.event;  
						    if(e.stopPropagation) { //W3C阻止冒泡方法  
						        e.stopPropagation();  
						    } else {  
						        e.cancelBubble = true; //IE阻止冒泡方法  
						    } 
						    return false;
						}
						
					}

				},0)
			}
			css.href = '/static/service-side/css/style.css';
			document.body.appendChild(css);
		}

		$(function () {
			addPlug();
			try{
				var top = parent.window;
				var frame_main = $(top.document.getElementById('frame_main'));
				var frame_web = $(top.document.getElementById('frame-web'));
				if(frame_main.length) {
					$(document.body).css('overflow-x','hidden');
					frame_main.height($(document.body).outerHeight()+10);
					setTimeout(function () {
						top.UtilLin.setHeight&&top.UtilLin.setHeight();
					},250)
				}
				if(frame_web.length) {
					$(document.body).css('overflow-x','hidden');
					frame_web.height($(document.body).height());
					setTimeout(function () {
						top.UtilLin.setHeight&&top.UtilLin.setHeight();
					},250)
				}
			}catch(e){}
		})
	}
})(window);