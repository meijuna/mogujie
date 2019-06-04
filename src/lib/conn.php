<?php

    //1. header("");
    //2. 配置数据库信息 $mysql_conf = array('' => '',)
    //3. 连接数据库 $mysql = @new mysqli([],[])
    //4. 判断数据库是否连接成功 $mysqli->connect_errno{die()}
    //5. 设置编码 $mysqli->query("set names 'utf8';");
    //6. 连接数据库 $select_db = $mysali->select_db([]);
    //7. 判断匹配数据库是否成功 !select_db {die ()}

    header("content-type: text/html", "charset = utf-8");

    $mysql_conf = array(      
        'host' => 'localhost:3306',
        'db_user' => 'root',
        'db_pwd' => '',
        'db' => 'mydb'
    );
    //连接数据库
    $mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);
    // var_dump($mysqli);//obj
    if($mysqli->connect_errno) {
        die("数据库连接错误".$mysqli->connect_errno);
    };
    //设置编码
    $mysqli->query("set names 'utf8';");
    //匹配是数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);
    // var_dump($select_db);//ture
    if(!$select_db) {
        die("匹配数据库失败".$mysqli->error);
    };
   
    
?>