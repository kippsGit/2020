//31 controllers
let demo = [
		{
		},
		{
		 "a":0, "b":1, "c":1, "d":1, "e":25, "f":25, "g":0, "h":100, "i":0, "j":1, "k":200, "l":0, "m":0, "n":1, "o":1, "p":288, "q":258, "r":1, "s":1, "t":10, "u":5, "v":10, "w":5, "x":255, "y":255, "z":255, "aa":1, "bb":0, "cc":0, "dd":0, "ee":1, "ff":false
		},
		{
		 "a":3, "b":1, "c":1, "d":1, "e":10, "f":25, "g":0, "h":100, "i":1, "j":1, "k":0, "l":0, "m":1, "n":1, "o":1, "p":288, "q":258, "r":1, "s":1, "t":36.1, "u":5, "v":10, "w":5, "x":255, "y":255, "z":255, "aa":1, "bb":0, "cc":0, "dd":0, "ee":1, "ff":false
		},
		{
		 "a":0, "b":0, "c":1, "d":1, "e":4, "f":25, "g":0, "h":100, "i":0, "j":1, "k":0, "l":0, "m":0, "n":1, "o":1, "p":288, "q":258, "r":0, "s":0, "t":10, "u":5, "v":10, "w":5, "x":0, "y":0, "z":0, "aa":1, "bb":255, "cc":255, "dd":255, "ee":0.1, "ff":false
		},
		{
		 "a":0, "b":0, "c":13, "d":1, "e":2, "f":25, "g":0, "h":100, "i":0, "j":1, "k":0, "l":0, "m":0, "n":1, "o":1, "p":288, "q":258, "r":1, "s":1, "t":10, "u":5, "v":10, "w":5, "x":255, "y":38, "z":0, "aa":1, "bb":0, "cc":0, "dd":0, "ee":1,  "ff":false
		},
		{
		 "a":0, "b":0, "c":13, "d":1, "e":2, "f":25, "g":0, "h":100, "i":0, "j":1, "k":0, "l":0, "m":0, "n":1, "o":1, "p":288, "q":258, "r":0, "s":0, "t":10, "u":5, "v":10, "w":5, "x":255, "y":38, "z":0, "aa":1, "bb":0, "cc":0, "dd":0, "ee":1,  "ff":false
		},
		{
		 "a":0, "b":2, "c":1, "d":1, "e":6, "f":25, "g":0, "h":100, "i":0, "j":1, "k":0, "l":1, "m":1, "n":1, "o":1, "p":288, "q":258, "r":1, "s":1, "t":10, "u":5, "v":10, "w":5, "x":255, "y":255, "z":255, "aa":1, "bb":0, "cc":0, "dd":0, "ee":0.3,  "ff":false
		},
		{
		 "a":1, "b":1, "c":1, "d":1, "e":13, "f":25, "g":1.6, "h":100, "i":0, "j":1, "k":200, "l":1, "m":1, "n":1, "o":1, "p":288, "q":258, "r":0, "s":0, "t":10, "u":5, "v":10, "w":5, "x":255, "y":255, "z":255, "aa":1, "bb":0, "cc":0, "dd":0, "ee":1,  "ff":false
		}
	];
// use this to log the current controller values u made, copy ang paste it above to add selection to the demos :)
function logControllerValues(){
	console.log( '"a":'+ linkController.value +',',
				 '"b":'+ canvasBoundaryController.value +',',
				 '"c":'+ GCOController.value +',',
				 '"d":'+ shapeController.value +',',
				 '"e":'+ sizeXController.value +',',
				 '"f":'+ sizeYController.value +',',
				 '"g":'+ gravityController.value +',',
				 '"h":'+ lifeTimeController.value +',',
				 '"i":'+ randomlifeTimeController.value +',',
				 '"j":'+ particleCountController.value +',',
				 '"k":'+ creationTimeController.value +',',
				 '"l":'+ randomColorController.value +',',
				 '"m":'+ collisionController.value +',',
				 '"n":'+ frictionXController.value +',',
				 '"o":'+ frictionYController.value +',',
				 '"p":'+ posXController.value +',',
				 '"q":'+ posYController.value +',',
				 '"r":'+ randomXController.value +',',
				 '"s":'+ randomYController.value +',',
				 '"t":'+ velXMaxController.value +',',
				 '"u":'+ velXMinController.value +',',
				 '"v":'+ velYMaxController.value +',',
				 '"w":'+ velYMinController.value +',',
				 '"x":'+ redChannelController.value +',',
				 '"y":'+ greenChannelController.value +',',
				 '"z":'+ blueChannelController.value +',',
				 '"aa":'+ alphaChannelController.value +',',
				 '"bb":'+ bgRedChannelController.value +',',
				 '"cc":'+ bgGreenChannelController.value +',',
				 '"dd":'+ bgBlueChannelController.value +',',
				 '"ee":'+ bgAlphaChannelController.value +', ',
				 '"ff":'+ previousFramesDelete )
}