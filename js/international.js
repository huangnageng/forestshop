// JavaScript Document
$(function(){
	// 轮播部分
	(function(){
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
			if(num == 0){
				$("#carousel").css("background","#F4E8E8");
				return num;
			}else if(num == 1){
				$("#carousel").css("background","#B7B7C1");
				return num;
			}else if(num == 2){
				$("#carousel").css("background","#FCF6E0");
				return num;
			};

		};

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
			liShow(i);
			var num = i;
			timer = setInterval(function(){
				liShow(num);
				num ++;
				if(num == (length+1)){
					num = 0;
				};
			},2000);
			// set
			return num = i;
		});
	})();
	

	// 轮播的右边部分的特效
	function carouselSlipe(th){
		timer = setInterval(function(){
			th.animate({"right":"15px"},"slow",function(){
				th.animate({"right":"0"});
			});
		},2000);
	};
	
	carouselSlipe($(".carouselRight"));

	$(".carouselRight").hover(function(){
		clearInterval(timer);
	},function(){
		carouselSlipe($(".carouselRight"));
	});

	// 全球旗舰店部分的特效
	(function(){
		var one = $(".storefront_one"),
			frontHide = $(".storefront_hide"),
			frontShow = $(".storefront_show"),
			Homehide = $(".storeHome_hide"),
			Homeshow = $(".storeHome_show"),
			two = $(".storefront_two"),
			three = $(".storefront_three");

			// 经过时显示进入店铺的方法
		// function allShow(th){
		// 	timer = setTimeout(function(){
		// 		th.find(frontHide).animate({"opacity":0});
		// 		th.find(frontShow).animate({"opacity":0});
		// 		th.find(Homehide).animate({"opacity":0.5});
		// 		th.find(Homeshow).animate({"opacity":1});
		// 	},200);
		// };
			// 经过时隐藏进入店铺的方法
		// function allHide(th){
		// 	th.find(frontHide).animate({"opacity":0.5});
		// 	th.find(frontShow).animate({"opacity":1});
		// 	th.find(Homehide).animate({"opacity":0});
		// 	th.find(Homeshow).animate({"opacity":0});
		// };
		function visualEffext(id,twoLeft,thereLeft){
			// 经过时显示和隐藏方法
			id.hover(function(){
				var th = $(this);
				timer = setTimeout(function(){
					th.find(frontHide).animate({"opacity":0});
					th.find(frontShow).animate({"opacity":0});
					th.find(Homehide).animate({"opacity":0.5});
					th.find(Homeshow).animate({"opacity":1});
					two.animate({"left":twoLeft});
					three.animate({"left":thereLeft});
				},200);
			},function(){
				clearTimeout(timer);
				var th = $(this);
				th.find(frontHide).animate({"opacity":0.5});
				th.find(frontShow).animate({"opacity":1});
				th.find(Homehide).animate({"opacity":0});
				th.find(Homeshow).animate({"opacity":0});
			});
		};

		visualEffext(one,"726px","963px");
		visualEffext(two,"237px","963px");
		visualEffext(three,"237px","474px");
		



		// 全球旗舰店 经过图片 图片变大
		$(".storefront_allRight li").hover(function(){
			// $(this).find("img").animate({"width":"145px","height":"145px"});
			$(this).find("p").hide();
			$(this).find(".div_show").show();
		},function(){
			// $(this).find("img").animate({"width":"140px","height":"140px"});
			$(this).find("p").show();
			$(this).find(".div_show").hide();
		});


		// 美妆部分的特效
		$(".beauty_left li").hover(function(){
			var th = $(this);
			timer = setTimeout(function(){
				th.find(".beauty_buy").animate({"bottom":"0","opacity":"100"});
			},200)
			
		},function(){
			clearTimeout(timer);
			var th = $(this);
			th.find(".beauty_buy").animate({"bottom":"-25px","opacity":"0"});
		});


	})();


	// 国家馆部分的特效
	(function(){
		var li = $(".word_content li"),
			hidden = $(".word_hidden"),
			hiddenFont = $(".word_hiddenFont");

		function hideShow(id){
			id.hover(function(){
				var th = $(this);
				timer = setTimeout(function(){
					th.find(hiddenFont).animate({"opacity":1,"top":0});
					th.find(hidden).animate({"opacity":0.7,"top":0});
				},200);
				
			},function(){
				var th = $(this);
				clearTimeout(timer);
				th.find(hiddenFont).animate({"opacity":0,"top":"-10px"});
				th.find(hidden).animate({"opacity":0,"top":"-10px"});
			});
		};
		
		hideShow(li);

	})();


})