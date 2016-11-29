// JavaScript Document
$(function(){
	
	//固定评价框
	$(window).scroll(function(){
		var wh = $(window).scrollTop();
		var h = $(".details_center_title").offset().top;
		if(wh > h){
			$("#eva_frame").show();
		}else{
			$("#eva_frame").hide();
		}
	});


	$(".goods_img li").mouseover(function(){
		var goodsImg = $(this).find("img").attr("src");
	 	$(".smallPic").attr("src",goodsImg);
	 	$(".largePic").find("img").attr("src",goodsImg);
	});

	$("#colorSort a").click(function(){
		$(this).css({"border":"2px #c66 solid"}).siblings().css({"border":"2px #000 solid"});
		var goodsImg = $(this).find("img").attr("src");
	 	$(".smallPic").attr("src",goodsImg);
	 	$(".largePic").find("img").attr("src",goodsImg);
	});

	$("##sizeSort a").click(function(){
		$(this).css({"border":"2px #c66 solid"}).siblings().css({"border":"2px #000 solid"});
	});
	// 累计评价点击事件
	// $(".cumulative_asse").click(function(){
	// 	var detailsH = $(".details_center_title").offset().top;
	// 	var asseH = $(".assessment_list_content").offset().top;
	// 	var cumulativeH = asseH - detailsH;
	// 	$(".details_center_content").animate({"marginTop":cumulativeH})
	// })

	// 商品详情以及累计评价点击事件
	(function(){
		var Des = $(".description"),
			Details = $("#details_center_content"),
			Ass = $(".assessment_list_title");
			first = $(".detailSwitch ul li:first-child");
			last = $(".detailSwitch ul li:last-child");
		// 商品详情的点击事件
		$(".cumulative_asse").click(function(){
			Des.hide();
			Details.children("img").hide();
			Ass.find("h4").hide();
			$(".assessment_list_title").children("ul").css({"top":"10px"});
			first.find("a").css({
				"border-top":"3px #fff solid",
				"color":"#000",
				"font-weight":"normal",
				"border-right":"none",
			});
			last.find("a").css({
				"border-top":"3px #c66 solid",
				"color":"#c66",
				"font-weight":"bold",
				"border-right":"1px #ccc solid",
				"border-left":"1px #ccc solid",
			});
		});

		// 累计评论的点击事件
		$(".product_details").click(function(){
			Des.show();
			Details.children("img").show();
			Ass.find("h4").show();
			$(".assessment_list_title").children("ul").css({"top":"45px"});
			first.find("a").css({
				"border-top":"3px #c66 solid",
				"color":"#c66",
				"font-weight":"bold",
				"border-right":"1px #ccc solid",
			});
			last.find("a").css({
				"border-top":"3px #fff solid",
				"color":"#000",
				"font-weight":"normal",
				"border-right":"none",
				"border-left":"none",
			});
		});

		$(".original").click(function(){
			$("html").scrollTop(931);
		});
	})();
	
	//看了又看的上下页效果
	(function(){
		// $(document).on("click","#skipLast",function(){
		// 	alert()
		// })
		// $("#skipLast").on("click",function(){
		// 	alert()
		// })
		var num = 0,
			last = $("#skipLast"),
			next = $("#skipNext"),
			liLength = $("#goods_right_news ul li").length,
			totalNum = liLength/3;
		//点击下一页的效果
		next.click(function(){
			if(num < (totalNum-1))num++;
			$("#goods_right_news ul").animate({
				"marginTop":num * -540 + "px",
			})
			originalColor(last);
			if(num > (totalNum-2)){
				num = totalNum-1;
				changeColor(next);
			}
			return num;
		});

		// 点击上一页的效果
		last.click(function(){
			if(num > 0)num--;
			$("#goods_right_news ul").animate({
				"marginTop":num * -540 + "px",
			})
			originalColor(next);
			if(num < 1){
				num = 0;
				changeColor(last);
			}
			return num;
		});

		// 按钮颜色变化
		function originalColor(id){
			id.css({"color":"#666"}).hover(function(){
				id.css({"color":"#c66"})
			},function(){
				id.css({"color":"#666"})
			});
		}

		function changeColor(id){
			id.css({"color":"#ccc"}).hover(function(){
				id.css({"color":"#ccc"})
			},function(){
				id.css({"color":"#ccc"})
			})
		};

	})();

	//放大镜效果
	(function(){
		var smallImg = $(".smallPic"),
			mag = $(".magnifier"),
			big = $(".largePic"),
			bigImg = $(".largePic img"),
			//放大镜的和宽高
			magWidth = mag.width(),
			magHeight = mag.height(),

			//小图片的宽高
			smallW = smallImg.width(),
			smallH = smallImg.height(),

			//小图片距离页面的位置
			smallT = smallImg.offset().top,
			smallL = smallImg.offset().left;

		function magMove(x,y){
			mag.show();
			big.show();
				//求得鼠标在小图片中的坐标
			var mousePT = y-smallT,
				mousePL = x-smallL,
				//放大镜的上下位置
				magTop = mousePT-magHeight/2,
				magLeft = mousePL-magWidth/2;

			if(magTop < 0)magTop=0;
			if(magLeft < 0)magLeft=0;
			if(magTop > (smallH-magHeight))magTop=(smallH-magHeight);
			if(magLeft > (smallW-magWidth))magLeft=(smallW-magWidth);

			// 鼠标移动时放大镜的位置
			mag.css({"top":magTop + "px","left":magLeft + "px"});

			//大图片的偏移位置
			var bigImgT = (smallH*magTop)/magHeight,
				bigImgL = (smallW*magLeft)/magWidth;
			bigImg.css({"top":-bigImgT + "px","left":-bigImgL + "px"});
		}

		//经过小图片时触发
		smallImg.mouseover(function(event){
			//求得鼠标在页面中的坐标
			var x=event.pageX,
				y=event.pageY;
			magMove(x,y);
			//放大镜移动时触发
			mag.mousemove(function(event){
				//求得鼠标在页面中的坐标
				var x=event.pageX,
					y=event.pageY;
				magMove(x,y);
				// console.log(magTop + "---" + magLeft);
			});
		});
		mag.mouseout(function(){
			mag.hide();
			big.hide();
		});

	})();


	// 商品详情右边的监听部分
	(function(){
			// 定义右边的li
		var detailLi = $(".details_right li"),
			// 定义左边的被监听部分
			description = $(".description").offset().top,
			asseList = $("#assessment_list").offset().top,
			look = $(".look").offset().top;
		$(window).scroll(function(){
			var wh = $(window).scrollTop();
			console.log(wh +"--"+asseList+"--"+description);
			// alert(wh +"--"+imageShow);
			if(wh > description){
				detailLi.eq(1).css({"background":"#c66","color":"#fff"});
			};
			// alert(top+"--"+imageShow);
		});
	})();

})

// offset() 方法设置或返回被选元素相对于文档的偏移坐标。