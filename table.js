img="";
status ="";

function preload(){
    img= loadImage('table.jpg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}
function draw(){
    image(img,0,0,640,420);
    fill('#0400B7 ');
    text("table",225,105);
    noFill();
    stroke("#0400B7");
    rect(100,150,500,200);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function back(){
    window.location = 'home_page.html';
}