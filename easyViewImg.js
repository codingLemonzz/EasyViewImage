
	function easyViewImg(classNameArr,expandWidthParam,expandHeightParam){
		//设置需执行方法的所有img的classname
		var imgClassName = '';
		if(!classNameArr) imgClassName = 'img';
		if(typeof classNameArr === "string") imgClassName = '.'+classNameArr;
		if(Array.isArray(classNameArr)){
			for (var i = 0; i < classNameArr.length; i++) {
				imgClassName+='.'+classNameArr[i];
				if(i < classNameArr.length-1) imgClassName +=",";
			}
		}
		//设置默认图片放大系数
		if(!expandWidthParam) expandWidthParam = 1.5;
		if(!expandHeightParam) expandHeightParam = 1.5;
		
		//添加执行方法
		$(document).on('click',imgClassName,function(){
		//获取图片路径
		var that = this;
		var url = $(that)[0].src;
		var imgHeight = $(that)[0].height * expandHeightParam;
		var imgWidth = $(that)[0].width * expandWidthParam;
		var screenHeight = window.screen.height;
		var screenWidth = window.screen.width;
		
		//若放大后的图片大小超过了当前屏幕的大小，则设置合适的图片大小
		if(imgHeight > screenHeight*0.8 || imgWidth > screenWidth *0.8){
			if((imgWidth/imgHeight) > screenWidth/screenHeight){
				imgWidth = screenWidth*0.8;
				imgHeight = imgHeight * imgWidth / ($(that)[0].width * expandWidthParam);
			}else {
				imgHeight = screenHeight*0.8;
				imgWidth = imgHeight * imgWidth / ($(that)[0].height * expandHeightParam);
			}
		}

		var div = document.createElement("div");
		div.className = 'shade_temp_div';
		div.style.cssText = "background:#000000;opacity:0.3;position:absolute;z-index:20190226;left:0px;top:0px;width:"+$(document).width()+"px;height:"+$(document).height()+"px;text-align:center;";
		document.body.insertBefore(div,document.body.lastChild);
		var imgDiv = document.createElement("div");
		imgDiv.className = 'shade_temp_div shade_temp_div_img';
		var left = (screenWidth - imgWidth)/2;
		var top = (screenHeight - imgHeight)/2 - 80;
		imgDiv.style.cssText = 'text-align: center;position: fixed;left: '+left+'px;top: '
		+top+'px;z-index: 20190227;width: auto;height: auto;box-shadow:0px 0px 50px rgba(0,0,0,0.6),0 0 100px rgba(0,0,0,0.1)';
		imgDiv.innerHTML='<img src="'+url+'" style="width:'+imgWidth+'px;height:'+imgHeight+'px;"/>';
		document.body.insertBefore(imgDiv,document.body.lastChild);
		$(".shade_temp_div_img").hide(0);
		$(".shade_temp_div_img").fadeIn(500);
		sessionStorage.setItem("hidden_img_sign",(screenHeight - imgHeight)/2- 80);
		});
		
		$(window).bind("scroll",function(){
			var scrollTop = $(this).scrollTop();
			var top = sessionStorage.getItem("hidden_img_sign");
			if(top) $(".shade_temp_div_img").css("top",parseFloat(top)+"px");
		});
	}
		
	$(document).on('click','.shade_temp_div',function(){
		$('.shade_temp_div').hide();
		$(".shade_temp_div").remove();
		sessionStorage.setItem("hidden_img_sign",null);
	});
		
