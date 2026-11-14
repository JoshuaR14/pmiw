class Boton {
  constructor(x, y, lx, ly, ancho, alto, colorBoton) {
    this.ejex = x;
    this.ejey = y;
    this.ancho = ancho;
    this.alto = alto;
    this.color = colorBoton;
    
    this.luzX = lx;
    this.luzY = ly;
    
    //El boton viene apagado
    this.encendido = false;
    this.tiempoEncendido = 0;
}

encender(){
  this.encendido = true;
  this.tiempoEncendido = millis();
}

dibujar(){
  if (this.encendido){
    fill(this.color);
    rect(this.luzX, this.luzY, this.ancho, this.alto, 5)
    
    if (millis() - this.tiempoEncendido > 300) {
        this.encendido = false; // Se apaga solo
      }
    
 } else {
    fill(20, 45, 25);
    stroke(60, 120, 70);
    rect(this.luzX, this.luzY, this.ancho, this.alto, 5);
    noStroke();
  }
}
esClickeado(mx, my){
  if (mx > this.ejex && mx< this.ejex + this.ancho && my > this.ejey && my < this.ejey + this.alto){
  return true;
  }else{
    return false;
  }
}
}
