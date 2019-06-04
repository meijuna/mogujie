

<?php
    include("./conn.php");
   
    $user_name = $_REQUEST['user_name'];
    $user_pwd = $_REQUEST['user_pwd'];
    $sql = "select * from users where user_name = '$user_name' and user_pwd = '$user_pwd' ";
    // echo $sql;
    $res = $mysqli->query($sql);
    if($res->num_rows>0){
        echo '{"msg":"登录成功","has":true,"status":200}';
    }else{
        echo '{"msg":"用户名或密码错误请重试","has":false,"status":200}';
    }
    $mysqli->close();
?>

                                                                                                                                                                                                                                                                                      