<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<style type="text/css">
		

		input[type="button"]{
			width: 120px;
			padding: 5px 5px;
		}
		input[type="button"]:hover{
			cursor: pointer;
		}
		
		#titleName{
			font-size: 50px;

		}
		tr{
			text-align: center;
		}
		#MbankImg{
			width: 450px;
			height: 160px;
			position: relative;
			left: 7%;
		}

		/*//////////////////////////////////////////////*/
		#depositButt{
			color: white;
			background: url("five.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#depositButt:hover{
			color: white;
			background: url("fiveHover.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#depositButt:active{
			color: black;
			background: url("fiveClicked.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		/*//////////////////////////////////////////////*/
		#withdrawButt{
			color: white;
			background: url("two.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#withdrawButt:hover{
			color: white;
			background: url("twoHover.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#withdrawButt:active{
			color: black;
			background: url("twoClicked.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		/*//////////////////////////////////////////////*/
		#displayButt{
			color: white;
			background: url("three.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#displayButt:hover{
			color: white;
			background: url("threeHover.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#displayButt:active{
			color: black;
			background: url("threeClicked.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		/*//////////////////////////////////////////////*/
		#clearButt{
			color: white;
			background: url("two.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#clearButt:hover{
			color: white;
			background: url("twoHover.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#clearButt:active{
			color: black;
			background: url("twoClicked.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		/*//////////////////////////////////////////////*/
		#askButt{
			color: white;
			background: url("five.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#askButt:hover{
			color: white;
			background: url("fiveHover.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		#askButt:active{
			color: black;
			background: url("fiveClicked.png");
			background-size: 200px 70px;;
			width: 200px;
			height: 70px;
			border-style: none;
			outline: none;
		}
		/*//////////////////////////////////////////////*/
		
		/*#canvas{
		 	position: absolute;
		 	left: 32%;
		 	z-index: -1;
			background-color: white;
			border: 1px solid black;
		}*/
		
	</style>
</head>
<body>
	<!-- <canvas id="canvas"></canvas> -->
	<center>
	
	<form>
		<table>
			<tr id="imgg">
				<td><!-- <p id="titleName">Mirage Bank</p> --><img id="MbankImg" src="MirageBank.png"></td>
			</tr>
			<tr>
				<td><a href="deposit.php"><input type="button"value="Deposit" id="depositButt"></a></td>
			</tr>
			<tr>
				<td><a href="withdraw.php"><input type="button"value="Withdraw" id="withdrawButt"></a></td>
			</tr>
			<tr>
				<td><a href="display.php"><input type="button" value="Stats" id="displayButt"></a></td>
			</tr>
			<tr>
				<td><a href="clearAll.php"><input type="button" value="Clear History" id="clearButt"></a></td>
			</tr>
			<tr>
				<td><a href="bot.php"><input type="button" value="About" id="askButt"></a></td>
			</tr>
		</table>
	</form>
	<script type="text/javascript">
		
		/*let canvas = document.querySelector("#canvas"),
			c = canvas.getContext("2d");
			canvas.width = 500;
			canvas.height = 600;

			c.beginPath();
			c.strokeStyle = "black";
			c.arc(canvas.width/2,canvas.height/2,10,0,Math.PI*2);
			c.stroke();*/
			



	</script>
</body>
</html>