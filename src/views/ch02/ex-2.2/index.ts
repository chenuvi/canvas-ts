const $ = document.querySelector.bind(document);
const canvas = $("#canvas") as HTMLCanvasElement,
  context = canvas.getContext("2d") as CanvasRenderingContext2D;
context.lineWidth = 30;

context.font = "24px Helvetica";

context?.fillText("click anywhere to erase", 175, 40);

// 颜色需要设置在绘制前面
context.strokeStyle = "red";
context.strokeRect(75, 100, 200, 200);

context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(325, 100, 200, 200);


context.canvas.onmousedown = (e) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
