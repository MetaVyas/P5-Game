//variables for the three animated objects
 let p1XPos = 125;
 let p1YPos = 300;
 let p2XPos = 475;
 let p2YPos = 300;
 let ballXPos = 300;
 let ballYPos = 300;
let p1Speed = 10; 
let p2Speed = 3;

 //score
let score = 0;
//variables for the ball
let ballxPos = 250;
let ballyPos = 250;
let ballxSpeed=3;
let ballySpeed=3;

let ballxDirection = 1;
let ballyDirection = 1;

function setup(){
createCanvas(600,700);    
background(0);
rectMode(CENTER);
}
function draw(){
    background(0);
    strokeWeight(3);
    stroke(255,200);
    line(0,200,600,200);
    line(0,400,600,400);
    line(0,600,600,600);
    line(10,200,10,400);
    line(590,200,590,400);
    stroke(200,0,0,120);
    line(125,0,125,600);
    stroke(0,0,200,120);
    line(475,0,475,600);
    stroke(255,0,0);
    line(298,0,298,600);
    stroke(0,0,255);
    line(302,0,302,600);

    noStroke();
    fill(255,0,0);
    rect(p1XPos, p1YPos, 30, 55);
    fill(0,0,255)
    rect(p2XPos, p2YPos, 30, 55);

    
   fill(0, 255, 0);
   ellipse(ballXPos, ballYPos, 20, 20);
    let offset = random(-1,1);
   if (ballxPos <= 10 || ballxPos >= 590) {
    ballxDirection *= -1*offset;}
    if (ballyPos <= 10 || ballyPos >= 590) {
    ballxDirection *= -1*offset;}
   ballxPos -= ballxSpeed;
   ballyPos -= ballySpeed;

  
 
   if (keyIsDown(UP_ARROW)) {
       if(p1YPos>25){
        p1YPos -= 3;}
    }
 
    if (keyIsDown(DOWN_ARROW)) {
        if(p1YPos<575){
       p1YPos += 3;}}

    if (keyIsDown(LEFT_ARROW)) {
        if(p1XPos>15){
        p1XPos -= 3;}
      }
    
    if (keyIsDown(RIGHT_ARROW)) {
        if(p1XPos<298-18){
        p1XPos += 3;}
       }

    
textSize(60);
if(score>=3){
    fill(random(0,255),random(0,255),random(0,255));
if(p1Speed>0){
p1Speed--;} 
p2Speed++;
ballxSpeed++;
ballySpeed++;
}
else if(score==1){
fill(0,255,0);
p1Speed --; 
p2Speed = 4;
ballxSpeed++;
ballySpeed++;}
else if(score==2){
fill(255,0,0);
p1Speed --; 
p2Speed = 6;
ballxSpeed=3;
ballySpeed=3;
}
else{
p1Speed = 10; 
p2Speed = 3;
ballxSpeed=3;
ballySpeed=3;
    fill(0,0,255);}
text('SCORE = ' + score, 150, 675);
}

function mouseClicked(){
    score++;
}

// if (ballYPos > p2YPos && ){

// }
// let myXPos = 100;
// let myYPos = 100;
// let enemyXpos = 300;
// let enemyYpos = 300;
// let myLeft, myRight, myTop, myBottom;
// let enemyLeft, enemyRight, enemyTop, enemyBottom;
// function setup() {
//    createCanvas(500, 500);
//    noStroke();
 
//    rectMode(CENTER);
// }
 
// function draw() {
//    background(0);
//    fill(0,0,255);
//    rect(enemyXpos, enemyYpos, 50, 50)
 
//    fill(255, 0, 0);
//    rect(myXPos, myYPos, 50, 50);

 
//    if (keyIsDown(UP_ARROW)) {
//        myYPos -= 3;
//    }
 
//    if (keyIsDown(DOWN_ARROW)) {
//        myYPos += 3;
//    }
//    myLeft = myXPos - 25;
//    myRight = myXPos + 25;
//    myTop = myYPos - 25;
//    myBottom = myYPos + 25;
   
//    enemyLeft = enemyXpos - 25
//    enemyRight = enemyXpos + 25
//    enemyTop = enemyYpos - 25
//    enemyBottom = enemyYpos + 25

//    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){

//    } else{
//        fill(random(255),random(255),random(255))
//        textSize(22)
//        text("im colliding with the enemy, ouch", 140,480)
//    }
//    if (myXPos < 25){
//      myXPos = 25  
//    }
   
//    if (myXPos < 25){
//    myXPos = 25
// }

// if (myXPos < 25){
// myXPos = 25
// }

// if (myXPos < 25){
// myXPos = 25
// }
// }

// let ballArray = [];
 
// function setup() {
//    createCanvas(500, 500);
 
//    for (let i = 0; i < 100; i++) {
//        let temp = new Ball(random(0, 500), 250, 0, 255, 0, random(2, 5));
//        ballArray.push(temp);
//    }
// }
 
// function draw() {
//    background(0);
 
//    for (let i = 0; i < ballArray.length; i++) {
//        fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
//        ellipse(ballArray[i].xPos, ballArray[i].yPos, ballArray[i].ballsize, ballArray[i].ballsize);
 
//        ballArray[i].yPos += ballArray[i].speedValue;
 
//        if (ballArray[i].yPos > 525) {
//            ballArray[i].yPos = -25;
//        }
//    }
// }
 
// class Ball {
//    constructor(x, y, r, g, b, speed) {
//        this.xPos = x;
//        this.yPos = y;
//        this.redValue = random(0,255);
//        this.greenValue = random(0,255);
//        this.blueValue = random(0,255);
//        this.speedValue = speed;
//        this.ballsize = (random(50, 100));
//    }
// }

