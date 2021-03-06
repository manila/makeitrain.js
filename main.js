var canvas = document.getElementById("rainbg");
var ctx = canvas.getContext("2d");
var RAINDROP_CANVAS = document.getElementById("raindrops");
var rctx = RAINDROP_CANVAS.getContext("2d");

rctx.font = "24px monospace";
rctx.fillText("\\", 0, 12);

var WINDOW_SIZE = window.innerWidth;
var FONT_SIZE = 24;
var DEVICE_PIXEL_RATIO = window.devicePixelRatio || 1;
var MAX_RAIN_DROPS = 75;
var rainDropCount = 0;

class rainDrop {
	constructor() {
		this.x = Math.floor((Math.random() * (WINDOW_SIZE * 2) * DEVICE_PIXEL_RATIO) - WINDOW_SIZE);
		this.y = 0;
		this.lightLevel = 0;
		this.state = 0;
	}

	update() {
		this.x += FONT_SIZE;
		this.y += FONT_SIZE;

		if (this.y > window.innerHeight * DEVICE_PIXEL_RATIO) {
			this.y = 0;
			this.x = Math.floor(Math.random() * (WINDOW_SIZE * 2) * DEVICE_PIXEL_RATIO) - WINDOW_SIZE;
		}
	}

	draw() {
		ctx.drawImage(
			RAINDROP_CANVAS,  		// Image Source
			this.lightLevel * FONT_SIZE, 	// Source X 
			this.state, 			// Source Y
			FONT_SIZE, 			// Source Width
			FONT_SIZE, 			// Source Height
			this.x, 		// Destination X
			this.y,			// Destination Y
			FONT_SIZE,
			FONT_SIZE
			); 
	}
}

// light level from 0..4
const drawRainDrop = (lightLevel) => {
	if (lightLevel >= 0 && lightLevel <= 4)
	{
		return 0;
	}
}

pixels = [];

rainArray = [];

const generateRainDrop = () => {
	if (Math.floor(Math.random() * 10) == 1 && rainDropCount < MAX_RAIN_DROPS)
	{
		rainArray.push(new rainDrop());
		rainDropCount++;
	}
}

const drawRain = () => {
	for (let i = 0; i < rainArray.length; i++)
	{
		rainArray[i].draw();
		//ctx.fillStyle = "#F00";
        	//ctx.fillRect(rainArray[i].x, rainArray[i].y, 5, 5);
	}
}

const makeItRain = () => {
	for (let i = 0; i < rainArray.length; i++)
	{
		rainArray[i].update();
	}
}

const setupCanvas = () => {
	canvas.width = window.innerWidth * window.devicePixelRatio;
	canvas.style.width = window.innerWidth + "px";
	canvas.height = window.innerHeight * window.devicePixelRatio;
	canvas.style.height = window.innerHeight + "px";
	rctx.fillColor = "#000"
	rctx.font = '24px monospace';
	rctx.fillText('Hello World!', 0, 0);
}

const loop = (timestamp) => {
	ctx.clearRect(0, 0, window.innerWidth * DEVICE_PIXEL_RATIO, window.innerHeight * DEVICE_PIXEL_RATIO);
	generateRainDrop();
	drawRain();
	makeItRain();
	console.log(timestamp);
	window.requestAnimationFrame(loop);
}

window.addEventListener("load", function () {
	setupCanvas();
	ctx = canvas.getContext("2d");
	rctx.font = '24px monospace';
	rctx.fillText('Hello World!', 200, 200);

	window.requestAnimationFrame(loop);
});
