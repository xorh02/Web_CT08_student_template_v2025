  // write your codes here
let box,cube,bg;

function preload(){
 bg = loadImage("assets/geobg.png");
  cube = loadImage("assets/cube.png");
}

function setup(){
  new Canvas(700,600);
  world.gravity.y = 32;
  box = new Sprite(50, height, 50, 50);
  box.img = cube;
  box.friction = 0;
  box.bounciness = 0;
  box.collider = "none";

  startCoordinates = [50, height - box.height / 2];
  
}