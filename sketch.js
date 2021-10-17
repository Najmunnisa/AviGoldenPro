const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,backgroundimg,man,manimg;

var  manAnima


function preload() {
    backgroundimg=loadImage("images/background.png");
    manAn=loadAnimation("images/man.png");
 manAnima=loadAnimation("images/man1.png","images/man2.png","images/man3.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-200);
    man=createSprite(displayWidth-100,displayHeight-300,10,30);
     man.addAnimation("man",manAnima)
   
}

function draw(){
    background(backgroundimg);
    

    drawSprites();

   
}
