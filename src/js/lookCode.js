
$(document).ready(function(){
    
    $(".bank_txt").click(function(){
        $(".bank_c_body").hide();
        $(".bank_number_box").show();
    });

    $(".numbertxt").change(function(){ 
            
            var account = $(".numbertxt").val(); 
             
            var reg =/^\d{15,19}$/;
            if(reg.test(account)){
                alert("true")
                $(".bank_x").toggleClass('cur');
                window.location.href="client-issue.html";
            }
            if( !reg.test(account) ) { 
                    alert("格式错误，应该是15~19位数字！"); 
            } 
     });
});