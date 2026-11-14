class Juego {

  constructor() {
    this.nivel = 0;
    this.secuencia = [4, 6, 8];
    this.intentos = 3;
    this.estado = "menu";
    this.computadora = new Computadora();
  }

  mostrar() {
    if (this.estado === "menu") {
      image(menu, 0, 0, 800, 400);

      //titulo
      fill (255);
      textFont(miFuente);
      textSize(32);
      text("Five Nights at Freddy's", width / 2, height / 4);

      //boton juhar
      fill(0, 180);
      stroke(180);
      strokeWeight(3);
      rect(90, 140, 220, 50, 8);
      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(22);
      text("JUGAR", 200, 170);

      //boton instrucciones
      fill(0, 180);
      stroke(180);
      strokeWeight(3);
      rect(90, 213, 220, 50, 8);
      fill(255);
      noStroke();
      text("INSTRUCCIONES", 203, 243);

      //Boton Creditos
      fill(0, 180);
      stroke(180);
      strokeWeight(3);
      rect(90, 285, 220, 50, 8);
      fill(255);
      noStroke();
      text("CRÉDITOS", 200, 313);
    }
    //pant instru
    else if (this.estado==="instrucciones") {
      background(10);
      noStroke();
      fill(127, 145, 145);
      rect(180, 0, 440, 200);
      image(tutorial, 200, 0, 400, 190);

      fill(255);
      textFont(miFuente);
      textSize(15);
      text("La computadora mostrará una secuencia de colores", 390, 230);
      text("Prestá atención y repetí la secuencia haciendo clic", 390, 260);
      text("En los botones correspondientes.", 390, 290);
      text("Cuentas con 3 intentos, si te equivocas perderas.", 380, 320);

      textSize(20);
      text("¡Completá todos los niveles para ganar!", 390, 370);
      text("Volver", 730, 370);
      //text("jugar",60,370);
    }
    //pantalla creditos
    else if (this.estado === "creditos") {
      background(0);

      fill(255);
      //noStroke();
      //textAlign(CENTER, CENTER);
      textFont(miFuente);
      textSize(32);
      text("CRÉDITOS", 400, 50);

      textSize(18);
      text("Elaborado por:\nJoshua Romero Legajo: 125681/8. \nLujan Samudio Legajo: 125683/0.", 400, 210);
      text("Comision N2\nProfesor: Matias Jauregio Lorda.", 400, 290);
      text ("Trabajo Practico N2 parte 2 de programación", 400, 90);
      text ("para medios interactivos orientadas a las tegnologias web.", 400, 120);
      text ("Basado en el juego: Five Night at Freddy's", 400, 160);

      textSize(22);
      text("VOLVER", 400, 365);
    }
    //pantalla ya jugando
    else if (this.estado === "jugando") {
      image(fondo, 0, 0, 800, 400);
      this.computadora.actualizar();
      this.computadora.dibujar();
    }
  }

  mousePresionado(x, y) {
    if (this.estado === "menu") {
      // Botón JUGAR
      if (x > 90 && x < 310 && y > 140 && y < 188) {
        this.estado = "jugando";
        this.computadora.iniciarNivel(this.secuencia[this.nivel]);
      }
      //boton instrucciones
      if (x > 90 && x < 310 && y > 210 && y < 260) {
        this.estado = "instrucciones";
      }
      // Botón CRÉDITOS
      if (x > 90 && x < 310 && y > 285 && y < 335) {
        this.estado = "creditos";
      }
    }
    //boton volver en creditos
    else if (this.estado === "creditos") {
      if (x > 350 && x < 450 && y > 345 && y < 370) {
        this.estado = "menu";
      }
    }
    //boton volver en instru
    else if (this.estado === "instrucciones") {
      if (x > 690 && x < 770 && y > 360 && y < 380) {
        this.estado = "menu";
      }
    }
    //jugando
    else if (this.estado === "jugando") {

      let botonTocado = this.computadora.verificarClic(x, y);
      if (botonTocado !== -1) {
        console.log("Tocaste el botón: " + botonTocado);
      }
    }
  }
}
