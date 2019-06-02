

// tab 样式切换
$('.content>a').click(function () {
    $('.content>a').removeAttr('style'); //移除style
    $(this).css('color', 'rgb(255,89,119');
    $(this).css('border-bottom', '3px solid rgb(255,85,119)');
});


// 全选实现
var isClick = 0;

$('input[type=checkbox]').last().click(function () {
    isClick++;
    console.log(isClick);
    console.log(isClick % 2 == 0);
    if (isClick % 2 == 0) {
        $('input[type=checkbox]').removeAttr('checked');
        $('.sumPrice').text('¥ 00.00');
         $('.sumNum').text(0);
    } else {
        $('input[type=checkbox]').attr('checked', 'checked');
        $('.sumPrice').text('¥ 447.00');
         $('.sumNum').text(2);
    }
});
$('input[type=checkbox]').first().click(function () {
    isClick++;
    console.log(isClick);
    console.log(isClick % 2 == 0);
    if (isClick % 2 == 0) {  //求余 true = 取消选中
        $('input[type=checkbox]').removeAttr('checked');
    } else {
        $('input[type=checkbox]').attr('checked', 'checked');
    }
});
//checkbox 选中改变 结算按钮颜色
$('input[type=checkbox]').click(function () {
    if ($('input[type=checkbox]').is(':checked')) {
        $('#fRight').find('button').css('background-color', 'rgb(255,167,1)');
    } else {
        $('#fRight').find('button').removeAttr('style');
    }
});

// 结算按钮跳跳转order
$('#fRight button').click(function () {
    window.location.href = "order.html";
})


