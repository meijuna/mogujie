//商品详情选项卡切换
$("#xiangqing_tab_list").find("li").click(function(){
    $(this).addClass("xiangqing_tab_list_active").siblings()
                    .removeClass("xiangqing_tab_list_active");
})
//右侧扩展模块
$("#kuozhan_zhuti_ul").find("li").hover(function(){
    $(this).css("background","url(image/page/kuozhan-selected.png) no-repeat").find("a")
    .css( //字加粗 移动三角型y坐标显示三角形
        {"color": "#333","font-weight":700,"background-position":"0 -238px"}); 
},function(){
	$(this).css("background","").find("a").css(  //其他a 还原
        {"color":"#666","font-weight":"100","background-position":"0 -158px"});
})
$("#kuozhan_zhuti_ul").find("li").click(function(){  //li 添加背景图片
	$(this).addClass("kuozhan_selected").siblings().removeClass("kuozhan_selected");
})