// JavaScript Document
$(function(){
	// 标题的展示部分
	(function(){
		$(".eat_show").hover(function(){
			$(".eat_ol").show();
		},function(){
			$(".eat_ol").hide();
		});
		$(".eat_ol").hover(function(){
			$(".eat_ol").show();
		},function(){
			$(".eat_ol").hide();
		});


		// 轮播部分
		var num = 1,
			boxImg = $("#box_img li"),
			boxFont = $("#box_font li");
		var length = boxImg.length,
			timer = setInterval(function(){
			liShow(num);
			num ++;
			if(num == (length+1)){
				num = 0;
			};
		},2000);

		// 图片自动轮播部分
		function liShow(num){
			boxImg.eq(num).animate({"opacity":1}).siblings().animate({"opacity":0});
			boxFont.eq(num).animate({"opacity":0.7}).siblings().animate({"opacity":0.3});
		};
		// 经过图片时暂停
		boxImg.hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				liShow(num);
				num ++;
				if(num == (length+1)){
					num = 0;
				};
			},2000);
		});
		// 经过小黑点的效果
		boxFont.mouseover(function(){
			clearInterval(timer);
			var i = $(this).index();
			boxImg.eq(i).animate({"opacity":1}).siblings().animate({"opacity":0});
			boxFont.eq(i).animate({"opacity":0.7}).siblings().animate({"opacity":0.3});
			var num = i;
			timer = setInterval(function(){
				liShow(num);
				num ++;
				if(num == (length+1)){
					num = 0;
				};
			},2000);
			// set
		});

	})();
	
	// 精选部分的渐变阴影效果
	function gradient(th){
		timer = setTimeout(function(){
			th.find(".eat_shadow").animate({"height":"200px"});
			th.find(".eat_shadowHide").animate({"opacity":"1"});
			th.find(".eat_shadow h3").animate({"margin-top":"20px"});
		},200);
	}
	
	$(".eat_content ul li a").hover(function(){
		var th = $(this);
		gradient(th);

	},function(){
		clearTimeout(timer);
		$(this).find(".eat_shadow").animate({"height":"100px"});
		$(this).find(".eat_shadowHide").animate({"opacity":"0"});
		$(this).find(".eat_shadow h3").animate({"margin-top":"60px"});
	});
	

	// 固定搜索框
	$(window).scroll(function(){
		var wh = $(window).scrollTop(),
			top = $(".header_content").offset().top,
			search = $("#search_frame");
		if(wh >= top){
			search.show()	
		}else{
			search.hide()	
		}	
	})

})