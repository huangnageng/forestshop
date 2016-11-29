
// ie8以下的升级问题
// (function(window) {
// 	    var theUA = window.navigator.userAgent.toLowerCase();
// 	    // alert(theUA);
// 	    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
// 	        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
// 	        if (ieVersion < 9) {
// 	            var str = "你的浏览器版本太low了\n已经和时代脱轨了 :(\n建议升级浏览器体验更优质的服务";
// 	            var str2 = "推荐使用:<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#666'>谷歌</a>,"
// 	            + "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#666'>火狐</a>,"
// 	            + "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%8C%8E%E8%B1%B9%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#666'>猎豹</a>,其他双核急速模式";
// 	            document.writeln("<pre style='text-align:center;color:#fff;background-color:#ccc; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
// 	            "<h2 style='padding-top:200px;margin:0'><strong>" + str + "<br/></strong></h2><p>" +
// 	            str2 + "</p><h2 style='margin:0'><strong>如果你的使用的是双核浏览器,请切换到极速模式访问<br/></strong></h2></pre>");
// 	            document.execCommand("Stop");
// 	        };
// 	    }
// })(window); 


$(function(){

	//鼠标经过我的淘宝显示下拉菜单
	$("#mys").hover(function(){
		$(this).css("background","#fff");
		$("#mys_list").show();
	},function(){
		$(this).css("background","#e5e5e5");
		$("#mys_list").hide();
		
	});
	
	//鼠标经过收藏夹显示下拉菜单
	$("#favortite").hover(function(){
		$(this).css("background","#fff");
		$("#favortite_list").show();
	},function(){
		$(this).css("background","#e5e5e5");
		$("#favortite_list").hide();
	});
	
	//鼠标经过商家支持显示下拉菜单
	$("#merchant").hover(function(){
		$(this).css("background","#fff");
		$("#merchant_list").show();
	},function(){
		$(this).css("background","#e5e5e5");
		$("#merchant_list").hide();
	});
	
	
	//登录login页面
	$('.login').click(function(){
		$('.theme-popover-mask').fadeIn(100);
		$('.theme-popover').slideDown(200);
	})
	$('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
	})

//右侧边栏
	$(".tools_right li").hover(function(){
		$(this).find(".tools_fly").show().animate(
			{
				opacity:1,
				left:"-100px"
			},300);
	},function(){
		$(this).find(".tools_fly").animate(
			{
				opacity:0,
				left:"-130px"
			},300,function(){
				$(this).hide();
			});
	})


//退出登录
	$("#login_out").click(function(){
		$.removeCookie('username');
		window.location.reload();
	})
	//登录交互
	$("#loginBtn").click(function(){
		$.ajax({
			url:"http://localhost/senlinshop/login.php",
			type:"POST",
			data:{
				username:$("#username").val(),
				password:$("#password").val()
			},
			dataType:"json",
			success:function(data){
				//alert(typeof data);
				if(data==true){
					//提示登录成功，关闭小窗口
					alert('登录成功');
					$.cookie('username',$("#username").val());
					var nickname = "欢迎您，"+$.cookie('username');
					$(".theme-popover").hide();
					$('.theme-popover-mask').hide();
					$(".login").hide();
					$('#userlogin').html(nickname);
					$('.reg').hide();
					$('#login_out').show();
				}else if(data==false){
					alert('登录失败，用户名或密码错误');
					//
				}
			},
			error:function(){
				alert("服务器异常，请稍后再试");
			}
		});
	});


	if($.cookie('username')){
		var nickname = "欢迎您，"+$.cookie('username');
		$(".theme-popover").hide();
		$('.theme-popover-mask').hide();
		$(".login").hide();
		$('#userlogin').html(nickname);
		$('.reg').hide();
		$('#login_out').show();
	};


	// 注册交互
	
	
	
})
