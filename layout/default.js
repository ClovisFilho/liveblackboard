function doDrawn(event) {
	var canvas	=	document.getElementById('canvas');
	var context	=	canvas.getContext('2d');

	var x	=	Math.floor(Math.random() * 736) + 1
	var y	=	Math.floor(Math.random() * 536) + 1

	context.beginPath();
	context.arc(x, y, 10, 0, 2 * Math.PI);
	context.stroke();

}

$(document).ready(function() {

	var isClicking	=	false;

	$('.drawn').on('mousedown', function(event) {
		isClicking	=	true;
		doDrawn(event);
	});

	$('.drawn').on('mouseup', function(event) {
		isClicking	=	false;
	});

	$('.drawn').on('mousemove', function(event) {
		if (isClicking)
			doDrawn(event);
	});
});