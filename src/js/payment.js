$(function(){
    $(".li1").addClass('bkx');
    $(".li2").addClass('bkx1');
    
    // 点击支付宝支付
    $(".li2").click(function(){
        $(".li2 .zfb_paynum").css("display","block"); //显示支付宝金额
        $(".li1 .paynum").css("display","none"); //微信钱消失
        $(".li2 .zfb_md_paytab").css("display","block"); //显示支付宝框
        $(".li1 .wx_md_paytab").css("display","none"); //隐藏微信框
         
        $(".li1").addClass('bkx1');  //微信添加淡线
        $(".li2").addClass('bkx');  //自己添加深线
    });

    //点击微信支付
     $(".li1").click(function(){
        $(".li2 .zfb_paynum").css("display","none");
        $(".li1 .paynum").css("display","block");
        $(".li2 .zfb_md_paytab").css("display","none");
        $(".li1 .wx_md_paytab").css("display","block");

        $(".li1").addClass('bkx');
        $(".li2").addClass('bkx1');
    });

  
    
    // 确认付款  默认隐藏
    $(".qrfk").css("display","none");
    // 网上银行确认付款 所有子元素
    $(".li3").children('ul').children('li').click(function(){
        $(".qrfk").css("display","block");
    });
    //         鼠标离开元素时
    $('.li3').mouseleave(function(){
        $(".qrfk").css("display","none");
    });
});