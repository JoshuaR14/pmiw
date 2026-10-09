let menu;
let miFuente;
let estado;
let Fondosp = [];
let flecha;
let opacidadrect;

function preload() {
  
  // Carga De arreglo
  for (let i = 0; i < 3; i++) {
    Fondosp [i] = loadImage("assets/IMG/foto" + i + ".png");
  }
  
  menu = loadImage("assets/IMG/menu0.gif");
  miFuente = loadFont("assets/fuente/FiveFontsatFreddy's-Regular.ttf");
  flecha = loadImage("assets/Flecha.png");
}

function setup() {
  createCanvas(800, 450);
  //noSmooth();
  textFont(miFuente);
  textSize(32);
  estado = 0;
}

function draw() {
  background(0);
  
  // ESTADO 0 == PANTALLA 0/MENU
  
  if (estado == 0) {
    image(menu, 0, 0, 800, 450);
    fill(0);
    rect(0, 438, 32, 12);
    textSize(32);
    fill(255);
    text("Five Night at Freddy's", width / 4, height / 4);
    textSize(24);
    text("Jugar", 40, 240);
    text("Creditos", 40, 280);
  }
  
  // ESTADO 1 == PANTALLA 1
  if (estado == 1) {
    image(Fondosp[0], 0, 0, 800, 450);
      if (opacidadrect < 120){
      opacidadrect += 20;
   }
    
    //Dialago
    fill(0,120);
    stroke(0);
    rect(100,300,600,130);
    fill(255);
    textSize(11);
    text("prueba de texto para ver como queda",150,350);
    
    //boton siguiente
    textSize(16);
    text("Siguiente",705,435);
    stroke(255);
    line(705,430,790,430);
  }
  //ESTADO 2 == PANTALLA 2
  if (estado == 2) {
    image(Fondosp[1], 0, 0, 800, 450);
  }
  
  
  // Coordenadas Mouse
  fill(255);
  stroke(0);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
function mousePressed(){
  if(estado == 0 && mouseX > 40 && mouseX < 130 &&  mouseY > 200 && mouseY < 230){
    estado++;
  }
  if(mouseX > 705 && mouseX < 790 &&  mouseY > 405 && mouseY < 430){
    estado++;
    
  }
}
