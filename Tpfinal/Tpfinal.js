//https://youtu.be/mxwphJWy8mc (lujan)

//Creacion de variables Globales
let fondo, fin, compu, menu,tutorial, miFuente;
let sonidoboton;
let juego;

//Carga de Imagenes
function preload() {
  fondo = loadImage("assets/fondo/fondo.png");
  compu = loadImage("assets/fondo/compu.png");
  fin = loadImage ("assets/fondo/fondo1.png");
  menu = loadImage("assets/menu/menu0.gif");
  tutorial = loadImage("assets/menu/tutorial.gif");
  miFuente = loadFont("assets/fuentes/FiveFontsatFreddy's-Regular.ttf");
  sonidoboton = loadSound("assets/sonidos/fnafclick.wav");
  
}

function setup() {
  createCanvas(800, 400);
  //Creas la el objeto juego en las clase Juego
  juego = new Juego();
}

function draw() {
  background(220);
  //llamas al metodo juego.mostrar, para poder ver el juego
  juego.mostrar();
  
 
  //fill(255);
  //stroke(0);
  //textSize(20);
  //text(mouseX + " " + mouseY, mouseX, mouseY);
  
}

//funcion que devuelve al metedo juego.mousePresionado las cordenadas de mouseX y mouseY
function mousePressed() {
  juego.mousePresionado(mouseX, mouseY);
}
