class boton {
  constructor(x, y, ancho, alto, colorBoton) {
    this.ejex = x;
    this.ejey = y;
    this.ancho = ancho;
    this.alto = alto;
    this.color = colorBoton;
    
    //El boton viene apagado
    this.encendido = false;
    this.tiempoEncendido = 0;
}

dibujar(){
  if (this.encendido){
    fill(this.color);
    rect(this.ejex, this.ejey, this.ancho, this.alto, 5)
    
  }else{
  noFill();
      noStroke();
      rect(this.ejex, this.ejey, this.ancho, this.alto, 5);
    }
}
}
