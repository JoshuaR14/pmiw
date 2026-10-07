let menu;

function preload(){
  
  menu = loadImage("/assets/IMG/menu.jpg");
  
}
function setup() {
 createCanvas(800, 450);
 noSmooth();
}


function draw() {
  background(0);
  image(menu,0,0, 800,450);
  //hola mundo!!!
}
