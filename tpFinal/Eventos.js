function Pantallas(){
  
}

function reiniciar() {
  estado = 0;
  tiempo = 0;
  ejeY = 600;
  HomeY = 1100;
  sonidoSonado = false;
  textAlign(LEFT, BASELINE);
  if (grito.isPlaying()) {
    grito.stop();
  }
}
