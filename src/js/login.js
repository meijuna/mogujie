$(function(){
	// 登录&注册切换样式
$(".tab-list").click(function () {
	$(this).addClass("active").siblings().removeClass("active")
})
//单击登录/注册 显示对应模块
$("#dl").click(function () {
	$("#login-content").css("display", "block");
	$("#register-content").css("display", "none")
})
$("#zc").click(function () {
	$("#register-content").css("display", "block")
	$("#login-content").css("display", "none");
})

// -------------------注册-----------------

var flagUname = null;  //注册 验证用户名框
$("#uname").blur(function () {
	var reg = /^[a-z]\w+$/i;
	var reg1 = /^\w+@\w+(\.\w+)+$/;
	var reg2 = /^1[3578]\d{9}$/;
	var str = $(this).val();
	if (reg.test(str)) {
		flagUname = true;
		$("#t1").html("Yes").css("color", "#00ff00")
	} else if (reg1.test(str)) {
		flagUname = true;
		$("#t1").html("Yes").css("color", "#00ff00")
	} else if (reg2.test(str)) {
		flagUname = true;
		$("#t1").html("Yes").css("color", "#00ff00")
	} else {
		flagUname = false;
		$("#t1").html("No").css("color", "#ff0000")
	}
})

var flagPwd = null;  //验证密码框
$("#upwd").blur(function () {
	var regNum = /^\d+$/;
	var regLetter = /^[a-z]+$/i; //忽略大小写
	var regChar = /^[!@#$%^&*]+$/;
	var _regNum = /\d+/;
	var _regLetter = /[a-z]+/i;
	var _regChar = /[!@#$%^&*]+/;
	var str = $(this).val();
	if (str.length < 6 || str.length > 18) { //不符合条件
		$("#t2").html("密码要在6-18位").css("color", "#ff0000");
		flagPwd = false;
	} else if (regNum.test(str) || regLetter.test(str) || regChar.test(str)) {
		$("#t2").html("弱").css("color", "#ff0000");
		flagPwd = true;
	} else if (_regNum.test(str) && _regLetter.test(str) && _regChar.test(str)) {
		$("#t2").html("强").css("color", "#00ff00");
		flagPwd = true;
	} else {
		$("#t2").html("中").css("color", "#FFEA08");
		flagPwd = true;
	}
})
function yzm() {
	var str = "";//存储验证码
	//取出6位
	for (var i = 1; i <= 6; i++) {
		var code = rand(48, 122);
		if (code >= 58 && code <= 64 || code >= 91 && code <= 96) {
			//不满足就重新抽
			i--;
		} else {
			//满足 就将code转成字符
			str += String.fromCharCode(code);
		}
	}
	return str;
}

$("#yzm").html(yzm());  //注册 验证码码图片显示
$("#rghuan").click(function () { //换一张
	$("#yzm").html(yzm());
})

var flagYzm = null;
$("#regyzm").blur(function () { //验证码框验证
	if ($(this).val() == $("#yzm").html().toLowerCase()) {
		flagYzm = true;
	} else {
		flagYzm = false;
	}
})
//验证是否注册成功
$("#regbtn").click(function () {  
	if (flagUname && flagPwd && flagYzm) {
		alert("注册成功");
	} else {
		alert("注册失败")
	}
})

// -------------------登录-----------------

$("#loginyzm").html(yzm());  //登录验证码
$("#loginhuan").click(function () { //登录切换验证码
	$("#loginyzm").html(yzm());
})
$("#sname").blur(function () {  //登录框验证
	if ($(this).val() == "") {
		$("#tishi").html("请输入用户名");
		$("#tishidiv").css("display", "block")
	} else {
		$("#tishidiv").css("display", "none")
	}
})
$("#spwd").blur(function () { //登录密码框验证
	if ($(this).val() == "") {
		$("#tishi").html("请输入密码");
		$("#tishidiv").css("display", "block")
	} else {
		$("#tishidiv").css("display", "none")
	}
})
//登录验证
$("#loginbtn").click(function () {
		var sname = $("#sname").val();
		var spwd = $("#spwd").val();
		var logininyzm = $("#logininyzm").val();
		if (logininyzm == $("#loginyzm").html().toLowerCase()) {
			if (sname.length > 0) {
				if (spwd.length > 0) {
					alert("登录成功")
					location.href = "../html/login.html";
				} else {
					alert("密码错误")
				}
			} else {
				alert("用户名有误")
			}
		} else {
			alert("验证码错误")
		}
})
});

