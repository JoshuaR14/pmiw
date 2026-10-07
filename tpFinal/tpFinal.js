let menu;
let mifuente;

function preload(){
  
  menu = loadImage("/assets/IMG/menu1.gif");
  miFuente = loadFont("assets/fuente/FiveFontsatFreddy's-Regular.ttf");
  
}
function setup() {
 createCanvas(800, 450);
 noSmooth();
 textFont(miFuente);
 textSize(32);
}


function draw() {
  
  //ESTADO 1
  if (estado == 0){
  background(0);
  image(menu,0,0, 800,450);
  fill(0);
  rect(0,438,32,12);
  textSize(32);
  fill(255);
  text("Five Night at Freddy's",width / 4, height / 4);
  textSize(24);
  text("Jugar", 40,240);
  text("Creditos", 40, 280);
  }
  // Coordenadas Mouse
  fill(255);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
