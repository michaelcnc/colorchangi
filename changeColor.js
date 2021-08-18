var Rnum = 255
var Gnum = 204
var Bnum = 0
var sq

function setup() {
    sq = createSprite(200, 200, 20, 20)
    sq.shapeColor = "white"
    createCanvas(400, 400);

}

function draw() {
    background(Rnum,Gnum,Bnum);
    if(keyDown("space") && trex.y>=100) {
        trex.velocityY = -10;
        
      }
    drawSprites();
}
