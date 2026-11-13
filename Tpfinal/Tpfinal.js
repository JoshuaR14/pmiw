let mDerecha = [];
let spring = [];
let f;
let s;
let fondo;
let fondox;
let tempo, tempoglobal;

function preload() {
  for (let i = 0; i < 3; i++) {
    mDerecha[i] = loadImage("assets/MoverDerecha/mover" + i + ".png");
  }
  for (let i = 0; i < 4; i++) {
    spring[i] = loadImage("assets/spring/spring" + i + ".png");
  }

  fondo = loadImage("assets/fondo/fondo.jfif");
}

function setup() {
  createCanvas(800, 400);
  noSmooth();
  f = 0;
  s = 0;
  fondox = 0;
  tempo= millis();
  tempoglobal= millis();
}

function draw() {
  background(125);

  // Fondo infinito
  image(fondo, fondox, 0, 2000, 400);
  image(fondo, fondox + 2000, 0, 2000, 400);

  fondox -= 1;

  if (fondox <= -2000) {
    fondox = 0;
  }

  // Dibujar personajes
  image(mDerecha[f], 250, 200, 50, 80);
  image(spring[s], 25, 140, 55, 150);

  // Animación personaje 1 (cada 200ms)
    if (pasaronMilisegundos(tempo, 200)) { //Cada 0.25 Seg Muestra un Frame
      f++;
      tempo = millis();
    }

  // Animación Spring (cada 400ms usando su propio reloj)
    if (pasaronMilisegundos(tempoglobal, 400)) { //Cada 0.25 Seg Muestra un Frame
      s++;
      tempoglobal = millis();
    }

  if (f >= 3) f = 0;
  if (s >= 4) s = 0;

  // Coordenadas del mouse
  fill(0);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
