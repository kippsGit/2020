<!DOCTYPE html>
<html>
<head>
	<title>Withdraw</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<style type="text/css">

		input[type="button"], input[type="submit"], input[type="text"]{
			width: 120px;
			padding: 5px 0px;
			font-size: 15px;
			text-align: center;
		}
		input[type="button"]{
			width: 124px;
		}
		select:hover, input[type="submit"]:hover, input[type="button"]:hover{
			cursor: pointer;
		}
		#submitBot{
			color: white;
			background: url("three.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#cancelBot{
			color: white;
			background: url("five.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
	</style>
</head>	
<body>
	<?php
	include "core.php";
	if(isset($_POST['subtract'])){

		$amountToWithdraw = (int)$_POST['amountToWithdraw'];

		$sqlInsert = 'INSERT INTO withdrawn(date, amount_withdrawn) VALUES(CURRENT_TIMESTAMP, ' . $amountToWithdraw . ')';

		$retval = mysql_query($sqlInsert, $conn);
		if(!$retval){
			die('Could not enter data: ' . mysql_error());
		}

		mysql_close($conn); 
		echo "<script>alert('Withdraw Recorded') ? '':window.location.href = 'index.php';</script>";

	}else{
	?>
	<center>
		<form action="<?php $_PHP_SELF ?>" method="post">
			<table>
				<tr>
					<td>Amount:</td>
					<td><input type="text" name="amountToWithdraw" placeholder="Pila gusto mo?"></td>
				</tr>
				<tr>
					<td><input type="submit" name="subtract" value="ok" id="submitBot"></td>
					<td><a href="index.php"><input type="button" value="cancel" id="cancelBot"></a></td>
				</tr>
			</table>
		</form>
	</center>
<?php } ?>
</body>
</html>