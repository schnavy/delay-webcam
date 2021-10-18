let capture;
let frameArray = [];
let i = 0;
let delay = 0;
let slider = document.getElementById("delaySlider");
let DelayDisp = document.getElementById("delayDisplay");

function setup() {
	createCanvas(640, 480);
    frameRate(25)
	capture = createCapture(VIDEO);
}
function draw() {
	if (capture.loadedmetadata) {
        console.log(capture);
		delay = int(slider.value) + 1;

        DelayDisp.textContent = int(slider.value)/25 + " Sekunden"
		frameArray.unshift(capture.get(0, 0, capture.width, capture.height));
        
		if (i > delay) {
            frameArray = frameArray.slice(0, delay);
            image(frameArray[frameArray.length - 1], 0, 0);
            i = delay
		}else{
            background(200);

            image(frameArray[frameArray.length - 1], 0, 0);
            textSize(40);
            fill(255)
            text("delay...", width/2-50, height/2)
        }
	}
	i++;
}
