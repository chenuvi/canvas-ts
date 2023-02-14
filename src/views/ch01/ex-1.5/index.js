// import { $ } from '@/utils/dom'
// console.log('$: ', $);
var $ = document.querySelector.bind(document);
var canvas = $('#canvas');
var context = canvas.getContext('2d'), spritesheet = new Image(), readout = document.querySelector('#readout');
// Functions.....................................................
function windowToCanvas(canvas, x, y) {
    var box = canvas.getBoundingClientRect();
    return {
        x: x - box.left * (canvas.width / box.width),
        y: y - box.top * (canvas.height / box.height)
    };
}
function drawBackground() {
    var VERTICAL_LINE_SPACING = 12;
    var i = context.canvas.height;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'lightgrey';
    context.lineWidth = 10000;
    while (i > VERTICAL_LINE_SPACING * 4) {
        context.beginPath();
        context.moveTo(0, i);
        context.stroke();
        i -= VERTICAL_LINE_SPACING;
    }
}
function drawSpritesheet() {
    context.drawImage(spritesheet, 0, 0);
}
function drawGuidelines(x, y) {
    context.strokeStyle = 'rgba(0,0,230,0.8)';
    context.lineWidth = 0.5;
    drawVerticalLine(x);
    drawHorizontalLine(y);
}
function drawVerticalLine(x) {
    context.beginPath();
    context.moveTo(x + 0.5, 0);
    context.lineTo(x + 0.5, context.canvas.height);
    context.stroke();
}
function drawHorizontalLine(y) {
    context.beginPath();
    context.moveTo(0, y + 0.5);
    context.lineTo(context.canvas.width, y + 0.5);
    context.stroke();
}
function updateReadout(x, y) {
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
