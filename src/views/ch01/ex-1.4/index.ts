const $ = document.querySelector.bind(document)
const canvas = $('#canvas') as HTMLCanvasElement
const context = canvas.getContext('2d') as CanvasRenderingContext2D,
    FONT_HEIGHT = 15,
    MARGIN = 35,
    HAND_TRUNCATION = canvas.width / 25,
    HOUR_HAND_TRUNCATION = canvas.width / 10,
    NUMERAL_SPACING = 20,
    RADIUS = canvas.width / 2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMERAL_SPACING;

// Functions.....................................................

function drawCircle() {
    context.beginPath()
    context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true)
    context.stroke()
}

function drawNumerals() {
    const numerals = Array(12).fill(0).map((ele, index) => index + 1)
    let angle = 0, numeralsWidth = 0;
    numerals.forEach((numeral) => {
        angle = Math.PI / 6 * (numeral - 3)
        numeralsWidth = context.measureText(String(numeral)).width
        context.fillText(String(numeral),
            canvas.width / 2 + Math.cos(angle) * HAND_RADIUS - numeralsWidth / 2,
            canvas.height / 2 + Math.sin(angle) * HAND_RADIUS + FONT_HEIGHT / 3
        )
    })
}

function drawCenter() {
    context.beginPath()
    context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2)
    context.stroke()
}

function drawHand(loc: number, isHour: boolean,) {
    const angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2,
        handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION
            : RADIUS - HAND_TRUNCATION;
    context.moveTo(canvas.width / 2, canvas.height / 2)
    context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius,
        canvas.height / 2 + Math.sin(angle) * handRadius
    )
    context.stroke()
}

function drawHands() {
    let date = new Date,
        hour = date.getHours();
    hour = hour > 12 ? hour - 12 : hour;
    drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true)
    drawHand(date.getMinutes(), false)
    drawHand(date.getSeconds(), false)
}

function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawCenter();
    drawHands();
    drawNumerals();
}

// Initialization................................................
context.font = FONT_HEIGHT + 'px Arial'
setInterval(drawClock, 1000)