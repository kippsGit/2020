<!DOCTYPE html>
<html>
<head>
	<link rel="icon" href="logo.png">
	<title>Bug</title>
	<style type="text/css">
		*{
			font-family: "hobo std";
		}
		::-webkit-scrollbar{
			width: 8px;
			border-radius: 10px;
		}
		::-webkit-scrollbar-track{
			
		}
		::-webkit-scrollbar-thumb{
			background: gray;
			border-radius: 10px;
		}
		
		#boxWrapper, #userInput, #userButt, #bot, #user, ul{
			border-radius: 25px;
			outline: none;
			border-style: none;
			z-index: 0;
		}
		#box{
			/*width: 300px;*/
			margin-top: 0px
			width: auto;
			height: 400px;
			overflow: auto;
			scroll-behavior: smooth;
			margin-bottom: 5px;
			padding: 5px;
			clear: right;
		}
		#controlsWrapper{
			width: auto;
		}
		#userInput{
			height: 48px;
			width: 75%;
			font-size: 50px;
			padding: 5px;
			color: black;
			margin-bottom: 10px;
			border: 1px solid black;

		}
		#userButt{
			/*width: 20%;*/
			border: 1px solid black;
			display: block;
			width: 120px;
			height: 55px;
			background: url('send.png') no-repeat;
			background-size: 50px 50px;
			background-color: white;
			background-position: center;
			position: relative;
			float: right;
			margin-right: 30px;
			
		}
		#userButt:hover{
			cursor: pointer;
			background-color: white;
		}
		#userButt:active{
			background-color: gray;
			color: white;
		}
		#logo{
			width: 160px;
			height: 130px;
			padding: 5px;

			display: block;
		}
		#mes{
			color: gray;
			margin-bottom: 10px;
			font-size: 14px;

		}


		#bot{
			border-radius: 45px !important;
			filter: drop-shadow(5px 5px 5px black);
			display: block;
			font-size: 50px;
			float: left;
			border: 1px solid dimgray;
			padding: 15px;
			background-color: dimgray;
			color: white;
			word-wrap: break-word;
			/*max-width: 190px;*/
			max-width: 100%;
			text-align: left;
		}
		#user{
			border-radius: 45px !important;
			filter: drop-shadow(5px 5px 5px black);
			display: block;
			font-size: 50px;
			float: right;
			border: 1px solid skyblue;
			padding: 15px;
			background-color: skyblue;
			color: white;
			word-wrap: break-word;
			/*max-width: 190px;*/
			max-width: 100%;
			text-align: left;
		}
		#userWrapper{
			/*border: 1px solid red;*/
			/*width: 200px;*/
			width: 60%;
			float: right;
			margin-bottom: 10px;
			margin-right: 30px;
			position: relative;
			z-index: -1000;
		}
		#botWrapper{
			/*border: 1px solid red;*/
			/*width: 200px;*/
			width: 60%;
			float: left;
			margin-bottom: 10px;
			margin-left: 60px;
		}
		#boxWrapper{
			/*width: 320px;*/
			background: url("paper.jpg") no-repeat;
			background-size: 1400px 1000px;
			background-position: -30px;
			width: auto;
			background-color: lightgray;
			position: relative;
		}
		#settingsLogo{

			transform: translateY(-240px);
			background: url('settings.png');
			background-size: 50px 50px;
			margin: 10px;
			width: 50px;
			height: 50px;
			position: relative;
			float: right;
		}
		#settingsLogo:active{

			background: url("settingss.png");
			background-size: 50px 50px;
			cursor: pointer;
			margin: 10px;
			width: 50px;
			height: 50px;
			position: relative;
			float: right;

		}
		#settingsMenu{
			/*border: 1px solid red;*/
			filter: drop-shadow(5px 5px 5px black);
			height: auto;
			width: 200px;
			position: relative;
			transform: translateX(-60px);
			float: right;
		}

		ul{

			background-color: white;
			overflow: auto;
			height: 400px;
			visibility: hidden;
			display: none;

		}
		ul li{
			font-size: 40px;
			margin-top: 10px;
			margin-bottom: 10px;
			transform: translateX(-20px);
			list-style-type: none;


		}
		ul li:hover{
			color: gray !important;
		}
		.theme{
			text-decoration-line: underline;
		}
		#animeFrame{
			/*border: 1px solid red;*/
			filter: drop-shadow(5px 5px 5px black);
			background: url("typing.png") no-repeat;
			background-size: 140px 70px;
			border-radius: 30px;
			height: 70px;
			width: 150px;
			float: left;
			margin-top: 80px;
			margin-left: 20px;
		}
		/*#box1, #box2, #box3{
			
			border-radius: 30px;
			border: 1px solid black;
			width: 30px;
			height: 30px;
			float: left;
		}
		#box1{
			
			margin-left: 20px;
			
		}
		#box2{
			
			margin-left: 70px;
			
		}
		#box3{
			
			margin-left: 120px;
			
		}*/
		#reactionBox{
			transform: translateY(20px);
			/*border: 1px solid red;*/
			width: 250px;
			height: 250px;
			/*position: relative;*/
			display: block;
			margin-bottom: 0px;
			background: url("blink.gif");
			background-size: 250px 250px;
			background-position: 2000px;
		}

	</style>
</head>
<body>

	<center>

		<div id="boxWrapper">
		<div id="reactionBox" onclick="avatar()"></div>
		<div id="settingsLogo" onclick="showSettingsList('gearOn'), settingsClikEffect()">
			<div id="settingsMenu">
				<ul id="settingsList">
					<li class="theme">Theme</li>
					<li style="color: black"  onclick="setCol('black')">Black</li>
					<li style="color: gray"  onclick="setCol('gray')">Gray</li>
					<li style="color: lightgray"  onclick="setCol('lightgray')">LightGray</li>
					<li style="color: green"  onclick="setCol('green')">Green</li>
					<li style="color: blue"  onclick="setCol('blue')">Blue</li>
					<li style="color: yellow"  onclick="setCol('yellow')">Yellow</li>
					<li style="color: red"  onclick="setCol('red')">Red</li>
					<li style="color: orange"  onclick="setCol('orange')">Orange</li>
					<li style="color: violet"  onclick="setCol('violet')">Violet</li>
					<li style="color: skyblue"  onclick="setCol('skyblue')">Skyblue</li>
					<li style="color: pink"  onclick="setCol('pink')">Pink</li>
				</ul>
			</div>
		</div>

		<p id="box" onclick="showSettingsList('box')"></p>
		<div id="controlsWrapper">
		<input id="userInput" onkeydown="if(event.keyCode == 13){reply();}" type="text" onclick="detectInput(1), showSettingsList('inputBox')">	
		<input id="userButt" type="button" onclick="reply(), showSettingsList('inputButton')">
		</div>
		

		</div>


<script src="storage.js"></script>
<script type="text/javascript">
	let avatCliks = 0;
	function avatar(){ // if you keep clicking the avatar
		avatCliks++;
		if(avatCliks > 2){
			reactionBox.style.background = "url('tired.gif')";
			
		}
		if(avatCliks > 5){
			reactionBox.style.background = "url('mad.gif')";
			avatCliks = 0;
		}
	}

	let inputBoxCounter = 0;
	function detectInput(x){
		inputBoxCounter += x;
		if(inputBoxCounter > 5){ 
			inputBoxCounter = 0;
			reactionBox.style.background = "url('blink.gif')";// set to default face animation
			box.innerHTML += "<div id='botWrapper'><div id='bot'>" + exhausted[calcNdx(exhausted)] +"</div></div><br>";

			box.scrollBy(0, 1000);
		}
	}

	function calcNdx(x){
		return Math.floor(Math.random()*x.length);
	}

	

	let reactionBox = document.querySelector("#reactionBox");

	let settingsList = document.querySelector("#settingsList");

	let box = document.querySelector("#box"),
		boxWrapper = document.querySelector("#boxWrapper"),
		userInput =  document.querySelector("#userInput");
		userInputDat = "";

		/*box.innerHTML = "<img id='logo' src='logo.png'><div id='mes'>Hello there...</div>";*/

	let replyDelay = Math.floor(Math.random()*4 + 1);
	
	let counter = 0;
	let counter2 = 0;

	let activeness = 50;

		//experiment!!!!!
		let animeFrame = "";
		let box1 = document.querySelector('#box1');
		let box2 = document.querySelector('#box1');
		let box3 = document.querySelector('#box1');
		let boxMargin = 20;


	function reply(){ // bot reply system
		
		if((userInput.value.toString().toLowerCase()) in messages){
				activeness += 5;
				box.innerHTML += "<div id='userWrapper'><div id='user'>" + userInput.value +"</div></div><br>";
				userInputDat = userInput.value.toString().toLowerCase();
				userInput.value = "";
			
				

				// spawn animation circles

				/*box.innerHTML += "<div id='animeFrame'><div id='box1'></div><div id='box2'></div><div id='box3'></div></div>";
				document.styleSheets[0].addRule('#animeFrame', 'visibility: visible; display: block;');
				animeFrame = document.querySelector("#animeFrame");*/

				box.scrollBy(0, 1000);
				// typing animation ??? :)
				let typingAnimation = setInterval(()=>{		
					
					// implement soon

				}, 100);

				setTimeout(function(){ //// delayyyyyyyy
					//animeFrame.remove(animeFrame);// despawn animation circles
					clearInterval(typingAnimation);// clear typing animation...
					reactionBox.style.background = "url('blink.gif')";// set to default face animation
					if(messages[userInputDat]() == ""){

					}else{
						box.innerHTML += "<div id='botWrapper'><div id='bot'>" + messages[userInputDat]() +"</div></div><br>";
					}
					

					//check what kind of messages are thrown out
					//change reaction to appropriate messages given
					/*reaction(messages[userInputDat]);*/
					/*console.log(messages[userInputDat]);*/

					box.scrollBy(0, 1000);

				 }, replyDelay*1000);

				replyDelay = Math.floor(Math.random()*4 + 2);
			
			
		}else{
			if(userInput.value == ""){
				if(userInput.value == "" && counter < 10){
					counter++;
				}else{
					counter = 0;
					reactionBox.style.background = "url('confused.gif')";// set to default face animation
					box.innerHTML += "<div id='botWrapper'><div id='bot'>" + confused[calcNdx(confused)] +"</div></div><br>";
					box.scrollBy(0, 1000);
				}
				

			}else{
				if(counter2 < 5){
					counter2++;
					box.innerHTML += "<div id='userWrapper'><div id='user'>" + userInput.value +"</div></div><br>";
					userInput.value = "";
					box.scrollBy(0, 1000);
					setTimeout(function(){ 
					reactionBox.style.background = "url('blink.gif')";// set to default face animation
					box.innerHTML += "<div id='botWrapper'><div id='bot'>" + unknownWord[calcNdx(unknownWord)] +"</div></div><br>";
				
					box.scrollBy(0, 1000);
					}, replyDelay*1000);
					replyDelay = Math.floor(Math.random()*4 + 1);
				}else{
					counter2 = 0;
					reactionBox.style.background = "url('blink.gif')";// set to default face animation
					box.innerHTML += "<div id='userWrapper'><div id='user'>" + userInput.value +"</div></div><br>";
					userInput.value = "";
					box.innerHTML += "<div id='botWrapper'><div id='bot'>" + mad[calcNdx(mad)] +"</div></div><br>";
					box.scrollBy(0, 1000);

				}
				
			}
			
		}
	}

	//settings animation
	let compar = 'gearOn';
	
	// glitch effect shit //////////////////////////////////////////////////////////////////////////////////
	var glitch;
	let setCliksCounter = 0, red = Math.floor(Math.random()*256),
										  green = Math.floor(Math.random()*100 + 156),
										  blue = Math.floor(Math.random()*56 + 200);
	function settingsClikEffect(){
		if(setCliksCounter > 3){
			////////////////////////////////// edit here next time
				box.innerHTML += "<div id='botWrapper'><div id='bot'>" + "type quiboloy to stop." +"</div></div><br>";
			// glitch effect
			
			glitch = setInterval(()=>{
				
				document.styleSheets[0].addRule("#user", "background-color: rgb(" + red + ", " + green + ", " + blue + ")");
				document.styleSheets[0].addRule("#bot", "background-color: rgb(" + red + ", " + green + ", " + blue + ")");
				document.styleSheets[0].addRule("#userInput", "background-color: rgb(" + red + ", " + green + ", " + blue + ")");
				document.styleSheets[0].addRule("#userButt", "background-color: rgb(" + red + ", " + green + ", " + blue + ")");
				document.styleSheets[0].addRule("#box", "border-color: rgb(" + red + ", " + green + ", " + blue + ")");

				red = Math.floor(Math.random()*256)
				green = Math.floor(Math.random()*100 + 156)
				blue = Math.floor(Math.random()*56 + 200)

			}, 100);

			setCliksCounter = 0;
		}else{
			setCliksCounter++;
		}
	}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function showSettingsList(s){
		
		
		if(s == 'box' || s == 'inputBox' || s == 'inputButton'){
			settingsList.style.visibility = "hidden";
			settingsList.style.display = "none";
			compar = 'gearOn';

			
		}
		if(s == compar){
			settingsList.style.visibility = "visible";
			settingsList.style.display = "block";
			compar = 'gearOff';
		}else{
			settingsList.style.visibility = "hidden";
			settingsList.style.display = "none";
			compar = 'gearOn';
		}
		
	}
	//box background color change setting
	function setCol(c){
		document.styleSheets[0].addRule("#user", 'background-color: ' + c);
		document.styleSheets[0].addRule("#user", 'border-color: ' + c);
		localStorage.setItem('color', c);
	}

	// load color from storage
	window.addEventListener('load', ()=>{
		document.styleSheets[0].addRule("#user", 'background-color: ' + localStorage.getItem('color'));
		document.styleSheets[0].addRule("#user", 'border-color: ' + localStorage.getItem('color'));
	})

	
	setInterval(()=>{
		activeness--;
		if(activeness <= 0){
			if(activeness <= -5){
				
				activeness = 5;
			}
			box.innerHTML += "<div id='botWrapper'><div id='bot'>" + checkOut[calcNdx(checkOut)] +"</div></div><br>";
			box.scrollBy(0, 1000);
		}
			
	}, 50000);
	
</script>
</body>
</html>