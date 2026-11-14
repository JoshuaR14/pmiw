let fondo, compu;

function preload(){
  fondo = loadImage("assets/fondo/fondo.png");
  compu = loadImage("assets/fondo/compu.png");
}
function setup(){
  createCanvas(800, 400)
}

function draw(){
  background(220);
  image(fondo,0,0,800,400);
  image(compu,120,80,550,300);
  
  
  
  
    // Coordenadas Mouse
  fill(255);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
