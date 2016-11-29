// JavaScript Document
$(function(){
	//登录login页面
	$('.login').click(function(){
		$('.theme-popover-mask').fadeIn(100);
		$('.theme-popover').slideDown(200);
	})
	$('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
	});
	
	// 表单认证	
	// 点击进去显示事件
	$(".register-info input").focus(function(){
		$(this).parent().find(".reg-none").show();
		$(this).parent().find(".reg-error").hide();
		$(this).parent().find(".reg-success").hide();
		
	});
	
	// 表单认证(用户名)	
	// 光标移出事件
	// \u4e00-\u9fa5 中文
	var flag=false;
	var usname = $(".register-info input[name='username']");
	usname.blur(function(){
		var tr = /^[\w\u4e00-\u9fa5/-]{4,20}$/;
		var usnameReg = usname.parent();
		if($(this).val() == ""){
			usnameReg.find("span").hide();
			flag=false;
		}else if(!(tr.test($(this).val()))){
			usnameReg.find(".reg-error").show();
			usnameReg.find(".reg-none").hide();
			flag=false;
		}else{
			usnameReg.find(".reg-success").show();
			usnameReg.find(".reg-none").hide();
			flag= true;
		}

	});
	
	// 表单认证(密码)
	
	var pass = $(".register-info input[name='pass']");
	pass.blur(function(){
		var tr = /^[\w/+/=/./-]{6,20}$/;
		var passReg = pass.parent();
		if($(this).val() == ""){
			passReg.find("span").hide();
			flag= false;
		}else if(!(tr.test($(this).val()))){
			passReg.find(".reg-error").show();
			passReg.find(".reg-none").hide();
			flag= false;
		}else{
			passReg.find(".reg-success").show();
			passReg.find(".reg-none").hide();
			flag= true;
		}

	});

	/*表单认证(确认密码)*/
	var repass = $(".register-info input[name='repass']");
	repass.blur(function(){
		var psss = pass.val();
		var repassReg = repass.parent();
		if($(this).val() == ""){
			repassReg.find("span").hide();
			flag= false;
		}else if(psss != $(this).val()){
			repassReg.find(".reg-error").show();
			repassReg.find(".reg-none").hide();
			flag= false;
		}else{
			repassReg.find(".reg-success").show();
			repassReg.find(".reg-none").hide();
			flag= true;
		}

	});


	// 表单认证(手机号码)
	// /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
	var mobile = $(".register-info input[name='mobile']");
	mobile.blur(function(){
		var tr = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		var mobileReg = mobile.parent();
		if($(this).val() == ""){
			mobileReg.find("span").hide();
		}else if(!(tr.test($(this).val()))){
			mobileReg.find(".reg-error").show();
			mobileReg.find(".reg-none").hide();
		}else{
			mobileReg.find(".reg-success").show();
			mobileReg.find(".reg-none").hide();
		}

	});
	
	// 表单认证(验证码)
	var iden = $(".register-info input[name='identifying']");
	iden.blur(function(){
		var idenReg = iden.parent();
		idenReg.find("span").hide();
	});



	// 立即注册点击
	// var reg = $("#reg");
	// // reg.submit(function(event){
	// // 	console.log(typeof usname);
	// // })

	
	// $("form[name='myform']").submit(function(){
	// 	var h1 = $(window).height()/2;
	// 	var scrolltop = $(document).scrollTop();
	// 	var h = h1 + scrolltop;
	// 	if($("#checkbox").attr("checked")==true){
	// 		if(!flag){
	// 			subFun(h,"用户名或密码错误...");
	// 			return false;
	// 		}else{
	// 			subFun("50%","注册成功，请登录...");

	// 		}
	// 	}else{

	// 		subFun(h,"请同意用户协议...");
	// 		return false;
	// 	}
	// });

	// function subFun(h,info){
	// 	$('.reg-popover-mask').fadeIn(100);
	// 	$("#sub").css("top",h).html(info).show();
	// 	setTimeout(function(){
	// 		$('.reg-popover-mask').fadeOut(100);
	// 		$("#sub").hide();
	// 	},2000)
	// }





	// 注册交互
	$("#reg").click(function(){
		$.ajax({
			url:"http://localhost/senlinshop/reg.php",
			type:"POST",
			data:{
				username:$("#username").val(),
				pass:$("#pass").val(),
				repass:$("#repass").val()
			},
			dataType:"json",
			success:function(data){
				//alert(typeof data);
				if(data==true){
					//提示登录成功，关闭小窗口
					alert('登录成功');
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

})