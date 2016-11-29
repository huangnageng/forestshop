 <?php
	header('Content-Type:text/html; charset=utf-8');

	define('DB_HOST', 'localhost');
	define('DB_USER', 'root');
	define('DB_PWD', 'root');
	define('DB_NAME', 'senlinshop');

	$conn = @mysql_connect(DB_HOST, DB_USER, DB_PWD) or die('数据库链接失败：'.mysql_error());

	$data=@mysql_select_db(DB_NAME) or die('数据库错误：'.mysql_error());

	if($conn&&$data){
		//echo "数据库连接成功！";
	}
?>
