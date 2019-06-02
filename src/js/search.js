$(document).ready(function() {


    $('input[type=checkbox]').hide();
    $('.sub_box').hide();  //确定取消按钮隐藏
    
    
//筛选显示二级菜单
$(".meta_item dd").hover(function() {
    $(this).find("ul").css('display',"block");
}, function() {
    $(this).find("ul").css('display',"none");
});

//点击多选
$(".filter_right sn").click(function(){
    $(this).css('display',"none"); //自己隐藏
    $(this).parent().find(".sub_box").css('display',"block"); //显示 确定取消按钮
    $(this).parent().find(".inner ul").addClass('mutil'); //改变ul高度 显示隐藏内容
    $(this).parent().parent().find(".inner ul").toggleClass('close'); //切换固定高度 overflhidden
    $(this).parent().find('input').show(); //显示input
});
//点击更多箭头

$(".filter_right sp").click(function(){
    $(this).parent().find(".sub_box").css('display',"none"); //确定取消按钮隐藏
    $(this).parent().find("sn").css('display',"block"); //显示多选
    $(this).parent().find(".inner ul").removeClass('mutil');//
    $(this).parent().find(".inner ul").toggleClass('close'); //改变ul高度 显示隐藏内容
    $(this).parent().find('li').show(); //显示选项
    
});
//确认
$(".inner .sele_confirm").click(function(){
    $(this).parent().css('display',"none"); //隐藏自己和取消
    //显示多选
    $(this).parent().parent().parent().parent().find("sn").css('display',"block"); 
    //高度不是auto height:50px;hidden
    $(this).parent().parent().find("ul").removeClass('mutil');
    //隐藏选项框
    $(this).parent().prev().find('input').hide();

});
//取消
$(".inner .sele_cancel").click(function(){
    $(this).parent().css('display',"none");
    $(this).parent().parent().parent().parent().find("sn").css('display',"block");
    $(this).parent().parent().find("ul").removeClass('mutil')
    ////改变ul高度 显示隐藏内容
    $(this).parent().parent().parent().find(".inner ul").toggleClass('close');
    $(this).parent().prev().find('input').hide();

});
//综合销量切换
$(".global_love_head_one a").click(function(){
    $(".global_love_head_one a").css('color', '#000');
    $(this).css('color', '#f36');
});
// 商品hover
$('#mabyLike ul li').hover(function(event){
    $(this).find('h6').show();
    $(this).css('cursor','pointer');
    $($(this).find('h6').click(function(){
        window.location.href="page.html";
    }));
   
    },function(){
        $(this).find('h6').hide();
    });
    
});

