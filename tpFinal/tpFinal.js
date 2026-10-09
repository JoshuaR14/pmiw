let menu;
let miFuente;
let estado;
let Fondosp = [];
let flecha;
let opacidadrect;

function preload() {
  
  // Carga De arreglo
  for (let i = 0; i < 6; i++) {
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
    
    //Dialago
    fill(0,120);
    stroke(0);
    rect(100,300,600,130);
    fill(255);
    textSize(15);
    text("Un policia recibe un informe breve, un niño habia desaparecido\nesa misma tarde, el ultimo lugar donde alguien lo vio era frente \nde una vieja pizzeria que llevaba años cerradas.",115,350);
    textSize(16);
    text("Narrador...",105,300);
    
    
    //boton siguiente
    textSize(16);
    text("Siguiente",705,435);
    stroke(255);
    line(705,430,790,430);
  }
  //ESTADO 2 == PANTALLA 2
  if (estado == 2) {
    image(Fondosp[1], 0, 0, 800, 450);
    
    //Dialago
    fill(0,120);
    stroke(0);
    rect(100,300,600,130);
    fill(255);
    textSize(15);
    text("Que Pintas..",115,350);
    textSize(16);
    text("Policia...",105,305);
    
    
    //boton siguiente
    textSize(16);
    text("Siguiente",705,435);
    stroke(255);
    line(705,430,790,430);
  }
    //ESTADO 3 == PANTALLA 3
  if (estado == 3) {
    image(Fondosp[2], 0, 0, 800, 450);
      //Dialago
    fill(0,120);
    stroke(0);
    rect(100,300,600,130);
    fill(255);
    textSize(15);
    text("Que Pintas..",115,350);
    textSize(16);
    text("Policia...",105,305);
    
    //boton siguiente
    textSize(16);
    text("Siguiente",705,435);
    stroke(255);
    line(705,430,790,430);
  }
      //ESTADO 4 == PANTALLA 4
  if (estado == 4) {
    image(Fondosp[3], 0, 0, 800, 450);
      
    //Dialago
    fill(0,120);
    stroke(0);
    rect(100,300,600,130);
    fill(255);
    textSize(15);
    text("Que Pintas..",115,350);
    textSize(16);
    text("Policia...",105,305);
    
        //boton siguiente
    textSize(16);
    text("Siguiente",705,435);
    stroke(255);
    line(705,430,790,430);
  }
        //ESTADO 5 == PANTALLA 5
  if (estado == 5) {
    image(Fondosp[4], 0, 0, 800, 450);
      
    //Dialago
    fill(0,120);
    stroke(0);
    rect(100,300,600,130);
    fill(255);
    textSize(15);
    text("Que Pintas..",115,350);
    textSize(16);
    text("Policia...",105,305);
    
        //boton siguiente
    textSize(16);
    text("Siguiente",705,435);
    stroke(255);
    line(705,430,790,430);
  }
          //ESTADO 6 == PANTALLA 6
  if (estado == 6) {
    image(Fondosp[5], 0, 0, 800, 450);
      
    //Dialago
    fill(0,120);
    stroke(0);
    rect(100,300,600,130);
    fill(255);
    textSize(15);
    text("Que Pintas..",115,350);
    textSize(16);
    text("Policia...",105,305);
    
        //boton siguiente
    textSize(16);
    text("Siguiente",705,435);
    stroke(255);
    line(705,430,790,430);
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
