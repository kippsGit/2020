<!DOCTYPE html>
<html>
<head>
	<title>deposit</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<style type="text/css">

		select{
			width: 120px;
			padding: 5px 5px;
		}
		select:hover, input[type="submit"]:hover, input[type="button"]:hover{
			cursor: pointer;
		}
		#total{
			font-size: 15px;
			width: 80px;
			text-align: center;

		}
		input[type="button"], input[type="submit"]{
			width: 120px;
			padding: 5px 5px;
		}
		select, input[type="button"], input[type="submit"], input[type="text"]{
			outline: none;
		}
		/*//////////////////////////////////*/
		#submitBotZeroInput{
			color: white;
			background: url("fiveHover.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#submitBot{
			color: white;
			background: url("five.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#submitBot:hover{
			color: white;
			background: url("fiveHover.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#submitBot:active{
			color: black;
			background: url("fiveClicked.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		/*//////////////////////////////////*/
		#cancelBot{
			color: white;
			background: url("three.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#cancelBot:hover{
			color: white;
			background: url("threeHover.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#cancelBot:active{
			color: black;
			background: url("threeClicked.png");
			background-size: 150px 70px;;
			width: 150px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		/*//////////////////////////////////*/
	</style>
</head>
<body>
<?php

include "core.php";
if(isset($_POST['add'])){

	//breakdown of amount
	$ones = (int)$_POST["ones"];
	$fives = (int)$_POST["fives"];
	$tens = (int)$_POST["tens"];
	$twentys = (int)$_POST["twentys"];
	$fiftys = (int)$_POST["fiftys"];
	$hundreds = (int)$_POST["hundreds"];
	$twoHundreds = (int)$_POST["twohundreds"];
	$fiveHundreds = (int)$_POST["fiveHundreds"];
	$thousands = (int)$_POST["thousands"];

	$totalValue = (int)$_POST["totalValue"];
	/*$totalValue = (int)233;*/

	///////////////////////////////////////////////////////////// this shit to update the balance
	$sqlbalanceFromBalanceTable = "SELECT balanceVal FROM balance";
	$retvalueFromBalanceTable = mysql_query($sqlbalanceFromBalanceTable, $conn);

	!$retvalueFromBalanceTable ? die(mysql_error()): "";

	//$sumOfbalanceAndnewlyAddedAmount = (int)$retvalueFromBalanceTable + (int)$totalValue;
	$sqlinserttobalancetable = "UPDATE balance SET balanceVal = balanceVal + " . $totalValue . " WHERE id = 1";

	//UPDATE balance SET balanceVal = 0 WHERE id = 1

	//mysql_query($sqlinserttobalancetable, $conn) ? die(mysql_error()): '';
	mysql_query($sqlinserttobalancetable, $conn);
	/////////////////////////////////////////////////////////////

	$insertDta = 'INSERT INTO savings2020(date, ones, fives, tens, twentys, fiftys, hundreds, twoHundreds, fiveHundreds, thousands, total_amount) VALUES(CURRENT_TIMESTAMP, ' . $ones . ', ' . $fives . ', ' . $tens . ', ' . $twentys . ', ' . $fiftys . ', ' . $hundreds . ', ' . $twoHundreds . ', ' . $fiveHundreds . ', ' . $thousands . ', ' . $totalValue . ')';

	$getRecordTotal = 'SELECT total_amount FROM savings2020';
	$retValue = mysql_query($getRecordTotal, $conn);

	$retval = mysql_query($insertDta, $conn);
	if(! $retval ) {
		die('Could not enter data: ' . mysql_error());
	}

	mysql_close($conn); 
	echo "<script>alert('Successful Deposit') ? '':window.location.href = 'index.php';</script>";


}else{
?>
<center>
<form action="<?php $_PHP_SELF ?>" method="post">
	<table>
		<tr>
			<td>1 x</td>

			<td><select class="selObjOne" name="ones">
				</select></td>
		</tr>
		<tr>
			<td>5 x</td>
			<td><select class="selObjFive" name="fives">
				</select></td>
		</tr>
		<tr>
			<td>10 x</td>
			<td><select class="selObjTen" name="tens">
				</select></td>
		</tr>
		<tr>
			<td>20 x</td>
			<td><select class="selObjTwenty" name="twentys">
				</select></td>
		</tr>
		<tr>
			<td>50 x</td>
			<td><select class="selObjFifty" name="fiftys">
				</select></td>
		</tr>
		<tr>
			<td>100 x</td>
			<td><select class="selObjHundred" name="hundreds">
				</select></td>
		</tr>
		<tr>
			<td>200 x</td>
			<td><select class="selObjTwoHundred" name="twohundreds">
				</select></td>
		</tr>
		<tr>
			<td>500 x</td>
			<td><select class="selObjFiveHundred" name="fiveHundreds">
				</select></td>
		</tr>
		<tr>
			<td>1000 x</td>
			<td><select class="selObjThousand" name="thousands">
				</select></td>
			<td>Total:</td>
			<td><input type="text" id="total" name="totalValue" readonly="true"></td>
		</tr>
		<tr>
			<td><input id="submitBot" type="submit" name="add" value="ok" disabled="true"></td> <!-- add to database -->
			<td><a href="index.php"><input type="button" value="cancel" id="cancelBot"></a></td>
		</tr>
	</table>
</form>

<?php
}
?>

<script type="text/javascript">

	let objCon = ['.selObjOne', '.selObjFive', '.selObjTen', '.selObjTwenty', '.selObjFifty', '.selObjHundred', '.selObjTwoHundred', '.selObjFiveHundred', '.selObjThousand'];
	let selection;

	//tot = ouput to user
	let tot = document.querySelector("#total"), sum = 0;

	let submitBot = document.querySelector("#submitBot");
	
	
	//display to user the summation
	var intervId = setInterval(function summationLoop(){

		//to avoid submitting zero values and false data
		tot.value == null || tot.value == 0 ? submitBot.disabled = true: submitBot.disabled = false;
		tot.value == null || tot.value == 0 ? submitBot.id = "submitBotZeroInput":submitBot.id = "submitBot";

		sum = 0;
			for(let a = 0; a <= objCon.length - 1; a++){
			
					/*sum = sum += Math.floor(document.querySelector(objCon[a]).value);*/
					switch (a){
						case 0:
							sum += 1 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 1:
							sum += 5 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 2:
							sum += 10 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 3:
							sum += 20 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 4:
							sum += 50 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 5:
							sum += 100 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 6:
							sum += 200 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 7:
							sum += 500 * Math.floor(document.querySelector(objCon[a]).value);
						break;
						case 8:
							sum += 1000 * Math.floor(document.querySelector(objCon[a]).value);
						break;
					}
				}	
				tot.value = sum;
				
				/*console.log(sum);*/
		}, 1000);


	// drawing of 100 selections (1-100)
	for(let i = 0; i <= objCon.length; i++){
		selection = document.querySelector(objCon[i]);
		//selection.options.length = 100;
		for(let x = 0; x <= 100; x++){
			selection.options[x] = new Option(x);

			
		}
	}



	/*let selObjOne = document.querySelector(".selObjOne");
	selObjOne.options.length = 100;
	for(let i = 1; i <= 100; i++){
		selObjOne.options[i] = new Option(i);
	}*/



</script>
</body>
</html>
