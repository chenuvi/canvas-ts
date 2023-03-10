const $ = document.querySelector.bind(document);
const canvas = $("#canvas") as HTMLCanvasElement,
  context = canvas.getContext("2d") as CanvasRenderingContext2D,
  gradient = context.createLinearGradient(0, 0, 0, canvas.height / 2);
gradient.addColorStop(0, "blue");
gradient.addColorStop(0.25, "white");
gradient.addColorStop(0.5, "purple");
gradient.addColorStop(0.75, "red");
gradient.addColorStop(1, "yellow");
context.fillStyle = gradient;
context.rect(0, 0, canvas.width, canvas.height);
context.fill();
