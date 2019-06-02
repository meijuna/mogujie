
$(function() {


	var index=0;

	

	//轮播图
	//初始化图片 选项
	
	$(".banner_box_content ul li").eq(0).addClass('current');
	$(".banner_box_content ol li").eq(0).addClass('circle_current');
	// 图片显示
	$(".mslide_banners ul li").eq(0).addClass('current');  
	$(".mslide_banners  ol li").eq(0).addClass('circle_current');


	setInterval(autoPlay,3000); //自动播放

	function autoPlay(){
		index++;   //>4
		index=index > $(".banner_box_content ul li").length-1?0:index;
        //透明度
		$(".banner_box_content ul li").eq(index).addClass('current').siblings().removeClass('current');
		$(".banner_box_content ol li").eq(index).addClass('circle_current').siblings().removeClass('circle_current');

		$(".mslide_banners ul li").eq(index).addClass('current').siblings().removeClass('current');
		$(".mslide_banners ol li").eq(index).addClass('circle_current').siblings().removeClass('circle_current');
    }
	
	//  搜索跳转
	$('.ipt_btn').click(function(){
		window.location.href="search.html"
	});

	
	// 精选专题

	var lineMove_index=0;
    setInterval(run,2000);
	

	function run(){
		lineMove_index++;
		lineMove_index=lineMove_index>3?0:lineMove_index;
		lineMove_index=lineMove_index<0?3:lineMove_index;
		$(".mslidle_banners").animate({left: -lineMove_index*230+"px"}, 500);
		$(".mslide_banners").animate({left: -lineMove_index*960+"px"}, 500);
	}

});

	

