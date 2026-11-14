class Secuencia {
  
  constructor(){
  this.pasos = [];
  this.pasoActual = 0;
  this.tiempo = 0;
  this.mostrando = false;
  }
  
  //Guardo la cantidad de pasos en un array para saber el tamaña de la secuencia
  generar(cantidadPasos){
    this.pasos = [];
    for (let i = 0; i < cantidadPasos; i++){
      this.pasos.push(floor(random(4))); //genera una secuencia random del 1 al 4
    }
    
    //crea los metodos para saber el paso que se esta mostrando, el tiempo que se maneja, entre botones, turnos y la secuencia.
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
