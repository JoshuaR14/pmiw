let fondo, compu, menu, miFuente;
let juego;

function preload() {
  fondo = loadImage("assets/fondo/fondo.png");
  compu = loadImage("assets/fondo/compu.png");
  menu = loadImage("assets/menu/menu0.gif");
  miFuente = loadFont("assets/fuentes/FiveFontsatFreddy's-Regular.ttf");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  background(220);
  juego.mostrar();
}

function mousePressed() {
  juego.mousePresionado(mouseX, mouseY);
}
