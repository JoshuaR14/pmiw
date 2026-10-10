function reiniciar() {
  estado = 0;             // Vuelve al menú principal
  tiempo = 0;             // Reinicia el contador de tiempo
  sonidoSonado = false;   // Permite que los gritos/jumpscares vuelvan a sonar
  if (grito.isPlaying()) {
    grito.stop();         // Detiene el sonido si seguía sonando
  }
}
