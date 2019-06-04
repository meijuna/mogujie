$(function () {
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


	$.extend($.validator.messages, {
		required: "这是必填字段",
		remote: "请修正此字段",
		email: "请输入有效的电子邮件地址",
		url: "请输入有效的网址",
		date: "请输入有效的日期",
		dateISO: "请输入有效的日期 (YYYY-MM-DD)",
		number: "请输入有效的数字",
		digits: "只能输入数字",
		creditcard: "请输入有效的信用卡号码",
		equalTo: "你的输入不相同",
		extension: "请输入有效的后缀",
		maxlength: $.validator.format("最多可以输入 {0} 个字符"),
		minlength: $.validator.format("最少要输入 {0} 个字符"),
		rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
		range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
		max: $.validator.format("请输入不大于 {0} 的数值"),
		min: $.validator.format("请输入不小于 {0} 的数值")
	});


	$().ready(function () {
		$("#myform").validate({
			errorClass: 'tishi',
			submitHandler: function (form) {
				var user_name = $('#sname').val();
				var user_pwd = $('#spwd').val();
				var reg_name = $('#uname').val();
				var reg_pwd = $('#upwd2').val()
				$('#regbtn').on('click', function () {

					$.ajax({
						type: "get",
						url: "../lib/isRegister.php",
						data: {
							user_name: reg_name,
							user_pwd: reg_pwd
						},
						dataType: "json",
						success: function (response) {

							alert(response.msg);
							if (response.has === true) {
								setCookieId(reg_name);
								location.href = "../index1.html";
							}

						}
					});
					return;
				})

				function setCookieId(name) {
					cookie.set('name', name, 1);
				}
				$('#loginbtn').on('click', function () {
					$.ajax({
						type: "get",
						url: "../lib/isLogin.php",
						data: {
							user_name: user_name,
							user_pwd: user_pwd
						},
						dataType: "json",
						success: function (response) {
							alert(response.msg);

							if (response.has) {
								setCookieId(user_name);
								location.href = "../index1.html";
							}

						}
					});
				})

			},
			rules: {
				sname: {
					required: true,
					rangelength: [1, 10]
				},
				spwd: {
					required: true,
					rangelength: [6, 16]
				},
				uname: {
					required: true,
					rangelength: [6, 16]
				},
				upwd: {
					required: true,
					rangelength: [6, 16]
				},
				upwd2: {
					required: true,
					equalTo: "#upwd"
				}
			}
		});
	});

});