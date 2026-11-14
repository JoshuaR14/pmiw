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
  }
}
