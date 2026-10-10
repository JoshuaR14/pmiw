function reiniciar() {
  estado = 0;
  tiempo = 0;
  sonidoSonado = false;
  textAlign(LEFT, BASELINE);
  if (grito.isPlaying()) {
    grito.stop();
  }
}
