var canvas = document.getElementById("rainbg");
var ctx = canvas.getContext("2d");

function loop(timestamp) {
	console.log(timestamp);
	window.requestAnimationFrame(loop);
}

window.addEventListener("load", function () {
	window.requestAnimationFrame(loop);
});
