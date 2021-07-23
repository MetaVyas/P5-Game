let P1 = rect(60, 20, 30, 55);
let P2 = rect(60, 20, 30, 55);

function setup(){
createCanvas(600,600);    
background(0);
}
function draw(){
    background(0);
    strokeWeight(3);
    stroke(255,200);
    line(0,200,600,200);
    line(0,400,600,400);
    stroke(200,0,0,120);
    line(125,0,125,600);
    stroke(0,0,200,120);
    line(475,0,475,600);
    stroke(255,0,0);
    line(299,0,299,600);
    stroke(0,0,255);
    line(301,0,301,600);

  
 
   if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }
 
//    if (keyIsDown(DOWN_ARROW)) {
/       myYPos += 3;


    
}

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
 
//    if (keyIsDown(LEFT_ARROW)) {
//        myXPos -= 3;
//    }
 
//    if (keyIsDown(RIGHT_ARROW)) {
//        myXPos += 3;
//    }
 
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
