const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x1 = 200;
let y1 = 150;
let dx1 = 6;
let dy1 = 30;
let ballRadius1 = 30;

let x2 = 100;
let y2 = 100;
let dx2 = 4;
let dy2 = 20;
let ballRadius2 = 20;

//kablooey
const friction = 0.99;
const gravity = 0.5;
const dampening = 0.5;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x1, y1, ballRadius1, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x2, y2, ballRadius2, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  x1 += dx1;
  y1 += dy1;
  dy1 += gravity;

  if (y1 + ballRadius1 > canvas.height) {
    y1 = canvas.height - ballRadius1;
    dy1 = -dy1 * dampening;
  }

  if (x1 + ballRadius1 > canvas.width || x1 - ballRadius1 < 0) {
    dx1 = -dx1;
  }

  dx1 *= friction;

  x2 += dx2;
  y2 += dy2;
  dy2 += gravity;

  if (y2 + ballRadius2 > canvas.height) {
    y2 = canvas.height - ballRadius2;
    dy2 = -dy2 * dampening;
  }

  if (x2 + ballRadius2 > canvas.width || x2 - ballRadius2 < 0) {
    dx2 = -dx2;
  }

  dx2 *= friction;
}

setInterval(update, 20);
