let menu;
let miFuente;
let estado;
let Fondosp = [];

function preload() {
  
  for (let i = 0; i < 3; i++) {
    Fondosp [i] = loadImage("assets/IMG/foto" + i + ".png");
  }
  
  menu = loadImage("assets/IMG/menu0.gif");
  miFuente = loadFont("assets/fuente/FiveFontsatFreddy's-Regular.ttf");
}

function setup() {
  createCanvas(800, 450);
  noSmooth();
  textFont(miFuente);
  textSize(32);
  estado = 0;
}

function draw() {
  background(0);
  
  // ESTADO 1
  
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
  
  if (estado == 1) {
    image(Fondosp[0], 0, 0, 800, 450);
  }
  
  // Coordenadas Mouse
  fill(255);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
function mousePressed(){
  if(estado == 0 && mouseX > 40 && mouseX < 130 &&  mouseY > 200 && mouseY < 230){
    estado++;
  }
  //if(mouseX > 40 && mouseX < 165 &&  mouseY > 240 && mouseY < 265){
    
  //}
}
