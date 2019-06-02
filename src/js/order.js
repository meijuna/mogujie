
// 验证文本框内容
var flag = true;
$('#myForm table tr td input').blur(function () {
    var val = $(this).val();
    if (val == '' || val == null) {
        flag = false;
        $(this).next().show(); //为空显示提示错误 添加边框颜色
        $(this).css('border', '1px solid rgb(250,129,126)');
    } else {
        flag = true;
        $(this).next().hide();
        $(this).removeAttr('style');

    }
});
$('#myForm table tr td textarea').blur(function(){
    var v = $(this).val();
    if(v == null || v.length < 5 || v.length > 35){
        flag = false;
        $(this).css('border', '1px solid rgb(255,129,126)');
        $(this).parent().parent().next().find('p').css('color', 'rgb(255,129,126)'); //父元素
    }else{
        flag = true;
        $(this).removeAttr('style');
        $(this).parent().parent().next().find('p').removeAttr('style');
    }
});



// 确认地址
$('#sub').click(function(){
    console.log(flag);
    if (flag) {
        $('#myForm').hide();
        $('#conf').show();
      
    }
});
//取消添加新地址 按钮
$('#cancel').click(function() {
    $('#myForm').hide();
    $('#conf').show();
});
// 地址编辑按钮
$('#conf_info a').click(function() {
    $('#myForm').show();
});