// JavaScript Document


$(function(){
	var canvas=$(".canvas");
	//console.log(canvas);
	
	//title标题部分
	var cxt=[];
	var i=canvas.length;
	for(var i=0;i<=canvas.length-1;i++){
		cxt.push(canvas[i].getContext("2d"));
		cxt[i].lineWidth=2;
		cxt[i].strokeStyle="#000"
		cxt[i].beginPath();
		cxt[i].moveTo(0,0);
		if( i%2 != 0){
			cxt[i].lineTo(300,120);
			cxt[i].lineTo(300,0);
				
		}else{
			cxt[i].lineTo(0,120);
			cxt[i].lineTo(300,0);	
		}
		cxt[i].closePath();
		cxt[i].stroke();	
		cxt[i].fill();	
		cxt[i].fillStyle="#fff"
		cxt[i].font="30px Arial";		
	};
	cxt[0].fillText("Hot",10,70);
	//canvas.eq(1).css("transform","rotateY(180deg)")
	cxt[1].fillText("Reason",190,70);
	cxt[2].fillText("Home",10,70);
	
	
	/*商品分类经过右列表*/
	$(".sort_li").hover(function(){
		$(this).css("background","#fff");
		$(this).find(".sort_list").show();
	},function(){
		$(this).css("background","#eee");
		$(this).find(".sort_list").hide();
	});
	
	
	// 品牌特效
	$(".hot_brand span").children("a").hover(function(){
		$(this).find("img").animate({"opacity":"0.5"})
	},function(){
		$(this).find("img").animate({"opacity":"1"})
	});


	// 打造爱巢特效

	$(".home_main li").hover(function(){
		var th = $(this);
		timer = setTimeout(function(){
			th.find(".home_mainShow").animate({"opacity":"1","left":0});
		},200);
		
	},function(){
		clearTimeout(timer);
		$(this).find(".home_mainShow").animate({"opacity":"0","left":"-35px"})
	});

	
	//左侧边栏
	$(window).scroll(function(){
		var toolsLeft = $(".tools_left");
		var wh = $(window).scrollTop();
		if(wh > 400){
			var toolsLeftLi = $(".tools_left ul li")
			toolsLeft.fadeIn();
			if(wh > 700){
				toolsLeftLi.eq(1).css("opacity","1");
				toolsLeftLi.eq(2).css("opacity","0.5");
				toolsLeftLi.eq(3).css("opacity","0.5");
				if(wh > 1100){
					toolsLeftLi.eq(2).css("opacity","1");
					toolsLeftLi.eq(1).css("opacity","0.5");
					toolsLeftLi.eq(3).css("opacity","0.5");
					if(wh > 1500){
						toolsLeftLi.eq(3).css("opacity","1");
						toolsLeftLi.eq(1).css("opacity","0.5");+2
						toolsLeftLi.eq(2).css("opacity","0.5");
					}
				}
			}	
		}else{
			toolsLeft.fadeOut()	
		};	
	});
	$(".tools_left ul li").hover(function(){
		$(this).css({"opacity":1,"filter":"alpha(opacity=100)"})
	},function(){
		$(this).css({"opacity":0.5,"filter":"alpha(opacity=50)"})
	});
	
	
	//固定搜索框
	$(window).scroll(function(){
		var wh = $(window).scrollTop();
		var fixedSearch = $(".fixed_search");
		if(wh > 600){
			fixedSearch.slideDown("fast")	
		}else{
			fixedSearch.slideUp("fast")	
		}	
	});
	

	//var ip = "192.168.191.2:8080";
	
	

	// 轮播效果
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

		// 图片自动轮播
		function liShow(num){
			boxImg.eq(num).animate({"opacity":1}).siblings().animate({"opacity":0});
			boxFont.eq(num).animate({"opacity":0.7}).siblings().animate({"opacity":0.3});
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

		// 经过小黑点时的效果
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
		});
	})();
	

	// // 上下轮播效果
	// 	var num=1;
	// 	var boxImg = $(".box_slider");
	// 	// 加了var和不加var有什么区别
	// 	myTimer = setInterval(function(){
	// 		panner(num);
	// 		num++;
	// 		if(num==6){
	// 			num=1;
	// 		}
	// 	},2000)
	// 	function panner(num){
	// 		var height = $(".box_slider").height();
	// 		boxImg.animate({"marginTop":-height*(num-1)+"px"},2000);
	// 		// .attr("src","images/index/carousel" + num + ".jpg");
					
	// 		$(".box_font li").eq(num-1).css("background","#000").siblings().css("background","#999");
	// 	};

	// 	boxImg.hover(function(){
	// 		clearInterval(myTimer);
	// 	},function(){
	// 		myTimer = setInterval(function(){
	// 			panner(num);
	// 			num++;
	// 			if(num==6){
	// 				num=1;
	// 			}
	// 		},2000)
	// 	})

	// 	$(".box_font li").mouseover(function(){
	// 		clearInterval(myTimer);
	// 		var liNum = $(this).index() + 1;
	// 		boxImg.attr("src","images/index/carousel" + liNum + ".jpg");
	// 		$(".box_font li").eq(liNum-1).css("background","#000").siblings().css("background","#999");
	// 		var num = liNum;
	// 		myTimer = setInterval(function(){
	// 			panner(num);
	// 			num++;
	// 			if(num==6){
	// 				num=1;
	// 			}
	// 		},3000)
	// 	});



 })


// obj.siblings()，选取该节点的兄弟节点（不包括obj自己）


























