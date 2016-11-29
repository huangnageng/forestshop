$(function(){

	(function(){
		var rot = $(".Brandpart_top li");
		rot.hover(function(){
			var th = $(this);
			timer = setTimeout(function(){
				th.find(".Brandpart_pri").animate({"marginTop":"15px"});
				th.find(".Brandpart_content p").css("color","#666");
			},200)
			
			
		},function(){
			clearTimeout(timer);
			$(this).find(".Brandpart_pri").animate({"marginTop":"10px"});
			$(this).find(".Brandpart_content p").css("color","#999")
		})
		

	})();
	
	
	// 固定搜索框
	$(window).scroll(function(){
		var wh = $(window).scrollTop(),
			top = $("#main").offset().top,
			search = $("#search_frame");
		var fixedSearch = $(".fixed_search");
		if(wh >= top){
			search.show()	
		}else{
			search.hide()	
		}	
	})

})