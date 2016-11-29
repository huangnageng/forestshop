// JavaScript Document
$(function(){
	
	(function(){
		var left = $(".brand_contentLeft"),
			right = $(".brand_content li"),
			bothCon = $(".bothLove_content li");

		// // 精选部分的效果
		function showOpa(id,oHide,oShow){
			id.hover(function(){
				var th = $(this);
				timer = setTimeout(function(){
					th.find(oHide).animate({"opacity":"0.5"});
					th.find(oShow).animate({"opacity":"1"});
				},200);
				
			},function(){
				clearTimeout(timer);
				$(this).find(oHide).animate({"opacity":"0"});
				$(this).find(oShow).animate({"opacity":"0"});
			});
		}
		
		showOpa(left,".left_hide",".left_show");
		showOpa(right,".right_hide",".right_show");
		showOpa(bothCon,".bothLove_hide",".bothLove_show");


		var title = $(".brand_title");
		title.hover(function(){
			$(this).find("img").animate({"left":"200px"})
		},function(){
			$(this).find("img").animate({"left":"0px"})
		})
	})();
	



})