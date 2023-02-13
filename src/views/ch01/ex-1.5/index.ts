// import { $ } from '@/utils/dom'
// console.log('$: ', $);

const $ = document.querySelector.bind(document)
const canvas = $('#canvas') as HTMLCanvasElement
const context = canvas.getContext('2d') as CanvasRenderingContext2D,
  spritesheet = new Image();

// Functions.....................................................

function windowToCanvas(canvas: HTMLCanvasElement, x: number, y: number) {
  const box = canvas.getBoundingClientRect()
  return {
    x: x - box.left * (canvas.width / box.width),
    y: y - box.top * (canvas.height / box.height)
  }
}