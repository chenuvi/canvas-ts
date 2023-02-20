/*
CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
x0
开始圆形的 x 轴坐标。

y0
开始圆形的 y 轴坐标。

r0
开始圆形的半径。

x1
结束圆形的 x 轴坐标。

y1
结束圆形的 y 轴坐标。

r1
结束圆形的半径。

*/
const $ = document.querySelector.bind(document);
const canvas = $("#canvas") as HTMLCanvasElement,
  context = canvas.getContext("2d") as CanvasRenderingContext2D,
  gradient = context.createRadialGradient(
    canvas.width / 2,
    canvas.height,
    10,
    canvas.width / 2,
    0,
    100
  );
gradient.addColorStop(0, "blue");
gradient.addColorStop(0.25, "white");
gradient.addColorStop(0.5, "purple");
gradient.addColorStop(0.75, "red");
gradient.addColorStop(1, "yellow");
context.fillStyle = gradient;
context.rect(0, 0, canvas.width, canvas.height);
context.fill();
