
<html>
<head>
	<link rel="icon" href="char.png">
	<title>Jemp 2</title>
	<meta name="viewport" content="user-scalable=no">
	<style type="text/css">
		body{
			padding: 0px;
			margin: 0px;
		}
		#canvas{
			background-color: black;
			margin: 0px;
		}
		#scoreBoard{
			position: absolute;
			
			width: auto;
			height: 20px;
			left: 49%;

			display: none;
		}
		#score{
			color: red;
			font-size: 50px;
		}
		#mainMenu{
			position: absolute;
			/*border: 1px solid red;*/
			/*background-color: black;*/
			background: url("terrain.png") no-repeat;
			
		}
		#menuList{
			list-style-type: none;
			text-align: center;
			
			margin-top: 10%;

			font-size: 50px;
			font-family: 'tahoma'


		}
		 ul#menuList{
			padding: 0px;
			margin: 0px;
			margin-top: 10%;
		}
		
		#title{
			margin-bottom: 5%;
			font-size: 80px;
			color: black;
			
			
		}
		#start, #about, #leaderboard{
			color: white;
			background-color: black;
			margin-top: 15px;
		}
		#start:active, #about:active{
			color: red !important;
		}
		#start:hover, #about:hover, #leaderboard:hover{
			color: gray;
			cursor: pointer;
		}
		#deathScreen{
			position: absolute;
			color: black;
			display: none;
		}
		#deathScreen ul li{
			list-style-type: none;
			
			font-size: 80px;
			font-family: 'tahoma';
			display: inline-block;
			margin-right: 30px;
		}
		#deathScreen ul li:hover{
			color: red;
			cursor: pointer;
		}
		#pause{
			position: absolute;
			width: 50px;
			height: 50px;
			background: url("pause.png");
			background-size: 50px 50px;
			z-index: 0;
		}
		#pause:hover{
			cursor: pointer;

		}
		#pause:active{
			
		}
		#home{
			position: absolute;
			width: 40px;
			height: 40px;
			background: url("exit.png");
			background-size: 40px 40px;
		}
		#home:active{
			background: url("exit_clicked.png");
			background-size: 40px 40px;
		}
		#home:hover{
			cursor: pointer;
		}

		#aboutScreen{
			position: absolute;
			/*border: 1px solid red;*/
			
			z-index: 1000;

			color: white;
			font-family: 'tahoma';
			font-size: 25px;

			background-color: black;

			display: none;
			overflow: auto;
		}
		#aboutScreen:hover{
			cursor: pointer;
		}
		#aboutScreenDetails{
			/*border: 1px solid red;*/

		}
		#illusionWord{
			color: pink;
		}
		#jemp2{
			font-size: 50px;
			color: red;
		}

		#loadingScreen{
			/*border: 1px solid red;*/
			position: absolute;
			z-index: 1000;
			background-color: black;
			color: white;
			font-size: 100px;
			text-align: center;
			overflow: hidden;
			padding-top: 70%;
		}
		#userNameBox{
			font-size: 30px;
			width: 170px;
		}
		table{
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			background-color: red;
			margin-top: 100px;
		}
		th{	
			font-family: 'tahoma';
			color: white;
			background-color: black;
			padding: 5px;
			font-size: 40px;
			font-weight: bolder;
			padding: 20px;
		}
		td{	
			font-family: 'tahoma';
			color: white;
			background-color: black;
			padding: 5px;
			font-size: 20px;
			font-weight: bolder;
			padding: 20px;
		}
		#table-wrapper{
			position: absolute;
			background-color: black;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10000;
			overflow: auto;
			display: none;
		}
		#table-wrapper:hover{
			cursor: pointer;
		}
		@media only screen and (max-device-width: 500px){
			th{	
				font-family: 'tahoma';
				color: white;
				background-color: black;
				padding: 5px;
				font-size: 100px;
				font-weight: bolder;
				padding: 20px;
			}
			td{	
				font-family: 'tahoma';
				color: white;
				background-color: black;
				padding: 5px;
				font-size: 50px;
				font-weight: bolder;
				padding: 20px;
			}
		}
	</style>

</head>
<body>
		<div id="loadingScreen">Loading...</div>
<!-- ------------------------------------------------------------------>
		<?php 
			//header("Refresh:0");
			include "core.php";
			isset($_COOKIE["maxScoreCount"]) ? '': header("Refresh:0");
			isset($_COOKIE["username"]) ? '': header("Refresh:0");
			$sqlGetLeaderboardTable = "SELECT * FROM leaderboard";

				$retvalLeaderboardTable = mysqli_query($conn, $sqlGetLeaderboardTable);
				echo "
					 <div id='table-wrapper' onclick='showLeaderboard(0)'>
					 <table>
						<tr>
							<th>Username</th>
							<th>Score</th>
						</tr>
					 ";

				while($row = mysqli_fetch_array($retvalLeaderboardTable)){
					echo "<tr>
							<td>" . $row['userName'] . "</td>
							<td>" . $row['score'] . "</td>
						 </tr>";
						
				}

				echo  "</table></div>
					  ";
			
		?>
<!-- ------------------------------------------------------------------>
		<div id="aboutScreen" onclick="showAbout()">
			<pre id="aboutScreenDetails">
					<b id="jemp2">"Jemp 2"</b>
			       		HOW TO PLAY? 
			       	on phone: touch the screen to jump.
			       	on pc: press spacebar.
			       		GOAL?
			       	Dodge incoming objects, 
			       	1 of the objects is an <b id="illusionWord">illusion</b>.

			       	----------------------------------------

			       	A sequel of the first game called "Jemp".

			       	----------------------------------------

			       	Author: King Peter G. Panes
			       	site's date/time of 
			       	completion: May 20, 2020 | Wednesday | 8 pm
			        updated on: Sept. 27, 2020 | Saturday | 6 pm

			       	----------------------------------------

					       	____________
					       /___     ___/
					       	  /    /
					       	 /    /
					       	/    /
					       /____/
					       ___      ___
					      /   \    /  /
					     /     \  /  /
					    /   /\  \/  /
					   /   /  \    /
					  /___/    \__/

					  ___      ___
					  \  \    /  /
					   \  \  /  /
					    \  \/  /
					    /      \
					   /   /\   \
					  /   /  \   \
					 /___/    \___\  for playing. 
			       	
			</pre>
		</div>

		<div id="home" onclick="location.reload()"></div>
		<div id="pause" onclick="pus()"></div>
		<div id="deathScreen">
				<ul>
					<li onclick="retry()">retry</li>
					<li onclick="localStorage.setItem('reload', true), location.reload()">exit</li>
				</ul>
		</div>
		<div id="mainMenu">
			<ul id="menuList">
				<li id="title">Jemp 2</li>
				<li id="userName">User:<input placeholder="name..." id="userNameBox" type="text" maxlength="12"></li>
				<li id="start" onclick="start()">start</li>
				<li id="about" onclick="showAbout()">about</li>
				<li id="leaderboard" onclick="showLeaderboard(1)">leaderboard</li>
			</ul>
		</div>
		<div id="scoreBoard">
			<div id="score">0</div>
		</div>
	
	<canvas id="canvas">
		
	</canvas>

<script type="text/javascript">

	if(localStorage.getItem("reload")){
		localStorage.removeItem('reload');
		location.reload();
	}

	localStorage.setItem("maxScoreCount", 0);
	localStorage.setItem("username", "Anonymous");
	document.cookie = "maxScoreCount=" + localStorage.getItem("maxScoreCount");	
	document.cookie = "username=" + localStorage.getItem("username");		
	let illusionWord = document.querySelector("#illusionWord"); //tinker this soon
	let aboutScreen = document.querySelector("#aboutScreen"),
		aboutScreenDetails = document.querySelector("#aboutScreenDetails"),
		char = new Image(),
		ground1 = new Image(),
		ground2 = new Image(),
		sky = new Image(),
		farClouds1 = new Image(),
		farClouds2 = new Image(),
		clouds1 = new Image(),
		clouds2 = new Image(),
		mntFar1 = new Image(),
		mntFar2 = new Image(),
		mountainsBack1 = new Image(),
		mountainsBack2 = new Image(),
		mountainsFront1 = new Image(),
		mountainsFront2 = new Image(),
		grass1 = new Image(),
		grass2 = new Image(),
		startGameSound = new Audio(),
		aboutGameSound = new Audio(),
		explodeGameSound = new Audio(),
		gameOverSound = new Audio(),
		jumpGameSound = new Audio();

		startGameSound.src = "play.wav";
		aboutGameSound.src = "about.wav";
		explodeGameSound.src = "explode.wav";
		gameOverSound.src = "gameOver.mp3";
		jumpGameSound.src = "jump.wav";
		jumpGameSound.volume = .1;

		char.src = "char.png";

		ground1.src = "ground.png";
		ground2.src = "ground.png";

		sky.src = "sky2.png";
		farClouds1.src = "farClouds.png";
		farClouds2.src = "farClouds.png";
		clouds1.src = "clouds.png";
		clouds2.src = "clouds.png";

		mntFar1.src = "mntFar.png";
		mntFar2.src = "mntFar.png";

		mountainsBack1.src = "mountainsBack.png";
		mountainsBack2.src = "mountainsBack.png";

		mountainsFront1.src = "mountainsFront.png";
		mountainsFront2.src = "mountainsFront.png";

		grass1.src = "grass.png";
		grass2.src = "grass.png";

		aboutScreen.style.width = window.innerWidth;
		aboutScreen.style.height = window.innerHeight;



		let aboutShown = true;
		function showAbout(){
			if(aboutShown){
				aboutScreen.style.display = "block";
				aboutShown = false;
				aboutGameSound.play();
			}else{
				aboutScreen.style.display = "none";
				aboutShown = true;
			}
			
		}
	let tableWrapper = document.querySelector("#table-wrapper");
		tableWrapper.style.width = window.innerWidth;
		tableWrapper.style.height = window.innerHeight;
		function showLeaderboard(s){
			if(s == 1){
				tableWrapper.style.display = "block";
				s = 0;
			}else{
				tableWrapper.style.display = "none";
				s = 1;
			}
		}
	let home = document.querySelector("#home");

	let pause = document.querySelector("#pause");
		pause.style.left = window.innerWidth - 60;

	let deathScreen = document.querySelector("#deathScreen");
		deathScreen.style.top = window.innerHeight / 2 + 10;
		deathScreen.style.left = window.innerWidth / 2 - 220;
	/////////////////////////////////////////////////////////////////////////
	// loading screen (black fukcing square)
	let loadingScreen = document.querySelector("#loadingScreen");
	loadingScreen.style.width = window.innerWidth;
	loadingScreen.style.height = window.innerHeight;
	///////////////////////////////////////////////////////////////////////
	let mainMenu = document.querySelector("#mainMenu"),
		menuList = document.querySelector("#menuList"),
		title = document.querySelector("#title"),
		scoreBoard = document.querySelector("#scoreBoard"),
		score = document.querySelector("#score");

		mainMenu.style.width = window.innerWidth;
		mainMenu.style.height = window.innerHeight;

	let userNameBox = document.querySelector("#userNameBox");
	userNameBox.value = localStorage.getItem("username");
		//start button (start game, hide main menu)
		function start(){
			gameStart = true;
			scoreBoard.style.display = "block";
			mainMenu.style.display = "none";
			//startGameSound.play();

			if(userNameBox.value == ""){
				localStorage.setItem("username", "Anonymous");
			}else{
				localStorage.setItem("username", userNameBox.value);
			}
			
		}
//////////////////////////////////////////////////////////////////////////////////
	let canvas = document.querySelector("#canvas"),
		c = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

	let scoreCount = 0;

	let colors = ['red', 'orange', 'yellow', 'lightgreen', 'skyblue'],
		colndx = Math.floor(Math.random()*colors.length);

		//score board object
		let scoreBlock = function(){
			this.x = canvas.width / 2 - 250;
			this.y = -200; // hidden at the top of the screen

			this.vy = 10;

			this.gravity = 1;

			this.numberX = canvas.width / 2 - 40;
			this.numberY = -150;

			this.update = ()=>{

				this.vy += this.gravity;

				this.y += this.vy;
				this.numberY += this.vy;

				//your score position ground collision
				if(this.y >= canvas.height / 2 - 100){
					this.y = canvas.height / 2 - 100;
					this.vy = -this.vy;
					this.gravity+=2;
					if(dead){
						deathScreen.style.display = "block";
					}
				}
				// score count ground collision
				if(this.numberY >= canvas.height / 2 - 110){
					this.numberY = canvas.height / 2 - 110;
				
				}

				
			}
			this.draw = ()=>{
				if(window.outerWidth > 500){
					c.font = '50px tahoma';
					c.fillStyle = 'white';
					c.fillText('High score: ', this.x + 100, this.y-100);

					c.fillStyle = 'red';
					c.fillText(localStorage.getItem('maxScoreCount'), this.numberX, this.numberY + 100 - 140);

					c.font = '50px tahoma';
					c.fillStyle = 'white';
					c.fillText('Your score: ', this.x + 100, this.y);

					c.fillStyle = 'red';
					c.fillText(scoreCount, this.numberX, this.numberY + 70);
				}

				if(window.outerWidth < 500){
					c.font = '100px tahoma';
					c.fillStyle = 'white';
					c.fillText('High score: ', this.x, this.y-250);

					c.fillStyle = 'red';
					c.fillText(localStorage.getItem('maxScoreCount'), this.numberX, this.numberY + 100 - 240);

					c.font = '100px tahoma';
					c.fillStyle = 'white';
					c.fillText('Your score: ', this.x, this.y);

					c.fillStyle = 'red';
					c.fillText(scoreCount, this.numberX, this.numberY + 100);
				}

				this.update();
			}
		}

		//explosion particles
		let explode = false;
		let indx = 0;
		let particles = function(x, y, col){
			this.siz = 25;
			this.x = x;
			this.y = y;
			this.vx = Math.floor(Math.random()*10 - 5);
			this.vy = Math.floor(Math.random()* 10 - 5);
			this.gravity = .5;
			this.idd = indx++;
			this.life = 0;
			this.maxLife = 20;
			this.col = col;

			this.update = ()=>{

				this.vy += this.gravity;

				this.x += this.vx;
				this.y += this.vy;

				//shrink particles
				if(this.siz <= 2){
					this.siz = 2;
				}else{
					this.siz--;
				}

				this.life++;
				if(this.life >= this.maxLife){
					for(let x = 0; x <= particles_con.length; x++){// delete every particles_con particle
						delete particles_con[x];
					}
					/*delete con[this.idd]*/
					
				}

				//ground collision
				if(this.y > canvas.height / 2 - this.siz){
					this.y = canvas.height / 2 - this.siz;
				
					this.vx = 0;
					this.vy = 0;
				}

				//left side screen collision
				if(this.x <= 0){
					this.x = 0;
				}
			}
			this.draw = ()=>{
				//particle
				/*c.fillStyle = this.col;
				c.fillRect(this.x, this.y, this.siz, this.siz)*/
				c.beginPath();
				c.arc(this.x, this.y, this.siz, 0, Math.PI * 2);
				c.fillStyle = this.col;
				c.fill();

				this.update();
			}
		}

		// obstacle
		let obstacle = function(vx){
			this.siz = Math.floor(Math.random()*50 + 50);
			this.x = canvas.width - this.siz;
			this.y = canvas.height / 2 - this.siz;
			this.vx = vx;
			this.vy = 0;
			this.gravity = 2;

			this.update = ()=>{

				this.vy += this.gravity;

				this.x += this.vx;
				this.y += this.vy;

				//left side screen collision
				if(this.x <= -this.siz){

					explodeGameSound.play();

					//particles explosion left side of screen
					createParticles(0, canvas.height / 2 - this.siz, colors[colndx]);
					explode = true;

					//reset to starting point
					this.vy = Math.floor(Math.random()*-30);
					this.x = canvas.width;
					this.siz = Math.floor(Math.random()*50 + 50);

					//increase score and display to score board if not dead yet
					if(!dead){
						scoreCount++;
						score.innerHTML = scoreCount;
					}
					

					//change obstacle color
					colndx = Math.floor(Math.random()*colors.length);
					
				}

				//ground collision
				if(this.y > canvas.height / 2 - this.siz){
					this.y = canvas.height / 2 - this.siz;
				

				}

				//increase obstacle speed if reached x score
				// default speed of 1st = -20, 2nd = -10
				if(!dead){
					if(scoreCount == 10){
						obstacles.vx = -15;
						obstacles2.vx = -10;
					}else if(scoreCount == 20){
						obstacles.vx = -20;
						obstacles2.vx = -15;
					}else if(scoreCount == 30){
						obstacles.vx = -25;
						obstacles2.vx = -20;
					}else if(scoreCount == 40){
						obstacles.vx = -30;
						obstacles2.vx = -25;
					}else if(scoreCount == 50){
						obstacles.vx = -35;
						obstacles2.vx = -30;
					}
					// jump to higher speed if score reached 60
					else if(scoreCount == 60){
						obstacles.vx = -80;
						obstacles2.vx = -70;
					}
				}
				

			}

			this.draw = ()=>{
				

				//obstacle
				c.fillStyle = colors[colndx];
				c.fillRect(this.x, this.y, this.siz, this.siz);
				/*c.beginPath();
				c.arc(this.x, this.y, this.siz, 0, Math.PI * 2);
				c.fillStyle = colors[colndx];
				c.fill();*/

				this.update();
			}
		}
		

		// user
		let player = function(){
			this.siz = 50;
			this.x = canvas.width / 4 - this.siz / 2;
			this.y = canvas.height / 2 - this.siz;
			this.vx = 0;
			this.vy = 0;
			this.gravity = 0;
			this.friction = 0;

			this.farClouds1X = 0;
			this.farClouds1Y = 0;
			this.farClouds2X = canvas.width;
			this.farClouds2Y = 0;

			this.clouds1X = 0;
			this.clouds1Y = 0;
			this.clouds2X = canvas.width + 100;
			this.clouds2Y = 0;

			this.mntFar1X = 0;
			this.mntFar1Y = 0;
			this.mntFar2X = canvas.width;
			this.mntFar2Y = 0;

			this.mountainsBack1X = 0;
			this.mountainsBack1Y = 0;
			this.mountainsBack2X = canvas.width;
			this.mountainsBack2Y = 0;

			this.mountainsFront1X = 0;
			this.mountainsFront1Y = 0;
			this.mountainsFront2X = canvas.width;
			this.mountainsFront2Y = 0;

			this.grass1X = 0;
			this.grass1Y = 0;
			this.grass2X = canvas.width;
			this.grass2Y = 0;

			this.ground1X = 0;
			this.ground1Y = canvas.height / 2;

			this.ground2X = canvas.width + 5;
			this.ground2Y = canvas.height / 2;

			this.update = ()=>{
				//far clouds
				this.farClouds1X += -.5;
				this.farClouds2X += -.5;

				//clouds
				this.clouds1X += -2;
				this.clouds2X += -2;

				//mountain far
				this.mntFar1X += -1;
				this.mntFar2X += -1;

				//mountains at the back
				this.mountainsBack1X += -3;
				this.mountainsBack2X += -3;

				//mountains at the front
				this.mountainsFront1X += -4;
				this.mountainsFront2X += -4;

				//grass
				this.grass1X += -5;
				this.grass2X += -5;

				//ground
				this.ground1X += -6;
				this.ground2X += -6;



				//apply friction when going left or right
				this.vx *= this.friction;

				//apply gravity
				this.vy += this.gravity;

				this.x += this.vx;
				this.y += this.vy;

				//ground collision
				if(this.y > canvas.height / 2 - this.siz){
					this.y = canvas.height / 2 - this.siz;
					this.vy = 0;
					this.gravity = 0;

					onAir = true;
				}
				//left side screen collision
				if(this.x <= 0){
					this.x = 0;
				}
				//right side screen collision
				if(this.x >= canvas.width - this.siz){
					this.x = canvas.width - this.siz;
				}
				//far clouds out of bound
				if(this.farClouds1X <= -2000){
					this.farClouds1X = canvas.width;
				}
				if(this.farClouds2X <= -2000){
					this.farClouds2X = canvas.width;
				}

				//clouds out of bound
				if(this.clouds1X <= -2000){
					this.clouds1X = canvas.width;
				}
				if(this.clouds2X <= -2000){
					this.clouds2X = canvas.width;
				}

				//mountain far
				if(this.mntFar1X <= -2000){
					this.mntFar1X = canvas.width;
				}
				if(this.mntFar2X <= -2000){
					this.mntFar2X = canvas.width;
				}

				//mountains at the back out of bound
				if(this.mountainsBack1X <= -2000){
					this.mountainsBack1X = canvas.width;
				}
				if(this.mountainsBack2X <= -2000){
					this.mountainsBack2X = canvas.width;
				}

				//mountains at the front
				if(this.mountainsFront1X <= -2000){
					this.mountainsFront1X = canvas.width;
				}
				if(this.mountainsFront2X <= -2000){
					this.mountainsFront2X = canvas.width;
				}

				//grass
				if(this.grass1X <= -2000){
					this.grass1X = canvas.width;
				}
				if(this.grass2X <= -2000){
					this.grass2X = canvas.width;
				}

				//if ground is off screen
				if(this.ground1X <= -2000){
					this.ground1X = canvas.width;
				}

				if(this.ground2X <= -2000){
					this.ground2X = canvas.width + 5;
				}


			
				//getting the distance between the obstacle and the player
				function getDist(userX, userY, obsX, obsY){
					let xDist = obsX - userX;
					let yDist = obsY - userY;

					return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
				}
				//user and obstacle collision
				if(getDist(this.x, this.y, obstacles.x, obstacles.y) <= obstacles.siz / 2){

					explodeGameSound.play();
					gameOverSound.play();
					/*console.log(getDist(this.x, this.y, obstacles.x, obstacles.y));*/

					//particles explosion of user and obstacle simultaneously
					createParticles(this.x, this.y, "lightgray");
					createParticles(obstacles.x, obstacles.y, colors[colndx]);
					explode = true;

					//hide score board after death
					scoreBoard.style.display = "none";

					//pause button hide after death
					pause.style.display = "none";

					//hide home button
					home.style.display = "none";

					// if collided hide the user and the obstacle to the top screen
					this.y = 0 - this.siz;
					this.vy = 0;
					this.gravity = 0;

					//first object
					obstacles.y = 0 - 100;
					obstacles.vx = 0;
					obstacles.vy = 0;
					obstacles.gravity = 0;

					//second object
					obstacles2.y = 0 - 200;
					obstacles2.vx = 0;
					obstacles2.vy = 0;
					obstacles2.gravity = 0;

					dead = true;

					if(scoreCount >= localStorage.getItem('maxScoreCount')){
						localStorage.setItem('maxScoreCount', scoreCount);
						
						document.cookie = "maxScoreCount=" + localStorage.getItem("maxScoreCount");			
						document.cookie = "username=" + localStorage.getItem("username");	
					}

				}
				
			}
			this.draw = ()=>{
				//bg terrains bla bla bla
				c.fillStyle = "rgba(0,0,0,0.4)";
				c.fillRect(0, 0, canvas.width, canvas.height);
				
				c.drawImage(sky, 0, 0);
				/*c.drawImage(farClouds1, this.farClouds1X, this.farClouds1Y);
				c.drawImage(farClouds2, this.farClouds2X, this.farClouds2Y);
				c.drawImage(mntFar1, this.mntFar1X, this.mntFar1Y);
				c.drawImage(mntFar2, this.mntFar2X, this.mntFar2Y);
				c.drawImage(clouds1, this.clouds1X, this.clouds1Y);
				c.drawImage(clouds2, this.clouds2X, this.clouds2Y);
				c.drawImage(mountainsBack1, this.mountainsBack1X, this.mountainsBack1Y);
				c.drawImage(mountainsBack2, this.mountainsBack2X, this.mountainsBack2Y);
				c.drawImage(mountainsFront1, this.mountainsFront1X, this.mountainsBack1Y);
				c.drawImage(mountainsFront2, this.mountainsFront2X, this.mountainsBack2Y);
				c.drawImage(grass1, this.grass1X, this.grass1Y);
				c.drawImage(grass2, this.grass2X, this.grass2Y);*/


				//ground
				/*c.fillStyle = "lightgray";
				c.fillRect(0, canvas.height / 2, canvas.width, canvas.height)*/
				c.drawImage(ground1, this.ground1X, this.ground1Y);
				c.drawImage(ground2, this.ground2X, this.ground2Y);

				//player
				/*c.fillStyle = "white";
				c.fillRect(this.x, this.y, this.siz, this.siz);*/
				/*c.beginPath();
				c.arc(this.x, this.y, this.siz, 0, Math.PI*2);
				c.fillStyle = "white";
				c.fill();*/
				/*
				c.fillStyle = "black";
				c.fillRect(this.x + 5, this.y + 5, 40, 40);*/
				c.drawImage(char, this.x, this.y);

				this.update();
			}
		}
		//player, obstacle, particles creation
		let user = new player(),
			obstacles = new obstacle(-15),
			obstacles2 = new obstacle(-10),
			scoreBlock1 = new scoreBlock();
		/////////////////////////////////////////

		
		/////obstacles////////////////////////////////////////////////////////////////

		// i forgot about this heheh shit!!

		//////////////////////////////////////////////////////////////////////////////

		//particles///////////////////////////////////////////////////////////////////
		let particles_con = [];

		function explodeParticles(){
			for(let i in particles_con){
					particles_con[i].draw();
				}
		}
		function createParticles(x, y, col){
			for(let i = 1; i <= 20; ++i){
				particles_con.push(new particles(x, y, col));
			}
		
		}
		//////////////////////////////////////////////////////////////////////////
		
		//game loop/////////////////////////////////////////////////
		let gameStart = false,
			pauseState = false;



	setInterval(()=>{
				if(gameStart && !pauseState){
					user.draw();
					obstacles.draw();
					obstacles2.draw();
					
					
					//particles explode
					if(explode){
						explodeParticles();
					}

					if(dead){
						scoreBlock1.draw();
					}
				}	
			}, 30);

	


		/////////////////////////////////////////////////////////////
		// pause the fukcing game function
		function pus(){
			if(!pauseState){
				pause.style.background = "url('play.png')";
				pause.style.backgroundSize = "50px 50px";
				pauseState = true;
			}else{
				pause.style.background = "url('pause.png')";
				pause.style.backgroundSize = "50px 50px";
				pauseState = false;
			}
		}
		
		function retry(){ //fucking hard to review all this shit all over again just to retry

			//return everyting to its default values
			deathScreen.style.display = "none";
			scoreBoard.style.display = "block";
			scoreCount = 0;
			score.innerHTML = 0;

			//pause button show when retry
			pause.style.display = "block";

			//home buttn show when retry
			home.style.display = "block";

			user.y = canvas.height / 2 - user.siz;
			user.x = canvas.width / 4 - user.siz / 2;

			obstacles.x = canvas.width - obstacles.siz;
			obstacles.y = canvas.height / 2 - obstacles.siz;
			obstacles.gravity = 2;
			obstacles.vx = -20;

			obstacles2.x = canvas.width - obstacles.siz;
			obstacles2.y = canvas.height / 2 - obstacles.siz;
			obstacles2.gravity = 2;
			obstacles2.vx = -10;

			scoreBlock1.x = canvas.width / 2 - 250;
			scoreBlock1.y = -200; // hidden at the top of the screen
			scoreBlock1.vy = 10;
			scoreBlock1.gravity = 1;

			scoreBlock1.numberX = canvas.width / 2 - 40;
			scoreBlock1.numberY = -150;

			dead = false;
			onAir = true;
		}
		//reponsive screen ?? :)
		if(window.outerWidth < 1080){
			aboutScreen.style.transform = "translateX(-150px)";
			aboutScreenDetails.style.transform = "translateX(-150px)";
		}
		if(window.outerWidth < 800){
			menuList.style.marginTop = "15%";
			menuList.style.fontSize = "80px";
			title.style.fontSize = "150px";
			score.style.fontSize = "100px";
			user.terrain2X = canvas.width + 1000;
		}
		if(window.outerWidth < 500){
			menuList.style.marginTop = "30%";
			menuList.style.fontSize = "80px";
			title.style.fontSize = "150px";
			mainMenu.style.backgroundSize = "2000px 2000px";
		}
		if(window.outerWidth < 400){
			menuList.style.marginTop = "30%";
			menuList.style.fontSize = "100px";
			title.style.fontSize = "200px";
			score.style.fontSize = "100px";
			userNameBox.style.fontSize = "80px";
			userNameBox.style.width = "350px";
		}

		//keyboard controls / screen controls
		let onAir = true,
			dead = false;
		document.addEventListener('keydown', (e)=>{
			if(e.repeat){return}
			// 65 left 68 right
			// jump
			if(onAir && !dead){
				if(e.keyCode == 32){
					user.vy = -40;
					user.gravity = 5;
					onAir = false;
					jumpGameSound.play();
				}
			}
			/*
				if(e.keyCode == 65){//go left
					user.vx = -5;
					user.friction = .999;
					movingLeft = false;
					movingRight = true;
				
			}
			
				if(e.keyCode == 68){//go right
					user.vx = 5;
					user.friction = .999;
					movingRight = false;
					movingLeft = true;
				
			}*/
					
		})

		canvas.addEventListener('touchstart', ()=>{
			if(onAir && !dead){
				
					user.vy = -40;
					user.gravity = 5;
					onAir = false;
					jumpGameSound.play();
				
			}
		}, {passive:true}) // this passive:true shit is useful, research soon

		// refresh on window size change
		window.addEventListener("resize", ()=>{
			//location.reload();
		})
		
		//show everything only when the assets are all loaded
		window.onload = ()=>{
			loadingScreen.style.display = "none";

		}
</script>

<?php
	//setcookie("maxScoreCount", 0);
	//echo $_COOKIE["maxScoreCount"];

	//echo $_COOKIE["userName"];
	//echo "<script>console.log(" . $_COOKIE["maxScoreCount"] . ");</script>";

	$listScore = array();

	//put the database list to the $list array
	for ($i=1; $i <= 10; $i++) {
		$selectUser = "SELECT score FROM leaderboard WHERE id = " . $i;
		$retval = mysqli_query($conn, $selectUser);
		$row = mysqli_fetch_array($retval, MYSQLI_ASSOC);

		$listScore[$i] = $row['score'];
		
		//echo $row['score'] . "<br>";
		//$array = [1,2,3];
		//$newArraySize = array_push($array, 5, 6);
		//$list[$i] = 
	}

	/*for ($i=1; $i <= count($listName); $i++) { 
		echo $listName[$i] . "<br>";
	}*/

	//compare shit
	for ($i=1; $i <= count($listScore) ; $i++) { //echo "a" . "<br>";

		if($_COOKIE["maxScoreCount"] >= $listScore[$i]){//score is greater than one of the user's score in the database

			if($i == 10){ //if greater than the last item on the list
				mysqli_query($conn, "UPDATE leaderboard SET userName =  '" . $_COOKIE["username"] . "' WHERE ID = 10");
				mysqli_query($conn, "UPDATE leaderboard SET score =  '" . $_COOKIE["maxScoreCount"] . "' WHERE ID = 10");
				break;
			}

			for ($ii=count($listScore); $ii >= $i ; $ii--) { //echo $ii . "<br>";
				
				if($ii == $i){ //if equal to the same item in the selection
					mysqli_query($conn, "UPDATE leaderboard SET userName =  '" . $_COOKIE["username"] . "' WHERE ID = {$i}");
					mysqli_query($conn, "UPDATE leaderboard SET score =  '" . $_COOKIE["maxScoreCount"] . "' WHERE ID = {$i}");
					echo "<script>document.cookie = 'maxScoreCount=0';localStorage.setItem('maxScoreCount', 0);</script>";
				}else{
					$sqlSelectUsername = "SELECT userName FROM leaderboard WHERE ID = {intval($ii) - 1}";
					$SSUNRetVal = mysqli_query($conn, $sqlSelectUsername);
					$SSUNrow = mysqli_fetch_array($SSUNRetVal);

					$selectScore = "SELECT score FROM leaderboard WHERE ID = {intval($ii) - 1}";
					$SSRetVal = mysqli_query($conn, $selectScore);
					$SSrow = mysqli_fetch_array($SSRetVal);

					mysqli_query($conn, "UPDATE leaderboard SET userName = '" . $SSUNrow['userName'] . "' WHERE ID =" . $ii);
					
					mysqli_query($conn, "UPDATE leaderboard SET score = {$SSrow['score']} WHERE ID = {$ii}");
				}
			}
			break;
		}
		
	}

	// test sql query in phpmyadmin
	/*
	UPDATE `leaderboard` SET `username` = 'user1', `score`=10 WHERE ID = 1;
	UPDATE `leaderboard` SET `username` = 'user2', `score`=9 WHERE ID = 2;
	UPDATE `leaderboard` SET `username` = 'user3', `score`=8 WHERE ID = 3;
	UPDATE `leaderboard` SET `username` = 'user4', `score`=7 WHERE ID = 4;
	UPDATE `leaderboard` SET `username` = 'user5', `score`=6 WHERE ID = 5;
	UPDATE `leaderboard` SET `username` = 'user6', `score`=5 WHERE ID = 6;
	UPDATE `leaderboard` SET `username` = 'user7', `score`=4 WHERE ID = 7;
	UPDATE `leaderboard` SET `username` = 'user8', `score`=3 WHERE ID = 8;
	UPDATE `leaderboard` SET `username` = 'user9', `score`=2 WHERE ID = 9;
	UPDATE `leaderboard` SET `username` = 'user10', `score`=1 WHERE ID = 10;
	*/

?>
</body>
</html>