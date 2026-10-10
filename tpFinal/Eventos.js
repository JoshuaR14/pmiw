// Función para restablecer todas las variables del juego
function reiniciar() {
  estado = 0;
  tiempo = 0;
  sonidoSonado = false;
  if (grito.isPlaying()) {
    grito.stop();
  }
}
