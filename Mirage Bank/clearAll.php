<!DOCTYPE html>
<html>
<head>
	<title>Clear Record</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<style type="text/css">
		input[type="button"], input[type="submit"]{
			width: 170px;
			padding: 5px 5px;
		}
		input[type="button"]:hover, input[type="submit"]:hover{
			cursor: pointer;
		}
	</style>
</head>
<body>
	<?php 
		include "core.php";
		if(isset($_POST['sub'])){

			$sqlClear_savings2020 = "DELETE FROM savings2020";
			$sqlClear_balance = "UPDATE balance SET balanceVal = 0";
			$sqlClear_withdrawn = "DELETE FROM withdrawn";
			
			$username = $_POST['username'];
			$passcode = $_POST['passcode'];

			///////////////////// database ////////////////////////////////////
			$sqlgetUsernameData = "SELECT username FROM admin"; 
			$retValUsername = mysql_query($sqlgetUsernameData, $conn) or die(mysql_error()); // data
			$dbusername = "";
			while ($retval = mysql_fetch_array($retValUsername, MYSQL_ASSOC)) {
				$dbusername = $retval['username'];
			}
			$sqlgetPasscodeData = "SELECT passcode FROM admin"; 
			$retValPasscode = mysql_query($sqlgetPasscodeData, $conn) or die(mysql_error()); // data
			$dbpasscode = "";
			while ($retval = mysql_fetch_array($retValPasscode, MYSQL_ASSOC)) {
				$dbpasscode = $retval['passcode'];
			}
			////////////////////////////////////////////////////////////////////
			if($username == $dbusername && $passcode == $dbpasscode){
				echo "<script>alert('Cleared!')?'':window.location.href='index.php';</script>";	
				!mysql_query($sqlClear_savings2020, $conn) ? die(mysql_error()): "";
				!mysql_query($sqlClear_balance, $conn) ? die(mysql_error()): "";
				!mysql_query($sqlClear_withdrawn, $conn) ? die(mysql_error()): "";
			}else{
				echo "<script>alert('Baw ga pataka sa!!!')?'':window.location.href='index.php';</script>";
			}
			

			mysql_close($conn);

		}else{
	?>
	<center>
	<form action="<?php $_PHP_SELF ?>" method="post">
		<table>
			<tr>
				<td>Username: </td>
				<td><input type="text" name="username" placeholder="e delete mo?"></td>
			</tr>
			<tr>
				<td>Passcode: </td>
				<td><input type="password" name="passcode" placeholder="password danay ah!! :)"></td>
			</tr>
			<tr>
				<td><input type="submit" name="sub" value="ok"></td>
				<td><a href="index.php"><input type="button" value="cancel"></a></td>
			</tr>
		</table>
	</form>

	<?php } ?>
</body>
</html>