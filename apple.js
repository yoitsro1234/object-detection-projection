status = "";
results = [];

function preload(){
    image("a p p u.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded, p o g");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}
