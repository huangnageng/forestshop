<?php
	require 'config.php';
	
	//$_birthday = $_POST['year'].'-'.$_POST['month'].'-'.$_POST['day'];
	
	$query = "INSERT INTO reg (user_name, user_password) 
												VALUES ('{$_POST['username']}', sha1('{$_POST['pass']}'))";

	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>