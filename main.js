let capture;
let frameArray = [];
let i = 0;
let delay = 0;
let slider = document.getElementById("delaySlider");
let DelayDisp = document.getElementById("delayDisplay");
let startZeit = new Date()

function setup() {
	createCanvas(640, 480);
    frameRate(25)
	capture = createCapture(VIDEO);
    fullscreen()

}
function draw() {
	background(200);
	if (capture.loadedmetadata) {
		delay = int(slider.value);

        DelayDisp.textContent = int(slider.value)/25 + " Sekunden"
		frameArray.unshift(capture.get(0, 0, width, height));
        image(frameArray[frameArray.length - 1], 0, 0);

		if (i > delay) {
			frameArray = frameArray.slice(0, delay);
            let startZeit2 = new Date()
            console.log(startZeit2 - startZeit);
		}else{
            textSize(40);
            fill(255)
            text("lädt...", width/2-50, height/2)
        }
	}
	i++;
}
