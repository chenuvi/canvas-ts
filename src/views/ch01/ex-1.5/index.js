// import { $ } from '@/utils/dom'
// console.log('$: ', $);
var $ = document.querySelector.bind(document);
var canvas = $('#canvas');
var context = canvas.getContext('2d'), spritesheet = new Image();
// Functions.....................................................
function windowToCanvas(canvas, x, y) {
    var box = canvas.getBoundingClientRect();
    return {
        x: x - box.left * (canvas.width / box.width),
        y: y - box.top * (canvas.height / box.height)
    };
}
