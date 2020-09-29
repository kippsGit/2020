<!DOCTYPE html>
<html>
<head>
	<title>Record</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<style type="text/css">
		*{
			font-size: small;
		}
		table{
			margin: 20px;
			display: inline-block;
		}

		table #rec{
			border: 1px solid gray;
		}
		th{
			border: 1px solid gray;
			padding: 5px;
			
		}
		td{
			border: 1px solid gray;
			padding: 5px;
			color: green;
			
		}
		tr td{
			text-align: center;
		}
		/*#backBut{
			border: 1px solid white;
			
		}*/
		input[type='button']{
			width: 120px;
			padding: 5px 5px;
			/*background-color: white;
			border-style: none;*/

		}
		input[type='button']:hover{
			cursor: pointer;
		}
		table#rec tr th#backButtonCell{
			border-style: none !important;
		}

		#depositedHeader{
			margin-right: 20px;
		}
		
	</style>
</head>
<body>
<?php

include "core.php";

////////////////////////////////////////////////////////////////////


$retValueFromBalance = mysql_query("SELECT balanceVal FROM balance", $conn) or die(mysql_error());
$rowBalanceVal = 0;

while ($row = mysql_fetch_array($retValueFromBalance, MYSQL_ASSOC)) {
	$rowBalanceVal = (int)$row['balanceVal'];
}

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
$sqlGetRecordWithdrawn = "SELECT * FROM withdrawn";
$sqlAmountWithdrawnTotal = "SELECT amount_withdrawn FROM withdrawn";

$retvalWithdrawn = mysql_query($sqlGetRecordWithdrawn, $conn);
$retvalWithdrawnTot = mysql_query($sqlAmountWithdrawnTotal, $conn);
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
$sqlGetRecordSavings2020 = "SELECT * FROM savings2020";
$sqlGetTotal = "SELECT total_amount FROM savings2020";

$retvalSavings2020 = mysql_query($sqlGetRecordSavings2020, $conn);
$retvalTot = mysql_query($sqlGetTotal, $conn);
///////////////////////////////////////////////////////////////////

//display all data
echo "<center>
	  <table id='rec'>
	  <th id='backButtonCell'><a href='index.php'><input type='button' value='Back'></a></th>
	  <tr>
	  	<th>ALL-TIME TOTAL</th>
	  	<th>CURRENT BALANCE</th>
	  </tr>";

//calculate highest balance
$grandTotal = 0;
while ($row = mysql_fetch_array($retvalTot, MYSQL_ASSOC)) {
	  $grandTotal += (int)$row['total_amount'];
}
//calculate withdrawn total
$withdrawnTotal = 0;
while ($row = mysql_fetch_array($retvalWithdrawnTot, MYSQL_ASSOC)) {
	$withdrawnTotal += (int)$row['amount_withdrawn'];
}

echo "<tr>
		<td>" . $grandTotal . "</td>
		<td>" . $rowBalanceVal -= $withdrawnTotal . "</td>
	  </tr>";


echo "</table>
	  <table>
	  <tr>
	  	<th colspan='12' id='depositedHeader'>DEPOSIT HISTORY</th>
	  </tr>
	  <tr>
	  	<th>ID</td>
	  	<th>DATE</td>
	  	<th>1</th>
	  	<th>5</th>
	  	<th>10</th>
	  	<th>20</th>
	  	<th>50</th>
	  	<th>100</th>
	  	<th>200</th>
	  	<th>500</th>
	  	<th>1000</th>
	  	<th>TOTAL</th>
	  </tr>";

//get all data from savings2020
while ($row = mysql_fetch_array($retvalSavings2020, MYSQL_ASSOC)) {
	echo "<tr>
			<td>" . $row['id'] . "</td>
			<td>" . $row['date'] . "</td>
			<td>" . $row['ones'] . "</td>
			<td>" . $row['fives'] . "</td>
			<td>" . $row['tens'] . "</td>
			<td>" . $row['twentys'] . "</td>
			<td>" . $row['fiftys'] . "</td>
			<td>" . $row['hundreds'] . "</td>
			<td>" . $row['twoHundreds'] . "</td>
			<td>" . $row['fiveHundreds'] . "</td>
			<td>" . $row['thousands'] . "</td>
			<td>" . $row['total_amount'] . "</td>
		  </tr>";
}

echo "</table>
	  <table>
	  <tr>
	  	<th colspan='3'>WITHDRAWN</th>
	  </tr>
	  <tr>
	  	<th>ID</th>
	  	<th>DATE</th>
	  	<th>WITHDRAWN AMOUNT</th>
	  </tr>";

//get all data from withdrawn

while ($row = mysql_fetch_array($retvalWithdrawn, MYSQL_ASSOC)) {
	echo "<tr>
			  <td>" . $row['id'] . "</td>
			  <td>" . $row['date'] . "</td>
		  	  <td>" . $row['amount_withdrawn'] . "</td>
		  </tr>";
}

echo "</table>";

?>
</body>
</html>
