// Función para estirar el fondo y efecto parallax
function FondoP() {
  //Encadenado de imagenes para no perder la forma
  image(fondo, fondox, 0, 800, 600);
  image(fondo, fondox + 780, 0, 800, 600);
  image(fondo, fondox + 1560, 0, 800, 600);
  image(fondo, fondox + 2340, 0, 800, 600);
  image(fondo, fondox + 3120, 0, 800, 600);
  image(fondo, fondox + 3900, 0, 800, 600);
  fondox -= 0.5;
  
  //Animacion de Nubes
  image(Nube, nubex, -20, 200, 130);
  image(Nube, nubex2, 20, 200, 130);

  nubex = moverNube(nubex, 2, -300);
  nubex2 = moverNube(nubex2, 2, -300);
}
// Funcion para Reiniciar la animacion
function keyPressed() {
  if (key === 'r' || key === 'R') {
    estado = 0;
    Logoy = -300;
    Apuradox = -100;
    caminarx = 200;
    f = r = p = 0;
    tempo = millis();
    tempoGlobal = millis();
  }
}

//Funcion con retorno, si el tiempo que lleva pasado, cumple con el tiempo deseado, devolver true o false.
function pasaronMilisegundos(tiempoRegistrado, limite) {
  return (millis() - tiempoRegistrado >= limite);
}

//

//Funcion con parametros que permite loopear las nubes
function moverNube(x, velocidad, limite) {
  x -= velocidad;
  if (x <= limite) {
    x = 800;
  }
  return x; // Retorna la nueva posición osea 800
}
