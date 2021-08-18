
var student={
  Name:"Jimmy",
  Rollno:5,
  Address:"Hongkong",
  Grade:"Outstanding",
  Eligibility:true
}
var ball={
  Xposition:30,
  Yposition:40,
  radius:30,
  Xspeed :0,
  Yspeed:0,
  color:["blue","green","yellow","purple"]
}
function setup() {

  createCanvas(400, 400);
  //console.log(student)
  //console.log(student.Eligibility)
  console.log (ball)
}

function draw() {
  background(220);
  fill(ball.color[3])
  circle(ball.Xposition,ball.Yposition,ball.radius)
}

