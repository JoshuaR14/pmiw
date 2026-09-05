// Joshua Romero; Comision C2; Legajo: 125681/8
// Creación de Los Arreglos
let Corriendo = [];
let Apurado = [];
let Risa = [];
let estado, p, f, r, tempo, tempoGlobal, caminarx, Apuradox, risax, fondox, nubex, nubex2, Logoy;
let fondo;
let logo;
let Nube;

function preload() {
  
  // Carga De Imágenes en los arreglos
  for (let i = 0; i < 6; i++) {
    Corriendo[i] = loadImage("assets/Corriendo/Corriendo" + i + ".png");
  }
  for (let i = 0; i < 5; i++) {
    Apurado[i] = loadImage("assets/Apurado/Apurado" + i + ".png");
  }
  for (let i = 0; i < 6; i++) {
    Risa[i] = loadImage("assets/Risa/risa" + i + ".png");
  }

  fondo = loadImage("assets/Fondo/Fondo1.png");
  Nube = loadImage("assets/Fondo/Nubes.png");
  logo = loadImage("assets/Fondo/Logo.png");
}

function setup() {
  createCanvas(800, 600);
  noSmooth();

  tempo = millis();
  tempoGlobal = millis(); 
  estado = p = fondox = f = r = 0;
  
  // Variables de EjesX
  caminarx = 200;
  Apuradox = -100;
  risax = 180;
  Logoy = -300;
  nubex = 900;
  nubex2 = 1400;
}

function draw() {
  background(220);
  //Funcion de Fondo Y nubes
  FondoP();

  // Animación 0: Apurado
  if (estado == 0) {
    image(Apurado[f], Apuradox, 350, 115, 120);

    if (pasaronMilisegundos(tempo, 200)) {//Cada 0.2 Seg Muestra un Frame y Se mueve 40px hacia la derecha
    f++;
    tempo = millis();
    Apuradox += 40;
    if (Apuradox >= 800) 
      Apuradox = -100;
  }

    if (f >= 5) f = 4; //Si el estado no cambio, reiniciar el orden de frames

    if (pasaronMilisegundos(tempoGlobal, 1300)) {// si pasaron 1,3 segundos desde que empezo el estado 0, Cambiar
      estado += 1;
      tempo = millis();
      tempoGlobal = millis(); 
    }
  }

  // Animación 1: Risar
  if (estado == 1) {
    image(Risa[r], risax, 350, 90, 125);

    if (pasaronMilisegundos(tempo, 250)) { //Cada 0.25 Seg Muestra un Frame
      r++;
      tempo = millis();
    }
    if (r >= 6) r = 0; //Si el estado no cambio, reiniciar el orden de frames

    if (pasaronMilisegundos(tempoGlobal, 2600)) { // si pasaron 2,6 segundos desde que empezo el estado 1, Cambiar
      estado += 1;
      tempo = millis();
      tempoGlobal = millis(); // 
    }
  }r

  // Animación 2: Corriendo y Caída del Logo
  if (estado == 2) {
    image(Corriendo[p], caminarx, 350, 100, 120);

    if (pasaronMilisegundos(tempo, 200)) { //Cada 0.2 Seg Muestra un Frame y Se mueve 15px hacia la derecha
      p++;
      tempo = millis();
      caminarx += 15;

      if (caminarx >= 800) {
        caminarx = -100;
      }
    }

    //Si el estado no cambio, reiniciar el orden de frames
    if (p >= 6) p = 0;

    // Caída del Logo después de 4 segundos en el Estado 2
    if (pasaronMilisegundos(tempoGlobal, 4000)) {// si pasaron 4 segundos desde que empezo el estado 1, Cambiar
      image(logo, 220, Logoy, 400, 300);
      if (Logoy <= 30) {
        Logoy += 5;
      }
  //Texto para reiniciar
      fill(255);
      textSize(25);
      text("¡Presiona R para Reiniciar!", 260, 540);
    }
  }

  // Coordenadas Mouse
  fill(255);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}
