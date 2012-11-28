var sprite;
var x, y;

var MIN_X = 15;
var MAX_X = 365;
var MIN_Y = 85;
var MAX_Y = 435;

function init() 
{
	sprite = document.getElementById("sprite");
	msprite = document.getElementById("msprite");
	document.onkeydown = keyListener;
	document.onmousemove = mouseListener;
}

function checkBounds()
{
	if (x > MAX_X)
		x = MAX_X;
	if (y > MAX_Y)
		y = MAX_Y;
	if (x < MIN_X)
		x = MIN_X;
	if (y < MIN_Y)
		y = MIN_Y;
}

function moveSprite(dx, dy) 
{
	var surface = document.getElementById("surface");
	
	x = parseInt(sprite.style.left);
	y = parseInt(sprite.style.top);
	
	x += dx;
	y += dy;
	
	checkBounds();
	
	sprite.style.left = x + "px";
	sprite.style.top = y + "px";
		
	var output = docuement.getelementById("output");
	output.interHTML = "x: " + x + ", y: "+ y;	
}

function keyListener(e) 
{
	if (!e) { //we are at IE ;)
		e = window.event;
	}
	
	if (e.keyCode == 37)  //left
		moveSprite(-10, 0);
		
	if (e.keyCode == 39) //right
		moveSprite(10, 0);

	if (e.keyCode == 38) //up
		moveSprite(0, -10);

	if (e.keyCode == 40) //down
		moveSprite(0, 10);
}

function mouseListener(e)
{
	if (!e) {
		e = window.event;
	}
	
	height = parseInt(msprite.style.height);
	width = parseInt(msprite.style.width);
	
	x = e.pageX - (width / 2);
	y = e.pageY - (height / 2);
	
	msprite.style.left = x + "px";
	msprite.style.top = y + "px";
}
