class Juego {

  constructor() {
    this.nivel = 0;
    this.secuencia = [4, 6, 8];
    this.intentos = 3;
    this.mensajeVidas = "Tenes 3 vidas";
    this.estado = "menu";
    this.computadora = new Computadora();
    this.jugador = new Jugador();

    // Variables para la cuenta regresiva de 3 segundos
    this.esperando = false;
    this.tiempoEspera = 0;
    this.accionPendiente = "";
  }

  iniciarEspera(accion) {
    this.esperando = true;
    this.tiempoEspera = millis();
    this.accionPendiente = accion;
  }

  mostrar() {
    if (this.estado === "menu") {
      image(menu, 0, 0, 800, 400);

      //----Titulo---------
      fill(255);
      textFont(miFuente);
      textAlign(CENTER, CENTER);
      textSize(32);
      text("Five Nights at Freddy's", width / 2, height / 4);

      //boton jugar
      fill(0, 180);
      stroke(180);
      strokeWeight(3);
      rect(90, 140, 220, 50, 8);
      fill(255);
      noStroke();
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
    //------------INSTRUCCIONES--------------
    else if (this.estado === "instrucciones") {
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
    }
    //-------------CREDITOS---------------
    else if (this.estado === "creditos") {
      background(0);

      fill(255);
      textFont(miFuente);
      textSize(32);
      text("CRÉDITOS", 400, 50);

      textSize(18);
      text("Elaborado por:\nJoshua Romero Legajo: 125681/8. \nLujan Samudio Legajo: 125683/0.", 400, 210);
      text("Comision N2\nProfesor: Matias Jauregio Lorda.", 400, 290);
      text("Trabajo Practico N2 parte 2 de programación", 400, 90);
      text("para medios interactivos orientadas a las tegnologias web.", 400, 120);
      text("Basado en el juego: Five Night at Freddy's", 400, 160);

      textSize(22);
      text("VOLVER", 400, 365);
    }
    //---------------------JUGANDO-----------------------
    else if (this.estado === "jugando") {
      image(fondo, 0, 0, 800, 400);
      this.computadora.actualizar();
      this.computadora.dibujar();

      fill(255);
      textFont(miFuente);
      textAlign(CENTER, CENTER);
      textSize(18);
      text("Nivel " + (this.nivel + 1) + "/3", 100, 40);
      text(this.mensajeVidas, 670, 40);

      // Cuenta regresiva en el centro arriba al fallar o avanzar de nivel
      if (this.esperando) {
        let transcurrido = millis() - this.tiempoEspera;
        let segundosRestantes = ceil((3000 - transcurrido) / 1000);

        fill(255, 220, 50);
        textSize(20);
        if (this.accionPendiente === "nuevoNivel") {
          text("¡Bien! Siguiente nivel en: " + segundosRestantes, 380, 80);
        } else if (this.accionPendiente === "repetir") {
          text("¡Error! Repitiendo en: " + segundosRestantes, 380, 80);
        }

        if (transcurrido >= 3000) {
          this.esperando = false;
          if (this.accionPendiente === "nuevoNivel") {
            this.computadora.iniciarNivel(this.secuencia[this.nivel]);
          } else if (this.accionPendiente === "repetir") {
            this.computadora.repetirSecuencia();
          }
        }
      }
    }
    //--------------PERDISTE--------------------
    else if (this.estado === "perdiste") {
      background(0);
      fill(255, 0, 0);
      textFont(miFuente);
      textAlign(CENTER, CENTER);
      textSize(40);
      text("GAME OVER", 400, 130);

      fill(255);
      textSize(22);
      text("Te quedaste sin intentos", 400, 200);

      textSize(22);
      text("VOLVER AL MENU", 400, 305);
    }
    //----------------GANASTE--------------------
    else if (this.estado === "ganaste") {
      background(0);
      image(fin,0,0,800,400);
      fill(255, 0, 0);
      textFont(miFuente);
      textAlign(CENTER, CENTER);
      textSize(40);
      text("YOU WIN", 400, 130);

      fill(255);
      textSize(22);
      text("¡¡Rescataste al niño!!", 400, 200);

      textSize(22);
      text("VOLVER AL MENU", 400, 305);
    }
  }

  mousePresionado(x, y) {
    if (this.estado === "menu") {
      // Botón JUGAR
      if (x > 90 && x < 310 && y > 140 && y < 188) {
        this.estado = "jugando";
        this.esperando = false;
        this.jugador.reiniciar();
        this.mensajeVidas = "Tenes 3 vidas";
        this.computadora.iniciarNivel(this.secuencia[this.nivel]);
      }
      // Botón INSTRUCCIONES
      if (x > 90 && x < 310 && y > 210 && y < 260) {
        this.estado = "instrucciones";
      }
      // Botón CRÉDITOS
      if (x > 90 && x < 310 && y > 285 && y < 335) {
        this.estado = "creditos";
      }
    }
    // Botón volver en créditos
    else if (this.estado === "creditos") {
      if (x > 350 && x < 450 && y > 345 && y < 370) {
        this.estado = "menu";
      }
    }
    // Botón volver en instrucciones
    else if (this.estado === "instrucciones") {
      if (x > 690 && x < 770 && y > 360 && y < 380) {
        this.estado = "menu";
      }
    }
    // Jugando
    else if (this.estado === "jugando") {
      // Si está corriendo la cuenta regresiva de 3 segundos, ignoramos clics
      if (this.esperando) {
        return;
      }

      let botonTocado = this.computadora.verificarClic(x, y);

      if (botonTocado !== -1) {
        this.jugador.registrarEleccion(botonTocado);

        if (this.jugador.compararElecciones(this.computadora.secuencia) == false) {
          this.intentos--;
          this.mensajeVidas = "¡Error! tenes " + this.intentos + " vidas";
          this.jugador.reiniciar();

          if (this.intentos <= 0) {
            this.estado = "perdiste";
          } else {
            this.iniciarEspera("repetir");
          }
        } else if (this.jugador.elecciones.length === this.secuencia[this.nivel]) {
          this.nivel++;
          this.jugador.reiniciar();

          if (this.nivel >= this.secuencia.length) {
            this.estado = "ganaste";
          } else {
            this.iniciarEspera("nuevoNivel");
          }
        }
      }
    }
    // Botón volver al menú en perdiste
    else if (this.estado === "perdiste") {
      if (x > 290 && x < 500 && y > 290 && y < 320) {
        this.estado = "menu";
        this.nivel = 0;
        this.intentos = 3;
        this.esperando = false;
        this.mensajeVidas = "Tenes 3 vidas";
        this.jugador.reiniciar();
        this.computadora = new Computadora();
      }
    }
    // Botón volver al menú en ganaste
    else if (this.estado === "ganaste") {
      if (x > 290 && x < 500 && y > 290 && y < 320) {
        this.estado = "menu";
        this.nivel = 0;
        this.intentos = 3;
        this.esperando = false;
        this.mensajeVidas = "Tenes 3 vidas";
        this.jugador.reiniciar();
        this.computadora = new Computadora();
      }
    }
  }
}
