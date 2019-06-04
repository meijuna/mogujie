<?php
    include('./conn.php');
    $user_name = $_REQUEST['user_name'];

    $sql = "select * from users where user_name = '$user_name'";

    $res = $mysqli->query($sql);
    
    $row = $res->fetch_assoc();

    $json = json_encode($row);
    
    echo $json;

?>