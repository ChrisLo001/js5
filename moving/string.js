var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;

function Square() {
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 325, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Adding Strings

  ctx.font = "50px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("HOLY MOLY", 100, 250);
  ctx.fillText("I AM MOVING", 200, y);

  //  Passing a variable with text
  let seriousQuestion = "HOW IS THIS POSSIBLE?";
  ctx.fillText(seriousQuestion, x, 400);

  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);
