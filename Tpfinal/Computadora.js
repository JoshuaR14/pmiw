class Computadora {
  
  //Constructor del objeto computadora
  constructor(){
    
   //Guarda en un metodo las cordenadas de los botones
    this.botones =[];
  this.botones[0] = new Boton(220, 294, 240, 165, 54, 32, color(255, 60, 60));   // Rojo
  this.botones[1] = new Boton(312, 294, 315, 165,54, 32, color(60, 140, 255));  // Azul
  this.botones[2] = new Boton(402, 294, 390, 165, 54, 32, color(60, 255, 100));  // Verde
  this.botones[3] = new Boton(490, 294, 465, 165, 54, 32, color(255, 220, 50));  // Amarillo
  
  //Crea un objeto de la clase Secuencia
  this.secuencia = new Secuencia();
  }
  
  //metodo que recibe la cantidad de pasos, para generar una secuencia de luces
  iniciarNivel(cantidadPasos) {
    this.secuencia.generar(cantidadPasos);
  }
  
  //metodo que repite y muestra nuevamente la secuencia anterior, si es que el jugador erro un intento
  repetirSecuencia() {
    this.secuencia.repetir();
  }
//Controla, actualiza y muestra las secuencia de las luces 
  actualizar() {
    this.secuencia.actualizar(this.botones);
  }
//Dibuja la compu en pantalla y genera el los botones previamente guardados en el arreglo de this.botones
  dibujar() {
    image(compu, 40, 20, 680, 360);
    for (let i = 0; i < this.botones.length; i++) {
      this.botones[i].dibujar();
    }
  }
  verificarClic(mx, my) {
    // Si la compu todavía está mostrando las luces, ignora el clic del jugador
    if (this.secuencia.mostrando) {
      return -1;
    }

    for (let i = 0; i < this.botones.length; i++) {
      if (this.botones[i].esClickeado(mx, my)) {
        sonidoboton.play();
        this.botones[i].encender();
        return i; // Devuelve 0, 1, 2 o 3 segun que boton se toco
      }
    }

    return -1; // No tocó ningún botón
  }
}
