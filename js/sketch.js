console.log("hello from reading from js");

var d=20;
// Dandellion dandellion1; //dandellion declared
// Dandellion dandellion2;
// Dandellion dandellion3;
// Dandellion dandellion4;
// Dandellion dandellion5;

//PImage img;

function setup(){
 var myCanvas = createCanvas(800,250);
 //link to id mySketch from header tag 
 myCanvas.parent('mySketch');
 //img = loadImage("../images/dandellions.png");
 }
 
 function draw(){
//image(img,0,0);
 
if(mouseIsPressed){

noStroke();
fill(255);

if (d<50){
d++;
}
} else {
noStroke();
fill(183,221,185);
}
ellipse(mouseX, mouseY, d, d);


 }