var canvas = document.getElementById("rainbg");
var ctx = canvas.getContext("2d");

pixels = [];

const generateRainDrop = () => {
	pixels.push({x: Math.floor(Math.random() * 500), y: 0});
}

const drawRain = () => {
	for (let i = 0; i < pixels.length; i++)
	{
		ctx.fillStyle = "#F00";
        	ctx.fillRect(pixels[i].x, pixels[i].y, 1, 1);
	}
}

const makeItRain = () => {
	for (let i = 0; i < pixels.length; i++)
	{
		pixels[i].y++;
	}
}

function loop(timestamp) {
	generateRainDrop();
	drawRain();
	makeItRain();
	window.requestAnimationFrame(loop);
}

window.addEventListener("load", function () {
	window.requestAnimationFrame(loop);
});
