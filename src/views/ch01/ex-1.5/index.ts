// import { $ } from '@/utils/dom'
// console.log('$: ', $);

const $ = document.querySelector.bind(document)
const canvas = $('#canvas') as HTMLCanvasElement
const context = canvas.getContext('2d') as CanvasRenderingContext2D,
  spritesheet = new Image(),
  readout = document.querySelector('#readout') as HTMLElement;

// Functions.....................................................

function windowToCanvas(canvas: HTMLCanvasElement, x: number, y: number) {
  const box = canvas.getBoundingClientRect()
  return {
    x: x - box.left * (canvas.width / box.width),
    y: y - box.top * (canvas.height / box.height)
  }
}


function drawBackground() {
  const VERTICAL_LINE_SPACING = 12
  let i: number = context.canvas.height

  context.clearRect(0, 0, canvas.width, canvas.height)
  context.strokeStyle = 'lightgrey'
  context.lineWidth = 10000
  while (i > VERTICAL_LINE_SPACING * 4) {
    context.beginPath()
    context.moveTo(0, i)
    context.stroke()
    i -= VERTICAL_LINE_SPACING
  }
}

function drawSpritesheet() {
  context.drawImage(spritesheet, 0, 0);
}

function drawGuidelines(x: number, y: number) {
  context.strokeStyle = 'rgba(0,0,230,0.8)';
  context.lineWidth = 0.5;
  drawVerticalLine(x);
  drawHorizontalLine(y);
}

function drawVerticalLine(x: number) {
  context.beginPath();
  context.moveTo(x + 0.5, 0);
  context.lineTo(x + 0.5, context.canvas.height);
  context.stroke();
}

function drawHorizontalLine(y: number) {
  context.beginPath()
  context.moveTo(0, y + 0.5)
  context.lineTo(context.canvas.width, y + 0.5)
  context.stroke()
}

function updateReadout(x: number, y: number) {
  readout.innerHTML = '(' + x.toFixed(0) + ', ' + y.toFixed(0) + ')';
}

// Event handlers.....................................................

canvas.onmousemove = function (e) {
  var loc = windowToCanvas(canvas, e.clientX, e.clientY);

  drawBackground();
  drawSpritesheet();
  drawGuidelines(loc.x, loc.y);
  updateReadout(loc.x, loc.y);
};

// Initialization.....................................................

spritesheet.src = '../../../assets/images/running-sprite-sheet.png';
spritesheet.onload = function (e) {
  drawSpritesheet();
};

drawBackground();