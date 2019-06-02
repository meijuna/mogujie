


$(function(){
    $("#classification ul li").click(function(){
        // 添加动画样式
        $(this).addClass("classfic-current").siblings().removeClass("classfic-current");
    });
//		问题公告展示页
    $("#specific-question ul li").click(function(){
        $("#specific-question>div").text("ヾ(*´∀ ˋ*)ﾉ 感谢您的反馈");
        $("#specific-question ul li").css("display","none");
    })
})