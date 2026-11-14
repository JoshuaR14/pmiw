class Secuencia {
  
  constructor(){
  this.pasos = [];
  this.pasoActual = 0;
  this.tiempo = 0;
  this.mostrando = false;
  }
  generar(cantidadPasos){
    this.pasos = [];
    for (let i = 0; i < cantidadPasos; i++){
      this.pasos.push(floor(random(4)));
    }
   this.pasoActual = 0;
   this.tiempo = millis();
   this.mostrando = true;
    
  }
  actualizar(botones){
    if (this.mostrando == true){
      if (millis() - this.tiempo > 700){
        if(this.pasoActual <this.pasos.length){
           let indiceBoton = this.pasos[this.pasoActual];
           botones[indiceBoton].encender();
           this.pasoActual++
           this.tiempo = millis();
        }else{
          this.mostrando = false;
     }
  }
}
}
repetir() {
    this.pasoActual = 0;
    this.tiempo = millis();
    this.mostrando = true;
  }

  obtenerPaso(indice) {
    return this.pasos[indice];
  }
}
