<?php
    //1. inClude导入数据库连接文件
    //2. 接收前端发来的数据
    inClude('./conn.php');
    
    $user_name = $_GET['user_name'];
    $user_pwd = $_GET['user_pwd'];

    $selectNameSql = "select * from users where user_name= '$user_name'";

    $result = $mysqli->query($selectNameSql);
  
   
    if($result->num_rows>0){
      echo '{"msg": "用户名已存在", "has": false, "status":200}';
        die();
    };
    $insertSql = "insert into users(user_name,user_pwd)values('$user_name','$user_pwd')";
    // echo $insertSql;
    $result2 = $mysqli->query($insertSql);
    // var_dump($result2); //true
    if($result2) {
      echo '{"msg": "注册成功", "has": true, "status":200}';
    }else {
      echo '{"msg": "注册失败", "has": false, "status":200}';
    }
    $mysqli->close();

?>