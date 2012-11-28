var frame = 0;
var imgList = new Array(
	"arc2.png"	);

var sprite;
var MAX_X = 500;
	
function init()
{
	sprite = document.getElementById("chopper");
	sprite.style.backgroundPosition = "0px 0px";
	setInterval("animate()", 100);
}

function animate()
{
	updateImage();
	updatePosition();
}

function updateImage()
{
	frame = (frame + 1) % imgList.length;
	//spriteImage.src = imgList[frame];
	//spriteImage.alt = frame + "";
}

function updatePosition()
{
	sprite = document.getElementById("chopper");
	var x = parseInt(sprite.style.backgroundPosition);
	x = (x + 10) % MAX_X;
	sprite.style.backgroundPosition = x + "px 0px";
	
	var output = document.getElementById("output");
	output.innerHTML = x + "px";
}


