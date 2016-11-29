<?php
	require 'config.php';
	
	$query = mysql_query("SELECT user FROM login WHERE user_name='{$_POST['username']}'") or die('SQL错误！');
	
	if (mysql_fetch_array($query, MYSQL_ASSOC)) {
		sleep(3);
		echo 1;
	}
	
	mysql_close();
?>