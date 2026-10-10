let menu;
let miFuente;
let estado;
let Fondosp = [];
let grito;
let sonidoSonado = false;
let Spring;
let chica;
let tiempo;
let sangre;
let freddy;
let ejeY;
let HomeY;
let volver = false;

function preload() {
  // Carga del arreglo de imágenes de fondo
  for (let i = 0; i < 11; i++) {
    Fondosp[i] = loadImage("assets/IMG/foto" + i + ".png");
  }

  menu = loadImage("assets/IMG/menu0.gif");
  miFuente = loadFont("assets/fuente/FiveFontsatFreddy's-Regular.ttf"); //Fuente de FnaF
  
  //Carga De Sonido del JumpScare
  grito = loadSound("assets/musica/grito.wav");
  sangre = loadImage("assets/IMG/sangre.gif");

  // Animatrónicos
  Spring = loadImage("assets/Susto/Spring.gif");
  chica = loadImage("assets/Susto/chica.gif");
  freddy = loadImage("assets/Susto/freddy.gif");
}

function setup() {
  createCanvas(800, 450);
  textFont(miFuente);
  textSize(32);
  estado = 0;
  tiempo = 0;
  ejeY = 600;
  HomeY = 1100;
}

function draw() {
  background(0);

  // ESTADO 0 == PANTALLA 0 / MENU
  if (estado == 0) {
    image(menu, 0, 0, 800, 450);
    fill(0);
    rect(0, 438, 32, 12);
    textSize(32);
    fill(255);
    text("Five Nights at Freddy's", width / 4, height / 4);
    textSize(24);
    text("Jugar", 40, 240);
    text("Créditos", 40, 280);
  }

  // ESTADO 1 == PANTALLA 1
  if (estado == 1) {
    image(Fondosp[0], 0, 0, 800, 450);

    // Diálogo
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("Un policía recibe un informe breve: un niño había desaparecido\nesa misma tarde. El último lugar donde alguien lo vio era frente\na una vieja pizzería que llevaba años cerrada.", 115, 350);
    textSize(16);
    text("Narrador...", 105, 300);

    // Botón siguiente
    textSize(16);
    text("Siguiente", 705, 435);
    stroke(255);
    line(705, 430, 790, 430);
  }

  // ESTADO 2 == PANTALLA 2
  if (estado == 2) {
    image(Fondosp[1], 0, 0, 800, 450);

    // Diálogo
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("Estaciona el patrullero sobre las líneas amarillas. El local está\ncompletamente a oscuras, pero se oye un zumbido eléctrico\ngrave.\nTe acercas a la única entrada principal de vidrio y la fuerzas\ncon cuidado para ingresar al complejo.", 115, 350);
    textSize(16);
    text("Narrador...", 105, 305);

    // Botón siguiente
    textSize(16);
    text("Siguiente", 705, 435);
    stroke(255);
    line(705, 430, 790, 430);
  }

  // ESTADO 3 == PANTALLA 3
  if (estado == 3) {
    image(Fondosp[2], 0, 0, 800, 450);

    // Diálogo
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("Camina con la linterna en mano sobre el piso de baldosas\najedrezadas. Las mesas largas con manteles blancos y globos\ncolgantes parecen congeladas en el tiempo. A lo lejos, sobre el\nescenario principal con el telón rojo LET'S PARTY!!!, las siluetas\nde los animatrónicos lo vigilan en silencio.", 115, 350);
    textSize(16);
    text("Narrador...", 105, 305);

    // Botón siguiente
    textSize(16);
    text("Siguiente", 705, 435);
    stroke(255);
    line(705, 430, 790, 430);
  }

  // ESTADO 4 == PANTALLA 4
  if (estado == 4) {
    image(Fondosp[3], 0, 0, 800, 450);

    // Diálogo
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("Te adentras por el pasillo inferior. El aire es pesado y huele a\nmetal oxidado. Las luces de emergencia parpadean débilmente,\nfrente a ti se encuentra un animatrónico sentado resguardando\nla puerta.", 115, 350);
    textSize(16);
    text("Narrador...", 105, 305);

    // Botones
    fill(0, 120);
    stroke(0);
    rect(290, 240, 145, 50);
    rect(600, 240, 145, 50);

    fill(255);
    textSize(16);
    text("  Atravesar\nAnimatrónico", 300, 270);
    text("  Ir Hacia\nel Pasillo", 630, 270);
  }

  // ESTADO 5 == PANTALLA 5
  if (estado == 5) {
    image(Fondosp[4], 0, 0, 800, 450);

    // Diálogo
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("CLANGG... CLANGG... Ruidos metálicos se escuchan desde la sala\nde la derecha. Y hacia adelante hay una computadora que\nprobablemente pueda ayudar...", 115, 350);
    textSize(16);
    text("Narrador...", 105, 305);

    // Botones
    fill(0, 120);
    stroke(255);
    rect(195, 385, 140, 40);
    rect(475, 385, 170, 40);

    fill(255);
    noStroke();
    textSize(14);
    text("    Ir a la sala\n  de seguridad", 200, 410);
    text("         Investigar\nsala de la derecha", 480, 410);
  }

  // ESTADO 6 == PANTALLA 6
  if (estado == 6) {
    image(Fondosp[5], 0, 0, 800, 450);

    // Diálogo
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("Te adentras en la antigua sala de seguridad. Allí se ven dos\nductos: en el de la derecha se escuchan ruidos metálicos y\nextraños, mientras que el de la izquierda permanece en completo\nsilencio.", 115, 350);
    textSize(16);
    text("Narrador...", 105, 305);

    // Botones
    fill(0, 120);
    stroke(0);
    rect(130, 210, 145, 50);
    rect(600, 210, 145, 50);

    fill(255);
    textSize(15);
    text(" Entrar al ducto\n   Izquierdo", 132, 240);
    text(" Entrar al ducto\n    Derecho", 602, 240);
  }

  // ESTADO 7 == PANTALLA 7
  if (estado == 7) {
    image(Fondosp[6], 0, 0, 800, 450);

    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("El ducto estaba oscuro y sucio, pero al final del todo se\napreciaba una luz tenue...", 115, 350);
    textSize(16);
    text("Policía...", 105, 305);

    // Botón siguiente
    textSize(16);
    text("Siguiente", 705, 435);
    stroke(255);
    line(705, 430, 790, 430);
  }
  
  //ESTADO 8 == PANTALLA 8
  if (estado == 8) {
    image(Fondosp[7], 0, 0, 800, 450);
    
     //Dialago
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("¡¡El niño desaparecido!! estaba acostado en una esquina de la\nhabitación; parecia recien despierto de una siesta. Tomás al niño\ny se van hacia la salida...", 115, 350);
    textSize(16);
    text("Narrador...", 105, 300);
    
    //boton siguiente
    textSize(16);
    text("Siguiente", 705, 435);
    stroke(255);
    line(705, 430, 790, 430);
  }
  
  
  //ESTADO 9 == PANTALLA 9
  if (estado == 9) {
   image(Fondosp [8],0,0,800,450); 
   
    //Dialago
    fill(0, 120);
    stroke(0);
    rect(100, 300, 600, 130);
    fill(255);
    textSize(15);
    text("Recorriendo la pizzeria en silencio y con miedo, ya que tus manos\nestan ocupadas por el niño a upa, no tenes visión de nada en la\noscuridad, pero logras ver que en un pasillo al final de todo\n¡se ve una salida de emergencia! contento quieres ir corriendo,\npero escuchas un sonido metalico y pesado acercandose detras\nde ti...¿que vas a hacer? ", 115, 336);
    textSize(16);
    text("Narrador...", 105, 300);
    
    //elecciones
    fill(0, 120);
    stroke(0);
    rect(100, 210, 145, 50);
    rect(550, 210, 145, 50);
    fill(255);
    textSize(15);
    text(" Esconderse\n  bajo la mesa", 105, 240);
    text("  correr a\n la salida", 560, 240);
    
    
  }

  // --- JUMPSCARES ---

  // Pantalla Spring (Estado 21)
  if (estado == 21) {
    image(Spring, 0, 0, 800, 450);
    if (!sonidoSonado) {
      grito.play();
      sonidoSonado = true;
    }
    if (millis() - tiempo >= 4500) {
      estado = 20; // Pasa a Game Over
    }
  }

  // Pantalla Chica (Estado 22)
  if (estado == 22) {
    image(chica, 0, 0, 800, 450);
    if (!sonidoSonado) {
      grito.play();
      sonidoSonado = true;
    }
    if (millis() - tiempo >= 4500) {
      estado = 20; // Pasa a Game Over
    }
  }

  // Pantalla Freddy (Estado 23)
  if (estado == 23) {
    image(freddy, 0, 0, 800, 450);
    if (!sonidoSonado) {
      grito.play();
      sonidoSonado = true;
    }
    if (millis() - tiempo >= 4500) {
      estado = 20; // Pasa a Game Over
    }
  }
  // Pantalla de spring (persiguiendote)
  if (estado == 24){
   image(Spring, 0, 0, 800, 450);
  }

  // --- PANTALLA GAME OVER ---
  if (estado == 20) {
    background(0);
    image(sangre, 0, 0, 800, 450);
    textSize(48);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Game Over", width / 2, height / 2);

    // Botón de Reiniciar
    fill(255);
    textSize(28);
    text("Reiniciar", width / 2, 350);
  }
  
  //--- CREDITOS --- 
  if (estado == 25){
    background(0);
    text("Trabajo Nº2 de Programación \npara medios interactivos orientada\na las tecnologías web.",width /4, ejeY);
    text("Elaborado por:\nJoshua Romero Legajo: 125681/8. \nLujan Samudio Legajo: 125683/0.",width /4, ejeY+125);
    text("Comision N2\nProfesor: Matias Jauregio Lorda.",width /4, ejeY+250);
    text("Basado en el juego: \nFive nights at freddy's.",width /4, ejeY+350);
    text("Gracias Por Su tiempo!",width /4, ejeY+425);
    textSize(36);
    text("Volver Al Menu", 230, HomeY);
    if(ejeY > -600){
      ejeY -= 1;
    }
    if(HomeY > 260){
      HomeY-=1;
    }
    if(HomeY == 260){
      volver = true;
    }
    
  }

  // Coordenadas Mouse para guía
  textAlign(LEFT, BASELINE);
  fill(255);
  stroke(0);
  textSize(20);
  text(mouseX + " " + mouseY, mouseX, mouseY);
}

function mousePressed() {
  // Botón Jugar (Menú)
  if (estado == 0 && mouseX > 40 && mouseX < 130 && mouseY > 200 && mouseY < 230) {
    estado++;
  }

  // Botón Siguiente general
  if (estado >= 1 && estado != 4 && estado != 5 && estado != 6 && estado != 20 && estado < 21 && mouseX > 705 && mouseX < 790 && mouseY > 405 && mouseY < 430) {
    estado++;
  }

  // --- Opciones Estado 4 ---
  // Atravesar Animatrónico (Jumpscare Spring)
  if (estado == 4 && mouseX > 290 && mouseX < 435 && mouseY > 240 && mouseY < 290) {
    estado = 21;
    tiempo = millis();
    sonidoSonado = false;
  }
  // Caminar al pasillo
  if (estado == 4 && mouseX > 600 && mouseX < 745 && mouseY > 240 && mouseY < 290) {
    estado = 5;
  }

  // --- Opciones Estado 5 ---
  // Ir a la sala de seguridad
  if (estado == 5 && mouseX > 195 && mouseX < 335 && mouseY > 385 && mouseY < 425) {
    estado = 6;
  }
  // Investigar sala de la derecha (Jumpscare Freddy)
  if (estado == 5 && mouseX > 475 && mouseX < 645 && mouseY > 385 && mouseY < 425) {
    estado = 23;
    tiempo = millis();
    sonidoSonado = false;
  }

  // --- Opciones Estado 6 ---
  // Entrar al ducto izquierdo
  if (estado == 6 && mouseX > 130 && mouseX < 275 && mouseY > 210 && mouseY < 260) {
    estado = 7;
  }
  // Entrar al ducto derecho (Jumpscare Chica)
  if (estado == 6 && mouseX > 600 && mouseX < 745 && mouseY > 210 && mouseY < 260) {
    estado = 22;
    tiempo = millis();
    sonidoSonado = false;
  }
  //--- Opciones Estado 9 ---
  if (estado == 9 && mouseX > 600 && mouseX < 744 && mouseY >210 && mouseY < 260){
   estado = 24;
  }

  // --- Reiniciar desde Game Over (Estado 20) ---
  if (estado == 20) {
    if (mouseX > 320 && mouseX < 480 && mouseY > 330 && mouseY < 370) {
      reiniciar();
    }
  }
   if (estado == 0 && mouseX > 40 && mouseX < 165 && mouseY > 240 && mouseY < 265) {
    estado = 25;
    tiempo = millis();
}
  if (volver == true && mouseX > 230 && mouseX < 540 && mouseY > 205 && mouseY < 245) {
    estado = 0;
  }
}
//Funcion Reiniciar
function reiniciar() {
  estado = 0;
  tiempo = 0;
  ejeY = 600;
  HomeY = 1100;
  sonidoSonado = false;
  textAlign(LEFT, BASELINE);
  if (grito.isPlaying()) {
    grito.stop();
  }
}
