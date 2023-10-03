status_model = "";

function preload() {
    img = loadImage("Ac.jpeg");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecing objects";

}

function modelLoaded() {
    console.log("Model Loaded")
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        status_model = 1;
        objects = results;
    }
}