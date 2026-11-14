let fondo, compu, menu,tutorial, miFuente;
let juego;

function preload() {
  fondo = loadImage("assets/fondo/fondo.png");
  compu = loadImage("assets/fondo/compu.png");
  menu = loadImage("assets/menu/menu0.gif");
  tutorial = loadImage("assets/menu/tutorial.gif");
  miFuente = loadFont("assets/fuentes/FiveFontsatFreddy's-Regular.ttf");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  background(220);
  juego.mostrar();
  
 
  fill(255);
  stroke(0);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
  
}

function mousePressed() {
  juego.mousePresionado(mouseX, mouseY);
}
