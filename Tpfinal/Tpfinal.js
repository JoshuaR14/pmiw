let fondo, compu;
//let menu;
let juego;

function preload(){
  fondo = loadImage("assets/fondo/fondo.png");
  compu = loadImage("assets/fondo/compu.png");
  //menu = loadImage("assets/IMG/menu0.gif");
}
function setup(){
  createCanvas(800, 400)
  //juego = new Juego();
}

function draw(){
  background(220);
  image(fondo,0,0,800,400);
  image(compu,120,80,550,300);
  //juego.mostrar();
  
  
  
  
    // Coordenadas Mouse
  fill(255);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}

//function mousePressed() {
//  juego.mousePresionado(mouseX, mouseY);
//}
