class Juego {

  constructor() {
    this.nivel = 0;
    this.secuencia = [4, 6, 8];
    this.intentos = 3;
    this.estado = "menu";
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
      strokeWeight(2);
      rect(90, 220, 220, 50, 8);
      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(22);
      text("JUGAR", 200, 245);

    //-----Boton Creditos
      fill(0, 180);
      stroke(180);
      strokeWeight(2);
      rect(90, 285, 220, 50, 8);
      fill(255);
      noStroke();
      text("CRÉDITOS", 200, 310);
    }
    //pantalla creditos
    else if (this.estado === "creditos") {
      background(0);

      fill(255);
      textAlign(CENTER, CENTER);
      textFont(miFuente);
      textSize(32);
      text("CRÉDITOS", 400, 50);

      textSize(18);
      
      text("Trabajo Nº2 parte 2 de Programación\n para medios interactivos orientada\na las tecnologías web.", 400, 115);
      text("Elaborado por:\nJoshua Romero Legajo: 125681/8. \nLujan Samudio Legajo: 125683/0.",400, 210);
      text("Comision N2\nProfesor: Matias Jauregio Lorda.",400,290);

      textSize(22);
      text("VOLVER", 400, 365);
    }
    //pantalla ya jugando
    else if (this.estado === "jugando") {
      image(fondo, 0, 0, 800, 400);
      image(compu, 40, 20, 680, 360);

      for (let i = 0; i < botones.length; i++) {
        botones[i].dibujar();
      }
    }
  }
  mousePresionado(x, y) {
    if (this.estado === "menu") {

      // boton en jugar
      if (x > 90 && x <310 && y > 220 && y < 270) {
        this.estado = "jugando";
      }
      // Boton en creditos
      if (x > 90 && x < 310 && y > 285 && y < 335) {
        this.estado = "creditos";
      }
    } 
    
    else if (this.estado === "creditos") {
      if (x > 300 && x < 500 && y > 290 && y < 350) {
        this.estado = "menu";
      }
    }
  }
}
