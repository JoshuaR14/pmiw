let fondo, compu;
let botones = [];
let menu;
let juego;
let miFuente;

function preload(){
  fondo = loadImage("assets/fondo/fondo.png");
  compu = loadImage("assets/fondo/compu.png");
  menu = loadImage("assets/menu/menu0.gif");
  miFuente = loadFont("assets/fuentes/FiveFontsatFreddy's-Regular.ttf");
}
function setup(){
  createCanvas(800, 400)
  // Creamos los 4 botones usando tu molde: new Boton(x, y, lx, ly ancho, alto, colorBoton)
  botones[0] = new Boton(220, 294, 240, 165, 54, 32, color(255, 60, 60));   // Rojo
  botones[1] = new Boton(312, 294, 315, 165,54, 32, color(60, 140, 255));  // Azul
  botones[2] = new Boton(402, 294, 390, 165, 54, 32, color(60, 255, 100));  // Verde
  botones[3] = new Boton(490, 294, 465, 165, 54, 32, color(255, 220, 50));  // Amarillo
  juego = new Juego();
}

function draw(){
  background(220);
  image(fondo,0,0,800,400);
  image(compu,40, 20, 680, 360);
  
  // Recorremos el arreglo y le pedimos a cada botón que se dibuje
  for (let i = 0; i < botones.length; i++) {
    botones[i].dibujar();
  }
  juego.mostrar();
  
  
  
  
    // Coordenadas Mouse
  fill(255);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
function mousePressed() {
  // Recorremos los 4 botones para ver si el clic cayó en alguno
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].esClickeado(mouseX, mouseY)) {
      botones[i].encender(); // Si fue clickeado, le pedimos que se ilumine
      console.log("Tocaste el botón número: " + i);
    }
  }
  juego.mousePresionado(mouseX, mouseY);
}
