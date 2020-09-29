<!DOCTYPE html>
<html>
<head>
	<title>Ask</title>

	<style type="text/css">

		#box{
			border: 1px solid gray;
			border-bottom: none;
			width: 345px;
			height: 200px;
			padding: 15px 15px;
			overflow: auto;
			margin-bottom: 0px;

		}
		#newMes, #botMes{
			overflow-wrap: break-word;
		}
		#newMes{
			margin-bottom: 15px;
			border: 1px solid skyblue;
			float: right;
			padding: 5px;
			color: gray;
			color: white;
			background-color: skyblue;
			border-radius: 15px;
			text-align: left;


		}
		#botMes{
			margin-bottom: 15px;
			border: 1px solid gray;
			padding: 5px;
			color: white;
			background-color: grey;
			border-radius: 15px;
			text-align: left;
			float: left;
		}

		#user_input{
			width: 298px;
			height: 5px;
			padding: 15px 15px;
			outline: none;
		}
		::-webkit-scrollbar{
			border-style: none;
		}
		#sendButt{
			height: 39px;
			width: 46px;
			margin-left: -5px;
		}
		#sendButt:hover{
			cursor: pointer;
			outline: none;
		}
		#botProfilePic{
			border: 1px solid black;
			background-color: black;
			width: 10px;
			height: 10px;
			border-radius: 50px;
			margin-right: 10px;
			padding: 5px;
			margin-bottom: 10px;
			float: left;
		}
		#bakButtBot{
			height: 39px;
			width: 46px;
			cursor: pointer;
			outline: none;
		}
	</style>
</head>
<body>
	<center>

		<div>
			<a href="index.php"><input type="button" value="back" id="bakButtBot"></a>
			<p id="box"></p>
			<input id="user_input" type="text" name="user_input" placeholder="write message..." onkeydown="if(event.keyCode == 13){reply();}">
			<input type="button" value="send" id="sendButt" onclick="reply()">
		</div>
			
		

<script type="text/javascript">

let box = document.querySelector("#box");
let userMes = document.querySelector("#user_input");

let messages = {
	'hello' : 'hi',
	'hi' : 'hello',
	'hey' : 'hey, how are you?',
	'fine' : 'good',
	'1' : '2'
}

function reply(){
	if(userMes.value in messages){
		
		box.innerHTML += "<div id='newMes'>" + userMes.value + "</div><br><br>";
		box.innerHTML += "<div id='botMesWrapper'><p id='botProfilePic'></p>" + "<div id='botMes'>" + messages[userMes.value] + "</div></div><br><br>";
		userMes.value = "";
		box.scrollBy(0, 100);
	}else{
		if(userMes.value == "" || userMes.value == null){
			userMes.value = "";
		}else{
			box.innerHTML += "<div id='newMes'>" + userMes.value + "</div><br><br>";
			box.innerHTML += "<div id='botProfilePic'></div>" + "<div id='botMes'>I don't know what your saying...</div><br><br>";
			userMes.value = "";
			box.scrollBy(0, 100);
		}
		
	}
}
//output message
/*box.innerHTML += "<div id='botMes'>first message</div><br><br>";
box.innerHTML += "<div id='newMes'>second message</div><br><br>";*/

</script>
</body>
</html>