let canvas = getHtmlElements("#canvas"),
	mirrorCanvas = getHtmlElements("#mirrorCanvas"),
		c = canvas.getContext("2d"),
		Mc = mirrorCanvas.getContext("2d");
		canvas.width = 600;
		canvas.height = 1080;
	let canvas_width = window.innerWidth,
		canvas_height = window.innerHeight;

///////////////////////////////////////////////////

	let loopRandomValueController = getHtmlElements("#loopRandomValueController"),
		GCOController = getHtmlElements("#GCOController"),
		objectController = getHtmlElements("#objectController"),
		sizeXController = getHtmlElements("#sizeXController"),
		sizeYController = getHtmlElements("#sizeYController"),
		gravityController = getHtmlElements("#gravityController"),
		lifeTimeController = getHtmlElements("#lifeTimeController"),
		randomlifeTimeController = document.querySelector("#randomlifeTimeController"),
		posXController = getHtmlElements("#posXController"),
		posYController = getHtmlElements("#posYController"),
		randomXController = getHtmlElements("#randomXController"),
		randomYController = getHtmlElements("#randomYController"),
		velXMaxController = getHtmlElements("#velXMaxController"),
		velXMinController = getHtmlElements("#velXMinController"),
		velYMaxController = getHtmlElements("#velYMaxController"),
		velYMinController = getHtmlElements("#velYMinController"),
		particleCountController = getHtmlElements("#particleCountController"),
		creationTimeController = getHtmlElements("#creationTimeController"),
		redChannelController = getHtmlElements("#redChannelController"),
		greenChannelController = getHtmlElements("#greenChannelController"),
		blueChannelController = getHtmlElements("#blueChannelController"),
		alphaChannelController = getHtmlElements("#alphaChannelController"),
		bgRedChannelController = getHtmlElements("#bgRedChannelController"),
		bgGreenChannelController = getHtmlElements("#bgGreenChannelController"),
		bgBlueChannelController = getHtmlElements("#bgBlueChannelController"),
		bgAlphaChannelController = getHtmlElements("#bgAlphaChannelController"),
		randomColorController = getHtmlElements("#randomColorController"),
		canvasBoundaryController = getHtmlElements("#canvasBoundaryController"),
		linkController = getHtmlElements("#linkController"),
		frictionXController = getHtmlElements("#frictionXController"),
		frictionYController = getHtmlElements("#frictionYController"),
		collisionController = getHtmlElements("#collisionController"),
		deletePreviousFrames = getHtmlElements("#deletePreviousFrames"),
		recordCanvas = getHtmlElements("#recordCanvas"),
		demoListController = getHtmlElements("#demoListController"),
		particleImageController = getHtmlElements("#particleImageController"),
		modeController = getHtmlElements("#modeController"),
		lifeModeController = getHtmlElements("#lifeModeController"),
		loopDemoController = getHtmlElements("#loopDemoController"),
		movementController = getHtmlElements("#movementController"),
		infoFrame = getHtmlElements("#infoFrame"),
		aboutController = getHtmlElements("#aboutController"),
		aboutInfoP = getHtmlElements("#aboutInfoP"),
		deletionModeController = getHtmlElements("#deletionModeController"),
		randomSizeController = getHtmlElements("#randomSizeController"),
		lifeTimeControllerLabel = getHtmlElements("#lifeTimeControllerLabel"),
		randomlifeTimeControllerLabel = getHtmlElements("#randomlifeTimeControllerLabel"),
		framerateController = getHtmlElements("#framerateController"),
		backgroundController = getHtmlElements("#backgroundController"),
		pauseCanvasController = getHtmlElements("#pauseCanvasController"),
		spawnRulesController = getHtmlElements("#spawnRulesController");

	let partImage = new Image(),
		fReader = new FileReader();
		
	//default values
	let partAmount = particleCountController.value,
		partArr = [],
		partSizW = parseInt(sizeXController.value),
		partSizH = parseInt(sizeYController.value);

		posXController.max = canvas.width;
		posYController.max = canvas.height/2;
		posXController.value = posXController.max/2 - partSizW/2; // only applies on rects, hays kapoy
		posYController.value = posYController.max/2 - partSizH/2;

	let controllerFrame = document.querySelector("#controllerFrame");

	let frameRate = 0,
		FR = parseInt(framerateController.value),
		isPaused = false,
		indx = 0, 
		event, 
		demoSelected = 0;

	let particle = function(){
			this.mass = .0001;
			this.r = Math.random()*255;
			this.g = Math.random()*255;
			this.b = Math.random()*255;
			this.gravity = parseInt(gravityController.value);
			this.maxLife = parseInt(lifeTimeController.value);
			this.life = 0;
			this.friction = {
				x: parseFloat(frictionXController.value),
				y: parseFloat(frictionYController.value)
			}
			this.siz = {
				w: parseInt(sizeXController.value),
				h: parseInt(sizeYController.value)
			}
			this.pos = {
				/*x: canvas.width/2 -  this.siz.w / 2,
				y: canvas.height/2 - canvas.height/4 - this.siz.h /2*/
				x: parseInt(posXController.value),
				y: parseInt(posYController.value)
			}
			this.vel = {
				x: Math.random()*parseInt(velXMaxController.value) - parseInt(velXMinController.value),
				y: Math.random()*parseInt(velYMaxController.value) - parseInt(velYMinController.value)
			}
			this.idd = indx++;

			this.tempVel = {
				x: this.vel.x,
				y: this.vel.y
			}
			this.angle = Math.floor(Math.random()*360);
			this.radius = Math.random()*400;
			this.rndSpeed = Math.random()*5-2.5;
			this.Cspeed = Math.random()*1+1;
			this.CCspeed = Math.random()*-1-1;

			this.velAssignerLimitor = {
				x: 0,
				y: 0
			}

			this.opacity = parseFloat(alphaChannelController.value);

			//randomize x and y spawn position if...
			if(randomXController.checked){ 
				switch(objectController.options.selectedIndex){
					case 0:
					case 1: // rectangle
						this.pos.x = (Math.random()*canvas.width-parseInt(sizeXController.value))+parseInt(sizeXController.value);
					break;
					case 2: // circle
						this.pos.x = Math.random()*canvas.width;
						if(this.pos.x < this.siz.w){
							this.pos.x = this.siz.w;
						}
					break;
				}
			}
			if(randomYController.checked){ 
				switch(objectController.options.selectedIndex){
					case 0:
					case 1: // rectangle
						this.pos.y = (Math.random()*canvas.height-parseInt(sizeYController.value))+parseInt(sizeYController.value);
					break;
					case 2: // circle
						this.pos.y = Math.random()*canvas.height/2;
						if(this.pos.y < this.siz.h){
							this.pos.y = this.siz.h;
						}
					break;
				}
			}
			
			//randomize lifetime value
			if(parseInt(randomlifeTimeController.value) == 1){
				this.maxLife = Math.floor(Math.random()*parseInt(lifeTimeController.value));
			}
			
			// randomize size size
			if(randomSizeController.checked){
				this.siz.w = Math.floor(Math.random()*parseInt(sizeXController.value));
				this.siz.h = Math.floor(Math.random()*parseInt(sizeYController.value));
			}

			this.update = ()=>{

				//movement operation
				switch(movementController.options.selectedIndex){
					case 0:
					case 1: // linear
						this.vel.y += this.gravity;

						this.vel.x *= this.friction.x;
						this.vel.y *=  this.friction.y;

						this.pos.x += this.vel.x;
						this.pos.y += this.vel.y;

					break;
					case 2: // circular (clockwise)
						this.pos.x = this.radius * Math.cos(this.angle * (Math.PI/180)) + canvas.width/2;
						this.pos.y = this.radius * Math.sin(this.angle * (Math.PI/180)) + canvas.height/4;
						this.angle += this.Cspeed;
					break;
					case 3: // circular (counter-clockwise)
						this.pos.x = this.radius * Math.cos(this.angle * (Math.PI/180)) + canvas.width/2;
						this.pos.y = this.radius * Math.sin(this.angle * (Math.PI/180)) + canvas.height/4;
						this.angle += this.CCspeed;
					break;
					case 4: // circular (random)
						this.pos.x = this.radius * Math.cos(this.angle * (Math.PI/180)) + canvas.width/2;
						this.pos.y = this.radius * Math.sin(this.angle * (Math.PI/180)) + canvas.height/4;
						this.angle += this.rndSpeed;
					break;
					case 5: // linear (random)
						this.vel.y += this.gravity;

						this.vel.x *= this.friction.x;
						this.vel.y *= this.friction.y;

						this.pos.x += this.vel.x;
						this.pos.y += this.vel.y;

						this.velAssignerLimitor.x++;
						this.velAssignerLimitor.y++;

						if(this.velAssignerLimitor.x >= 5){
							this.velAssignerLimitor.x = 0;
							this.vel.x = Math.random()*parseInt(velXMaxController.value) - parseInt(velXMinController.value);
							//this.vel.x = Math.random() * 2 * Math.PI;

						}
						if(this.velAssignerLimitor.y >= 5){
							this.velAssignerLimitor.y = 0;
							this.vel.y = Math.random()*parseInt(velYMaxController.value) - parseInt(velYMinController.value);
							//this.vel.y = Math.random() * 2 * Math.PI;
						}

					break;
				}

				//generating mode operation
				switch(lifeModeController.options.selectedIndex){
					case 0: // finite life mode
						switch(deletionModeController.options.selectedIndex){
							case 0:
							case 1: // life points
								this.life++;
								if (this.life >= this.maxLife){
									delete partArr[this.idd];
								}
							break;
							case 2: // opacity
								this.opacity -= .01;
								if(this.opacity <= 0){
									delete partArr[this.idd];
								}
							break;
							case 3: // shrink
								this.siz.w -= .1;
								this.siz.h -= .1;
								if(this.siz.w <= 0 || this.siz.h <= 0){
									delete partArr[this.idd];
								}
							break;
							case 4: // grow
								this.siz.w += .5;
								this.siz.h += .5;
								if(this.siz.w >= 150 || this.siz.h >= 150){
									delete partArr[this.idd];
								}
							break;
						}
						
					break;
					case 1:

					break;
					case 2: // finite life mode
						switch(deletionModeController.options.selectedIndex){
							case 0:
							case 1: // life points
								this.life++;
								if (this.life >= this.maxLife){
									delete partArr[this.idd];
								}
							break;
							case 2: // opacity
								this.opacity -= .01;
								if(this.opacity <= 0){
									delete partArr[this.idd];
								}
							break;
							case 3: // shrink
								this.siz.w -= .1;
								this.siz.h -= .1;
								if(this.siz.w <= 0 || this.siz.h <= 0){
									delete partArr[this.idd];
								}
							break;
							case 4: // grow
								this.siz.w += .5;
								this.siz.h += .5;
								if(this.siz.w >= 150 || this.siz.h >= 150){
									delete partArr[this.idd];
								}
							break;
						}
					break;
				}
				
				//canvas boundary operation
				switch(canvasBoundaryController.options.selectedIndex){
					case 0:

					break;
					case 1:
						// none
						if(this.pos.x > canvas.width){
							//this.pos.x = 0 - this.siz.w;
							delete partArr[this.idd];
						}
						if(this.pos.x < 0 - this.siz.w){
							//this.pos.x = canvas.width;
							delete partArr[this.idd];
						}
						if(this.pos.y > canvas.height / 2){
							//this.pos.y = 0 - this.siz.h;
							delete partArr[this.idd];

							//this.vel.y = -this.vel.y
						}
						if(this.pos.y < 0 - this.siz.h){
							//this.pos.y = canvas.height / 2 - this.siz.h;
							delete partArr[this.idd];
						}
					break;
					case 2:
						// solid
						switch(objectController.options.selectedIndex){
							case 0:
							case 1: //square collision
								if(this.pos.x > canvas.width - this.siz.w){
									this.pos.x = canvas.width - this.siz.w
									this.vel.x = -this.vel.x
								}
								if(this.pos.x < 0){
									this.pos.x = 0
									this.vel.x = -this.vel.x
								}
								if(this.pos.y > canvas.height / 2 - this.siz.h){
									this.pos.y = canvas.height / 2 - this.siz.h
									this.vel.y = -this.vel.y
								}
								if(this.pos.y < 0){
									this.pos.y = 0
									this.vel.y = -this.vel.y
								}
							break;
							case 2: //circle collision
								if(this.pos.x > canvas.width - this.siz.w){
									this.pos.x = canvas.width - this.siz.w
									this.vel.x = -this.vel.x
								}
								if(this.pos.x < 0 + this.siz.w){
									//this.pos.x = 0 + this.siz.w
									this.vel.x = -this.vel.x
								}
								if(this.pos.y > canvas.height / 2 - this.siz.w){
									this.pos.y = canvas.height / 2 - this.siz.w
									this.vel.y = -this.vel.y
								}
								if(this.pos.y < 0 + this.siz.w){
									//this.pos.y = 0 + this.siz.w
									this.vel.y = -this.vel.y
								}
							break;
						}
						
					break;
					case 3:
						// portal
						if(this.pos.x > canvas.width){
							this.pos.x = 0 - this.siz.w
						}
						if(this.pos.x < 0 - this.siz.w){
							this.pos.x = canvas.width
						}
						if(this.pos.y > canvas.height / 2){
							this.pos.y = 0 - this.siz.h
							this.vel.y = this.tempVel.y
						}
						if(this.pos.y < 0 - this.siz.h){
							this.pos.y = canvas.height / 2
						}
					break;
				}

				//particle collision operation
				switch(collisionController.options.selectedIndex){
					case 0:
					case 1:
					break;
					case 2: // particles
						
						switch(objectController.options.selectedIndex){
							case 0:
							case 1:
								//rectangle collision
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < this.siz.w){
											resolveCollision(this, partArr[i]);
									}
								}
							break;
							case 2:
								//circles collision
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < this.siz.w*2){
											resolveCollision(this, partArr[i]);
									}
								}
							break;
						}
					break;
				}

				
			}
			this.draw = ()=>{ 
				switch(GCOController.options.selectedIndex){ // Global Composite Operation
					case 1:
						c.globalCompositeOperation = 'source-over';
					break;
					case 2:
						c.globalCompositeOperation = 'source-in';
					break;
					case 3:
						c.globalCompositeOperation = 'source-out';
					break;
					case 4:
						c.globalCompositeOperation = 'source-atop';
					break;
					case 5:
						c.globalCompositeOperation = 'destination-over';
					break;
					case 6:
						c.globalCompositeOperation = 'destination-in';
					break;
					case 7:
						c.globalCompositeOperation = 'destination-out';
					break;
					case 8:
						c.globalCompositeOperation = 'destination-atop';
					break;
					case 9:
						c.globalCompositeOperation = 'lighter';
					break;
					case 10:
						c.globalCompositeOperation = 'copy';
					break;
					case 11:
						c.globalCompositeOperation = 'xor';
					break;
					case 12:
						c.globalCompositeOperation = 'multiply';
					break;
					case 13:
						c.globalCompositeOperation = 'screen';
					break;
					case 14:
						c.globalCompositeOperation = 'overlay';
					break;
					case 15:
						c.globalCompositeOperation = 'darken';
					break;
					case 16:
						c.globalCompositeOperation = 'lighten';
					break;
					case 17:
						c.globalCompositeOperation = 'color-dodge';
					break;
					case 18:
						c.globalCompositeOperation = 'color-burn';
					break;
					case 19:
						c.globalCompositeOperation = 'hard-light';
					break;
					case 20:
						c.globalCompositeOperation = 'soft-light';
					break;
					case 21:
						c.globalCompositeOperation = 'difference';
					break;
					case 22:
						c.globalCompositeOperation = 'exclusion';
					break;
					case 23:
						c.globalCompositeOperation = 'hue';
					break;
					case 24:
						c.globalCompositeOperation = 'saturation';
					break;
					case 25:
						c.globalCompositeOperation = 'color';
					break;
					case 26:
						c.globalCompositeOperation = 'luminosity';
					break;
				}

				if(randomColorController.checked){
					c.fillStyle = "rgba(" + this.r + ", " + this.g + ", " + this.b + "," + this.opacity + ")";
				}else{
					c.fillStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + this.opacity + ")";
				}
				
				switch(linkController.options.selectedIndex){ // link
					case 0:
					case 1:
					break;
					
					case 2: // center
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(objectController.options.selectedIndex){
							case 0:
							case 1: // square
								c.beginPath();
								c.moveTo(canvas.width/2, canvas.height/2/2);
								c.lineTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								c.stroke();
							break;
							case 2: //circle
								c.beginPath();
								c.moveTo(canvas.width/2, canvas.height/4);
								c.lineTo(this.pos.x, this.pos.y);
								c.stroke();
							break;
						}
					break;
					case 3: // global
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(objectController.options.selectedIndex){
							case 0:
							case 1: // square
								c.beginPath();
								c.moveTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								for(let i in partArr){
									c.lineTo(partArr[i].pos.x + partArr[i].siz.w/2, partArr[i].pos.y + partArr[i].siz.h/2);
								}
								c.stroke();
							break;
							case 2: //circle
								c.beginPath();
								c.moveTo(this.pos.x, this.pos.y);
								for(let i in partArr){
									c.lineTo(partArr[i].pos.x, partArr[i].pos.y);
								}
								c.stroke();
							break;
						}
					break;
					case 4: // 100px radius
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(objectController.options.selectedIndex){
							case 0:
							case 1: // square
								c.beginPath();
								c.moveTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < 100){
										c.lineTo(partArr[i].pos.x + partArr[i].siz.w/2, partArr[i].pos.y + partArr[i].siz.h/2);
									}
								}
								c.stroke();
							break;
							case 2: //circle
								c.beginPath();
								c.moveTo(this.pos.x, this.pos.y);
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < 100){
										c.lineTo(partArr[i].pos.x, partArr[i].pos.y);
									}
								}
								c.stroke();
							break;
						}
					break;
					case 5: // mouse cursor (Global)
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(objectController.options.selectedIndex){
							case 0:
							case 1: // square
									c.beginPath();
									c.moveTo(getMousePos(canvas, event).x, getMousePos(canvas, event).y);
									for(let i in partArr){
											c.lineTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
									}
									c.stroke();
							break;
							case 2: //circle
								c.beginPath();
								c.moveTo(getMousePos(canvas, event).x, getMousePos(canvas, event).y);
									for(let i in partArr){
											c.lineTo(this.pos.x, this.pos.y);
									}
								c.stroke();
							break;
						}
					break;
					case 6: // mouse cursor (100px radius)
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(objectController.options.selectedIndex){
							case 0:
							case 1: // square
								c.beginPath();
								c.moveTo(getMousePos(canvas, event).x, getMousePos(canvas, event).y);
									if(Math.sqrt(Math.pow(this.pos.x - getMousePos(canvas, event).x, 2) + Math.pow(this.pos.y - getMousePos(canvas, event).y, 2)) < 100){
										c.lineTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								}
								c.stroke();
							break;
							case 2: //circle
								c.beginPath();
								c.moveTo(getMousePos(canvas, event).x, getMousePos(canvas, event).y);
									if(Math.sqrt(Math.pow(this.pos.x - getMousePos(canvas, event).x, 2) + Math.pow(this.pos.y - getMousePos(canvas, event).y, 2)) < 100){
										c.lineTo(this.pos.x, this.pos.y);
								}
								c.stroke();
							break;
						}
					break;
					case 7: // 20px radius
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(objectController.options.selectedIndex){
							case 0:
							case 1: // square
								c.beginPath();
								c.moveTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < 50){
										c.lineTo(partArr[i].pos.x + partArr[i].siz.w/2, partArr[i].pos.y + partArr[i].siz.h/2);
									}
								}
								c.stroke();
							break;
							case 2: //circle
								c.beginPath();
								c.moveTo(this.pos.x, this.pos.y);
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < 50){
										c.lineTo(partArr[i].pos.x, partArr[i].pos.y);
									}
								}
								c.stroke();
							break;
						}
					break;
				}
				switch(objectController.options.selectedIndex){ // shape
					case 0:
					case 1:
							// if no image is upload/selected then just draw the regular shape(rect)
							if(particleImageController.files[0] == undefined){
								c.fillRect(this.pos.x, this.pos.y, this.siz.w, this.siz.h);
							}else{
								   //eyeImage.src = particleImageController.files[0].name;
								fReader.onloadend = function(event){
								    partImage.src = event.target.result;
								}
								//eyeImage.src = particleImageController.files[0].name;
								c.drawImage(partImage, 0, 0, 1000, 1000, this.pos.x, this.pos.y, this.siz.w, this.siz.h);
							}
							
					break;
					case 2:
						c.beginPath();
						c.arc(this.pos.x, this.pos.y, this.siz.w, 0, Math.PI * 2)
						c.fill();
					break;
				}

				this.update();
			}
		};
		// do not spawn particles on top of each other while particle collision mode is activated
		let tempConX, tempConY, XYobj;
		function secureSpawn(){
			XYobj = {
				tempConX: Math.random()*(canvas.width-0+parseInt(sizeXController.value))+0+parseInt(sizeXController.value),
				tempConY: Math.random()*(canvas.height-0+parseInt(sizeYController.value))+0+parseInt(sizeYController.value)
			}
			for(let i in partArr){
				switch(objectController.options.selectedIndex){
					case 0:
					case 1:
						if(Math.sqrt(Math.pow(partArr[i].pos.x - tempConX, 2) + Math.pow(partArr[i].pos.x - tempConY, 2)) < partArr[i].siz.w){
							secureSpawn();
						}
					break;
					case 2:
						if(Math.sqrt(Math.pow(partArr[i].pos.x - tempConX, 2) + Math.pow(partArr[i].pos.x - tempConY, 2)) < partArr[i].siz.w*2){
							secureSpawn();
						}
					break;
				}
				
			}
		}

			function createParticles(){
			//redetermine the fucking value hehe fuck you!!
			partAmount = particleCountController.value;
			//create particle/s and put to array
				for(let i = 0; i < partAmount; i++){
					partArr.push(new particle());
				}
				if(isPaused){
					for(let i in partArr){
						partArr[i].draw();
					}
				}
			}

		let CP = setInterval(createParticles, parseInt(creationTimeController.value));	

		//clear canvas by deleting all particles on the canvas
		function clrCnv(){
			c.clearRect(0,0,canvas.width,canvas.height);
			c.fillStyle = "black";
			c.fillRect(0,0,canvas.width,canvas.height);
			for(let i in partArr){
				delete partArr[i]	
			}
			//partArr = [];
			//console.log(partArr)
		}

		// loop demo
		// make a feature where you  can choose to loop on the list randomly or not
		// current default is looping from 0 to the list max length
		let LDon = true, LDinterv, LDrandIndx, LDIndx = 14;
		loopDemoController.addEventListener("change", ()=>{
			//LDrandIndx = Math.floor(Math.random()*(demo.length - 1) + 1);
			
			if(loopDemoController.checked){
				LDinterv = setInterval(()=>{
					LDIndx++;
					selectDemo(LDIndx);
					if(LDIndx >= demo.length - 1){ // reset if the end of list is met
						LDIndx = 0;
					}
					console.clear(); // clear ang console, damo errors hahah
				}, 10000);
			}else{
				clearInterval(LDinterv);
			}
		});


		//select demos
		function selectDemo(ds){
			clearInterval(CP);
			clrCnv();
			LDrandIndx = Math.floor(Math.random()*(demo.length - 1) + 1);
			controller(demo[ds].a, demo[ds].b, demo[ds].c, demo[ds].d, demo[ds].e, demo[ds].f, demo[ds].g, demo[ds].h, demo[ds].i, demo[ds].j, demo[ds].k, demo[ds].l, demo[ds].m, demo[ds].n, demo[ds].o, demo[ds].p, demo[ds].q, demo[ds].r, demo[ds].s, demo[ds].t, demo[ds].u, demo[ds].v, demo[ds].w, demo[ds].x, demo[ds].y, demo[ds].z, demo[ds].aa, demo[ds].bb, demo[ds].cc, demo[ds].dd, demo[ds].ee, demo[ds].ff, demo[ds].gg, demo[ds].hh);
			//issue with creating particles, on change add event listener
			//redeclaring this interval solution
			CP = setInterval(createParticles, parseInt(creationTimeController.value));
		}
		function controller(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh){
			linkController.options.selectedIndex = a
			canvasBoundaryController.options.selectedIndex = b
			GCOController.options.selectedIndex = c
			objectController.options.selectedIndex = d
			sizeXController.value = e
			sizeYController.value = f
			gravityController.value = g
			lifeTimeController.value = h
			randomlifeTimeController.value = i
			particleCountController.value = j
			creationTimeController.value = k
			randomColorController.checked = l
			collisionController.options.selectedIndex = m
			frictionXController.value = n
			frictionYController.value = o
			posXController.value = p
			posYController.value = q
			randomXController.checked = r
			randomYController.checked = s
			velXMaxController.value = t
			velXMinController.value = u
			velYMaxController.value = v
			velYMinController.value = w
			redChannelController.value = x
			greenChannelController.value = y
			blueChannelController.value = z
			alphaChannelController.value = aa
			bgRedChannelController.value = bb
			bgGreenChannelController.value = cc
			bgBlueChannelController.value = dd
			bgAlphaChannelController.value = ee
			deletePreviousFrames.checked = ff
			movementController.options.selectedIndex = gg
			deletionModeController.options.selectedIndex = hh
		}

		// saving a still image (screenshot) from the canvas
		let tempCNVS = document.createElement("canvas"),
 			TCNVSc = tempCNVS.getContext("2d"),
 			d = new Date();
		function saveCNVS(){
			/*let link = document.createElement('a'),
			d = new Date();
  			link.download = d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + ' .png';
 			link.href = canvas.toDataURL("image/png");
 			link.click();	
 			link.remove(); */
			tempCNVS.width = canvas.width;
			tempCNVS.height = canvas.height/2;
			TCNVSc.drawImage(canvas, 0, 0);


 			tempCNVS.toBlob(
			  blob => {
			    const anchor = document.createElement('a');
			    anchor.download = d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + ' .png';
			    anchor.href = URL.createObjectURL(blob);

			    anchor.click(); // ✨ magic!

			    URL.revokeObjectURL(anchor.href); // remove it from memory and save on memory! 😎
			  },
			  'image/png',
			  0.9,
			);	
		}

		// saving video recording of canvas
		let transferCanvasToTempCanvas = false;
		function startRecording() {
			transferCanvasToTempCanvas = true;
			recordCanvas.disabled = true;
		  const chunks = []; // here we will store our recorded media chunks (Blobs)
		  //var options = {mimeType: 'video/webm;codecs=h264'}; 
		  const stream = tempCNVS.captureStream(30); // grab our canvas MediaStream // 30 framerate
		  const rec = new MediaRecorder(stream); // init the recorder
		  // every time the recorder has new data, we will store it in our array
		  rec.ondataavailable = e => {chunks.push(e.data)};
		  // only when the recorder stops, we construct a complete Blob from all the chunks
		  rec.onstop = e => exportVid(new Blob(chunks, {'type': 'video/webm;'}));
		  rec.start();
		  setTimeout(()=>{
		  	rec.stop(); 
		  	transferCanvasToTempCanvas = false;
		  	recordCanvas.disabled = false
		  }, 11000); 
		}
		function exportVid(blob) {

		  const vid = document.createElement('video');
		  vid.src = URL.createObjectURL(blob);
		  //vid.controls = true;
		  //document.body.appendChild(vid);
		  const a = document.createElement('a');
		  a.download = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
		  a.href = vid.src;
		  a.click();
		  //a.textContent = 'download the video';
		  document.body.appendChild(a);
		}
		/////////////////////////////////////////////////////////////////////

		//get mouse cursor position
		function getMousePos(canvas, e){ 
			let rect = canvas.getBoundingClientRect(),
				scaleX = canvas.width / rect.width,
				scaleY = canvas.height / rect.height;

				return {
					x: (e.clientX - rect.left) * scaleX,
					y: (e.clientY - rect.top) * scaleY
				}
		}

		// clear file input
		function clrFI(){
			particleImageController.value = "";
		}
		let AInfTrig = true;
		function aboutInfo(){
			if(AInfTrig){
				infoFrame.style.display = "block"
				AInfTrig = false;
				aboutController.style.marginBottom = "10px";
			}else{
				infoFrame.style.display = "none"
				AInfTrig = true;
				aboutController.style.marginBottom = "50px";
			}
		}

		// get html elements
		function getHtmlElements(a){
			return document.querySelector(a);
		}

//////////////////////////////////////////////////////////////////////////////////////////////
//review this shit its not yours hahah
		/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(part, otherParticle) {
    const xVelocityDiff = part.vel.x - otherParticle.vel.x;
    const yVelocityDiff = part.vel.y - otherParticle.vel.y;

    const xDist = otherParticle.pos.x - part.pos.x;
    const yDist = otherParticle.pos.y - part.pos.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.pos.y - part.pos.y, otherParticle.pos.x - part.pos.x);

        // Store mass in var for better readability in collision equation
        const m1 = part.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(part.vel, angle);
        const u2 = rotate(otherParticle.vel, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        part.vel.x = vFinal1.x;
        part.vel.y = vFinal1.y;

        otherParticle.vel.x = vFinal2.x;
        otherParticle.vel.y = vFinal2.y;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

		canvas.addEventListener('mousemove', (e)=>{
			event = e;
		});
		
		// loop
		//setInterval(()=>{

		function loop(){

			if(frameRate % FR == 0){

				// saving to temporary canvas for exporting webm video
				if(transferCanvasToTempCanvas){
					tempCNVS.width = canvas.width;
					tempCNVS.height = canvas.height/2;
					TCNVSc.drawImage(canvas, 0, 0);
				}

				//background
				if(deletePreviousFrames.checked){
					c.clearRect(0,0,canvas.width,canvas.height);
				}
				switch(backgroundController.options.selectedIndex){
					case 0:
					case 1: // default
						c.fillStyle = "rgba(" + bgRedChannelController.value + ", " + bgGreenChannelController.value + ", " + bgBlueChannelController.value + ", " + bgAlphaChannelController.value + ")";
						c.fillRect(0,0,canvas.width,canvas.height/2);
					break;
					case 2: // none

					break;
					case 3: // file input

					break;
					case 4: // gradient
						var gradient = c.createLinearGradient(0, 0, canvas.width, 0);
							gradient.addColorStop("0"," magenta");
							gradient.addColorStop("0.5", "blue");
							gradient.addColorStop("1.0", "red");
							c.fillStyle = gradient;
						c.fillRect(0,0,canvas.width,canvas.height/2);
					break;
				}
				
				
				//recreate the CP interval if creationTime value changes
				creationTimeController.addEventListener('change', ()=>{
					clearInterval(CP);
					CP = setInterval(createParticles, parseInt(creationTimeController.value));
				})
				//display partcles
					for(let i in partArr){
						//partArr[i].siz.w = sizeXController.value;
						//partArr[i].siz.h = sizeYController.value;
						partArr[i].draw();		
					}	
			}
				frameRate++;
				if(!isPaused){
					requestAnimationFrame(loop);
				}else{
					clearInterval(CP);
				}
				// mirror main to canvas to mirrorCanvas
				mirrorCanvas.width = canvas.width;
				mirrorCanvas.height = canvas.height/2;
				Mc.drawImage(canvas, 0, 0);
		};loop();
		//}, 60)

		//selectDemo(10);// experiment default selection
///////////////////////////////////////////////////
		function adjustScreen(){

		canvas_width = window.innerWidth
		canvas_height = window.innerHeight

		let ratio = 16 / 9;

		if(canvas_width < canvas_height / ratio){
			canvas_height = canvas_width * ratio;
		}else{
			canvas_width = canvas_height / ratio;
		}

		canvas.style.width = "" + canvas_width + "px";
		canvas.style.height = "" + canvas_height  + "px";

		controllerFrame.style.width = canvas_width;
		controllerFrame.style.height = canvas_height/2;

		mirrorCanvas.style.width = "" + canvas_width + "px";
		mirrorCanvas.style.height = "" + canvas_height/2 + "px";
	}
	adjustScreen();

	window.addEventListener("resize", ()=>{
		adjustScreen();
	})
	window.addEventListener("load", ()=>{
		//LDrandIndx = Math.floor(Math.random()*(demo.length - 1) + 1);
		//selectDemo(LDrandIndx);
	})

////////////////////////////////////////////////////////