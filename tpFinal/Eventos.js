// Función para restablecer todas las variables del juego
function reiniciar() {
  estado = 0;
  tiempo = 0;
  sonidoSonado = false;
  textAlign(LEFT, BASELINE); // Restablece la alineación global de los textos
  if (grito.isPlaying()) {
    grito.stop();
  }
}
