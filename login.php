<?php
	require 'config.php';
	$username=$_POST["username"];
	$pass=$_POST["password"];

	$sql="select * from login where user_name='$username' AND user_password='$pass'";

	$query=mysql_query($sql) or die('SQL错误！');
	//print_r($query);

	$data=mysql_fetch_array($query, MYSQL_ASSOC);
	//print_r($data);

	if($data){
		echo 'true';
	}else{
		echo 'false';
	}
?>