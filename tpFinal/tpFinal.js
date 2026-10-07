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
  fill(0);
  rect(0,438,32,12);
  
  // Coordenadas Mouse
  fill(255);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
