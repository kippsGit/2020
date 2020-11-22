let canvas = document.querySelector("#canvas"),
		c = canvas.getContext("2d");
		canvas.width = 600;
		canvas.height = 1080;
	let canvas_width = window.innerWidth,
		canvas_height = window.innerHeight;

///////////////////////////////////////////////////

	let loopRandomValueController = document.querySelector("#loopRandomValueController"),
		GCOControllerLabel = document.querySelector("#GCOControllerLabel"),
		GCOController = document.querySelector("#GCOController"),
		shapeControllerLabel = document.querySelector("#shapeControllerLabel"),
		shapeController = document.querySelector("#shapeController"),
		sizeXController = document.querySelector("#sizeXController"),
		sizeYController = document.querySelector("#sizeYController"),
		gravityController = document.querySelector("#gravityController"),
		lifeTimeController = document.querySelector("#lifeTimeController"),
		randomlifeTimeController = document.querySelector("#randomlifeTimeController"),
		posXController = document.querySelector("#posXController"),
		posYController = document.querySelector("#posYController"),
		randomXController = document.querySelector("#randomXController"),
		randomYController = document.querySelector("#randomYController"),
		velXMaxController = document.querySelector("#velXMaxController"),
		velXMinController = document.querySelector("#velXMinController"),
		velYMaxController = document.querySelector("#velYMaxController"),
		velYMinController = document.querySelector("#velYMinController"),
		particleCountController = document.querySelector("#particleCountController"),
		creationTimeController = document.querySelector("#creationTimeController"),
		redChannelController = document.querySelector("#redChannelController"),
		greenChannelController = document.querySelector("#greenChannelController"),
		blueChannelController = document.querySelector("#blueChannelController"),
		alphaChannelController = document.querySelector("#alphaChannelController"),
		bgRedChannelController = document.querySelector("#bgRedChannelController"),
		bgGreenChannelController = document.querySelector("#bgGreenChannelController"),
		bgBlueChannelController = document.querySelector("#bgBlueChannelController"),
		bgAlphaChannelController = document.querySelector("#bgAlphaChannelController"),
		randomColorController = document.querySelector("#randomColorController"),
		canvasBoundaryController = document.querySelector("#canvasBoundaryController"),
		canvasBoundaryControllerLabel = document.querySelector("#canvasBoundaryControllerLabel"),
		linkController = document.querySelector("#linkController"),
		linkControllerLabel = document.querySelector("#linkControllerLabel"),
		frictionXController = document.querySelector("#frictionXController"),
		frictionYController = document.querySelector("#frictionYController"),
		collisionController = document.querySelector("#collisionController"),
		collisionControllerLabel = document.querySelector("#collisionControllerLabel"),
		deletePreviousFrames = document.querySelector("#deletePreviousFrames"),
		recordCanvas = document.querySelector("#recordCanvas"),
		demoListController = document.querySelector("#demoListController"),
		particleImageController = document.querySelector("#particleImageController"),
		modeController = document.querySelector("#modeController"),
		lifeModeController = document.querySelector("#lifeModeController"),
		loopDemoController = document.querySelector("#loopDemoController"),
		movementController = document.querySelector("#movementController"),
		infoFrame = document.querySelector("#infoFrame"),
		aboutController = document.querySelector("#aboutController");

	let eyeImage = new Image(),
		fReader = new FileReader();
		

	particleImageController.addEventListener("change", ()=>{
		fReader.readAsDataURL(particleImageController.files[0]);
	})
	modeController.addEventListener("change", ()=>{
		// mode operation
		switch(modeController.options.selectedIndex){
			case 1:
				CP = setInterval(createParticles, parseInt(creationTimeController.value));
				generateParticlesController.disabled = true;
			break;
			case 2:
				generateParticlesController.disabled = false;	
				clearInterval(CP)
			break;	
		}		
	})
			
	//default values
	let partAmount = particleCountController.value,
		partArr = [],
		partSizW = parseInt(sizeXController.value),
		partSizH = parseInt(sizeYController.value);

		posXController.max = canvas.width;
		posYController.max = canvas.height/2;
		posXController.value = posXController.max/2 - partSizW/2;
		posYController.value = posYController.max/2 - partSizH/2;

	let controllerFrame = document.querySelector("#controllerFrame");

	let indx = 0, 
		event, 
		demoSelected = 0;

	//demo list
	demoListController.options[0] = new Option("Demo List");
	for(let i = 1; i <= demo.length-1; i++){
		demoListController.options[i] = new Option(i);
	}
	demoListController.options[1] = new Option("1 - default");
	demoListController.addEventListener("change", ()=>{
		//console.log(demoListController.options.selectedIndex)
		demoSelected = demoListController.options.selectedIndex;
		if(demoSelected != 0){
			selectDemo(demoSelected);
		}
	})

	// mode controller list
	modeController.options[0] = new Option("Generating Mode");
	modeController.options[1] = new Option("Infinite - default");
	modeController.options[2] = new Option("Finite");

	// lifetime mode list
	lifeModeController.options[0] = new Option("Life Mode");
	lifeModeController.options[1] = new Option("Infinite");
	lifeModeController.options[2] = new Option("Finite - default");

	// movement list
	movementController.options[0] = new Option("Movement");
	movementController.options[1] = new Option("Linear - default");
	movementController.options[2] = new Option("Circular");
	movementController.options.selectedIndex = 1; // default selection


	let particle = function(){
			this.mass = .0001;
			this.r = Math.random()*255;
			this.g = Math.random()*255;
			this.b = Math.random()*255;
			this.gravity = parseInt(gravityController.value);
			this.maxLife = parseInt(lifeTimeController.value);
			this.life = 0;
			this.friction = {
				x: frictionXController.value,
				y: frictionYController.value
			}
			this.siz = {
				w: partSizW,
				h: partSizH
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

			//randomize x and y spawn position if...
			if(parseInt(randomXController.value) == 1){ 
				//this.pos.x = Math.random()*canvas.width;
				/*secureSpawn();
				this.pos.x = XYobj.tempConX;*/
				this.pos.x = Math.random()*(canvas.width-0+parseInt(sizeXController.value))+0+parseInt(sizeXController.value)

			}
			if(parseInt(randomYController.value) == 1){ 
				//this.pos.y = Math.random()*canvas.height/2;
				/*secureSpawn();
				this.pos.y = XYobj.tempConY;*/
				this.pos.y = Math.random()*(canvas.height/2-0+parseInt(sizeYController.value))+0+parseInt(sizeYController.value)
			}
			
			//randomize lifetime value
			if(parseInt(randomlifeTimeController.value) == 1){
				this.maxLife = Math.floor(Math.random()*parseInt(lifeTimeController.value));
			}
			this.angle = 0;
			this.speed = -1;
			this.radius = Math.random()*400;

			this.update = ()=>{

				//movement operation
				switch(movementController.options.selectedIndex){
					case 1:
						this.vel.y += this.gravity;

						this.pos.x += this.vel.x;
						this.pos.y += this.vel.y;
					break;
					case 2:
						this.pos.x = this.radius * Math.cos(this.angle * (Math.PI/180)) + canvas.width/2;
						this.pos.y = this.radius * Math.sin(this.angle * (Math.PI/180)) + canvas.height/4;
						this.angle += this.speed;
					break;
				}

				//generating mode operation
				switch(lifeModeController.options.selectedIndex){
					case 0:
						this.life++;
						if (this.life >= this.maxLife){
							delete partArr[this.idd];
						}
					break;
					case 1:

					break;
					case 2:
						this.life++;
						if (this.life >= this.maxLife){
							delete partArr[this.idd];
						}
					break;
				}
				
				//canvas boundary operation
				switch(parseInt(canvasBoundaryController.value)){
					case 0:
						canvasBoundaryControllerLabel.innerHTML = "Canvas Boundary (none)";
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
					case 1:
						canvasBoundaryControllerLabel.innerHTML = "Canvas Boundary (solid)";
						switch(parseInt(shapeController.value)){
							case 0: //square collision
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
							case 1: //circle collision
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
					case 2:
						canvasBoundaryControllerLabel.innerHTML = "Canvas Boundary (portal)";
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
				switch(parseInt(collisionController.value)){
					case 0:
						collisionControllerLabel.innerHTML = "Collision (particles)";
						
						switch(parseInt(shapeController.value)){
							case 0:
								//rectangle collision
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < this.siz.w){
											resolveCollision(this, partArr[i]);
									}
								}
							break;
							case 1:
								//circles collision
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < this.siz.w*2){
											resolveCollision(this, partArr[i]);
									}
								}
							break;
						}
					break;
					case 1:
						collisionControllerLabel.innerHTML = "Collision (mouse cursor)";
					break;
				}

				
			}
			this.draw = ()=>{ 
				switch(parseInt(GCOController.value)){ // Global Composite Operation
					case 1:
						c.globalCompositeOperation = 'source-over';
						GCOControllerLabel.innerHTML = "Global Composite Operation (source-over)";
					break;
					case 2:
						c.globalCompositeOperation = 'source-in';
						GCOControllerLabel.innerHTML = "Global Composite Operation (source-in)";
					break;
					case 3:
						c.globalCompositeOperation = 'source-out';
						GCOControllerLabel.innerHTML = "Global Composite Operation (source-out)";
					break;
					case 4:
						c.globalCompositeOperation = 'source-atop';
						GCOControllerLabel.innerHTML = "Global Composite Operation (source-atop)";
					break;
					case 5:
						c.globalCompositeOperation = 'destination-over';
						GCOControllerLabel.innerHTML = "Global Composite Operation (destination-over)";
					break;
					case 6:
						c.globalCompositeOperation = 'destination-in';
						GCOControllerLabel.innerHTML = "Global Composite Operation (destination-in)";
					break;
					case 7:
						c.globalCompositeOperation = 'destination-out';
						GCOControllerLabel.innerHTML = "Global Composite Operation (destination-out)";
					break;
					case 8:
						c.globalCompositeOperation = 'destination-atop';
						GCOControllerLabel.innerHTML = "Global Composite Operation (destination-atop)";
					break;
					case 9:
						c.globalCompositeOperation = 'lighter';
						GCOControllerLabel.innerHTML = "Global Composite Operation (lighter)";
					break;
					case 10:
						c.globalCompositeOperation = 'copy';
						GCOControllerLabel.innerHTML = "Global Composite Operation (copy)";
					break;
					case 11:
						c.globalCompositeOperation = 'xor';
						GCOControllerLabel.innerHTML = "Global Composite Operation (xor)";
					break;
					case 12:
						c.globalCompositeOperation = 'multiply';
						GCOControllerLabel.innerHTML = "Global Composite Operation (multiply)";
					break;
					case 13:
						c.globalCompositeOperation = 'screen';
						GCOControllerLabel.innerHTML = "Global Composite Operation (screen)";
					break;
					case 14:
						c.globalCompositeOperation = 'overlay';
						GCOControllerLabel.innerHTML = "Global Composite Operation (overlay";
					break;
					case 15:
						c.globalCompositeOperation = 'darken';
						GCOControllerLabel.innerHTML = "Global Composite Operation (darken)";
					break;
					case 16:
						c.globalCompositeOperation = 'lighten';
						GCOControllerLabel.innerHTML = "Global Composite Operation (lighten)";
					break;
					case 17:
						c.globalCompositeOperation = 'color-dodge';
						GCOControllerLabel.innerHTML = "Global Composite Operation (color-dodge)";
					break;
					case 18:
						c.globalCompositeOperation = 'color-burn';
						GCOControllerLabel.innerHTML = "Global Composite Operation (color-burn)";
					break;
					case 19:
						c.globalCompositeOperation = 'hard-light';
						GCOControllerLabel.innerHTML = "Global Composite Operation (hard-light)";
					break;
					case 20:
						c.globalCompositeOperation = 'soft-light';
						GCOControllerLabel.innerHTML = "Global Composite Operation (soft-light)";
					break;
					case 21:
						c.globalCompositeOperation = 'difference';
						GCOControllerLabel.innerHTML = "Global Composite Operation (difference)";
					break;
					case 22:
						c.globalCompositeOperation = 'exclusion';
						GCOControllerLabel.innerHTML = "Global Composite Operation (exclusion)";
					break;
					case 23:
						c.globalCompositeOperation = 'hue';
						GCOControllerLabel.innerHTML = "Global Composite Operation (hue)";
					break;
					case 24:
						c.globalCompositeOperation = 'saturation';
						GCOControllerLabel.innerHTML = "Global Composite Operation (saturation)";
					break;
					case 25:
						c.globalCompositeOperation = 'color';
						GCOControllerLabel.innerHTML = "Global Composite Operation (color)";
					break;
					case 26:
						c.globalCompositeOperation = 'luminosity';
						GCOControllerLabel.innerHTML = "Global Composite Operation (luminosity)";
					break;
				}
				
				switch(parseInt(randomColorController.value)){ // random color
					case 0:
						c.fillStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
					break;
					case 1:
							c.fillStyle = "rgba(" + this.r + ", " + this.g + ", " + this.b + "," + alphaChannelController.value + ")";
					break;
				}
				
				switch(parseInt(linkController.value)){ // link
					case 0:
						linkControllerLabel.innerHTML = "Link (none)";
					break;
					case 1:
						linkControllerLabel.innerHTML = "Link (canvas center point)";
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(parseInt(shapeController.value)){
							case 0: // square
								c.beginPath();
								c.moveTo(canvas.width/2, canvas.height/2/2);
								c.lineTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								c.stroke();
							break;
							case 1: //circle
								c.beginPath();
								c.moveTo(canvas.width/2, canvas.height/4);
								c.lineTo(this.pos.x, this.pos.y);
								c.stroke();
							break;
						}
					break;
					case 2:
						linkControllerLabel.innerHTML = "Link (particles) global";
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(parseInt(shapeController.value)){
							case 0: // square
								c.beginPath();
								c.moveTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								for(let i in partArr){
									c.lineTo(partArr[i].pos.x + partArr[i].siz.w/2, partArr[i].pos.y + partArr[i].siz.h/2);
								}
								c.stroke();
							break;
							case 1: //circle
								c.beginPath();
								c.moveTo(this.pos.x, this.pos.y);
								for(let i in partArr){
									c.lineTo(partArr[i].pos.x, partArr[i].pos.y);
								}
								c.stroke();
							break;
						}
					break;
					case 3:
						linkControllerLabel.innerHTML = "Link (particles) 100 diameter";
						c.strokeStyle = "rgba(" + redChannelController.value + ", " + greenChannelController.value + ", " + blueChannelController.value + "," + alphaChannelController.value + ")";
						switch(parseInt(shapeController.value)){
							case 0: // square
								c.beginPath();
								c.moveTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
								for(let i in partArr){
									if(Math.sqrt(Math.pow(partArr[i].pos.x - this.pos.x, 2) + Math.pow(partArr[i].pos.y - this.pos.y, 2)) < 100){
										c.lineTo(partArr[i].pos.x + partArr[i].siz.w/2, partArr[i].pos.y + partArr[i].siz.h/2);
									}
								}
								c.stroke();
							break;
							case 1: //circle
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
					case 4:
						linkControllerLabel.innerHTML = "Link (mouse cursor)";
						c.strokeStyle = "white";
						switch(parseInt(shapeController.value)){
							case 0: // square
									c.beginPath();
									c.moveTo(getMousePos(canvas, event).x, getMousePos(canvas, event).y);
									for(let i in partArr){
											c.lineTo(this.pos.x + this.siz.w/2, this.pos.y + this.siz.h/2);
									}
									c.stroke();
							break;
							case 1: //circle
								c.beginPath();
								c.moveTo(getMousePos(canvas, event).x, getMousePos(canvas, event).y);
									for(let i in partArr){
											c.lineTo(this.pos.x, this.pos.y);
									}
								c.stroke();
							break;
						}
					break;
				}
				switch(parseInt(shapeController.value)){ // shape
					case 0:
							if(particleImageController.files[0] == undefined){
								c.fillRect(this.pos.x, this.pos.y, this.siz.w, this.siz.h);
							}else{
								   //eyeImage.src = particleImageController.files[0].name;
								fReader.onloadend = function(event){
								    eyeImage.src = event.target.result;
								}
								//eyeImage.src = particleImageController.files[0].name;
								c.drawImage(eyeImage, 0, 0, 1000, 1000, this.pos.x, this.pos.y, this.siz.w, this.siz.h);
							}
							
						
						shapeControllerLabel.innerHTML = "Shape (rectangle)";
					break;
					case 1:
						c.beginPath();
						c.arc(this.pos.x, this.pos.y, this.siz.w, 0, Math.PI * 2)
						c.fill();
						shapeControllerLabel.innerHTML = "Shape (circle)";
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
				switch(parseInt(shapeController.value)){
					case 0:
						if(Math.sqrt(Math.pow(partArr[i].pos.x - tempConX, 2) + Math.pow(partArr[i].pos.x - tempConY, 2)) < partArr[i].siz.w){
							secureSpawn();
						}
					break;
					case 1:
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
			
			}

		let CP = setInterval(createParticles, parseInt(creationTimeController.value));	

		//listen for picture files to be used



		//clear canvas by deleting all particles on the canvas
		function clrCnv(){
			c.clearRect(0,0,canvas.width,canvas.height);
			for(let i in partArr){
				delete partArr[i]	
			}
			//partArr = [];
			//console.log(partArr)
		}

		// loop demo
		let LDon = true, LDinterv, LDrandIndx;
		function LDL(){
			LDrandIndx = Math.floor(Math.random()*(demo.length - 1) + 1);
			if(LDon){
				loopDemoController.value = "Loop Demo List (y)";
				LDinterv = setInterval(()=>{selectDemo(LDrandIndx)}, 10000);
				LDon = false;
			}else{
				loopDemoController.value = "Loop Demo List (n)";
				clearInterval(LDinterv);
				LDon = true;
			}
		}

		//select demos
		function selectDemo(ds){
			clearInterval(CP);
			clrCnv();
			LDrandIndx = Math.floor(Math.random()*(demo.length - 1) + 1);
			controller(demo[ds].a, demo[ds].b, demo[ds].c, demo[ds].d, demo[ds].e, demo[ds].f, demo[ds].g, demo[ds].h, demo[ds].i, demo[ds].j, demo[ds].k, demo[ds].l, demo[ds].m, demo[ds].n, demo[ds].o, demo[ds].p, demo[ds].q, demo[ds].r, demo[ds].s, demo[ds].t, demo[ds].u, demo[ds].v, demo[ds].w, demo[ds].x, demo[ds].y, demo[ds].z, demo[ds].aa, demo[ds].bb, demo[ds].cc, demo[ds].dd, demo[ds].ee);
			//issue with creating particles, on change add event listener
			//redeclaring this interval solution
			CP = setInterval(createParticles, parseInt(creationTimeController.value));
		}
		function controller(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee){
			linkController.value = a
			canvasBoundaryController.value = b
			GCOController.value = c
			shapeController.value = d
			sizeXController.value = e
			sizeYController.value = f
			gravityController.value = g
			lifeTimeController.value = h
			randomlifeTimeController.value = i
			particleCountController.value = j
			creationTimeController.value = k
			randomColorController.value = l
			collisionController.value = m
			frictionXController.value = n
			frictionYController.value = o
			posXController.value = p
			posYController.value = q
			randomXController.value = r
			randomYController.value = s
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
		}

		// screen shot the canvas
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
		  rec.onstop = e => exportVid(new Blob(chunks, {'type': 'video/webm;codecs=h264'}));
		  rec.start();
		  setTimeout(()=>{
		  	rec.stop(); 
		  	transferCanvasToTempCanvas = false;
		  	recordCanvas.disabled = false
		  }, 10000); 
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

		//randomize values
		function rndVal(){
			shapeController.value = Math.floor(Math.random() * 2);
			sizeXController.value = Math.floor(Math.random() * parseInt(sizeXController.max));
			sizeYController.value = Math.floor(Math.random() * parseInt(sizeYController.max));
			gravityController.value = Math.random() * parseInt(gravityController.max);
			lifeTimeController.value = Math.floor(Math.random() * parseInt(lifeTimeController.max));
			randomlifeTimeController.value = Math.floor(Math.random() * 2);
			posXController.value = Math.floor(Math.random() * parseInt(posXController.max));
			posYController.value = Math.floor(Math.random() * parseInt(posYController.max));
			randomXController.value = Math.floor(Math.random() * 2);
			randomYController.value = Math.floor(Math.random() * 2);
			velXMaxController.value = Math.floor(Math.random() * parseInt(velXMaxController.max));
			velXMinController.value = Math.floor(Math.random() * parseInt(velXMinController.max));
			velYMaxController.value = Math.floor(Math.random() * parseInt(velYMaxController.max));
			velYMinController.value = Math.floor(Math.random() * parseInt(velYMinController.max));
			particleCountController.value = Math.floor(Math.random() * parseInt(particleCountController.max));
			creationTimeController.value = Math.floor(Math.random() * parseInt(creationTimeController.max));
			redChannelController.value = Math.floor(Math.random() * parseInt(redChannelController.max));
			greenChannelController.value = Math.floor(Math.random() * parseInt(greenChannelController.max));
			blueChannelController.value = Math.floor(Math.random() * parseInt(blueChannelController.max));
			alphaChannelController.value = Math.random() * parseInt(alphaChannelController.max);
			bgRedChannelController.value = Math.floor(Math.random() * parseInt(bgRedChannelController.max));
			bgGreenChannelController.value = Math.floor(Math.random() * parseInt(bgGreenChannelController.max));
			bgBlueChannelController.value = Math.floor(Math.random() * parseInt(bgBlueChannelController.max));
			bgAlphaChannelController.value = Math.random() * parseInt(bgAlphaChannelController.max);
		}

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

		//delete provious frames
		let previousFramesDelete = false;
		function delPrevFrames(){
			if(previousFramesDelete){
				previousFramesDelete = false;
				deletePreviousFrames.value = "Del Previous Frames (n)";
			}else{
				previousFramesDelete = true;
				deletePreviousFrames.value = "Del Previous Frames (y)";
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
		setInterval(()=>{

			// saving to temporary canvas for exporting webm video
			if(transferCanvasToTempCanvas){
				tempCNVS.width = canvas.width;
				tempCNVS.height = canvas.height/2;
				TCNVSc.drawImage(canvas, 0, 0);
			}
			//background
			if(previousFramesDelete){
				c.clearRect(0,0,canvas.width,canvas.height);
			}
			c.fillStyle = "rgba(" + bgRedChannelController.value + ", " + bgGreenChannelController.value + ", " + bgBlueChannelController.value + ", " + bgAlphaChannelController.value + ")";
			c.fillRect(0,0,canvas.width,canvas.height/2);
			
			//recreate the CP interval if creationTime value changes
			creationTimeController.addEventListener('change', ()=>{
				clearInterval(CP);
				CP = setInterval(createParticles, parseInt(creationTimeController.value));
			})
			//display partcles
				for(let i in partArr){
					partArr[i].siz.w = sizeXController.value;
					partArr[i].siz.h = sizeYController.value;
					partArr[i].draw();		
				}
			

		}, 60)

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

		controllerFrame.style.top ="50%";
	}
	adjustScreen();

	window.addEventListener("resize", ()=>{
		adjustScreen();
	})

////////////////////////////////////////////////////////