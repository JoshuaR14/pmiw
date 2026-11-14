class Jugador {

  constructor() { //crea el arreglo para guardar las eleccione del jugador
    this.elecciones = [];
  }

  registrarEleccion(color) { // agrega el color que toco el jugador en el arreglo
    this.elecciones.push(color);
  }

  compararElecciones(secuencia) {
    let posicion = this.elecciones.length - 1;

    if (this.elecciones[posicion] === secuencia.obtenerPaso(posicion)) {
      return true;
    } else {
      return false;
    }
  }



  reiniciar() { // borra
    this.elecciones = [];
  }
}
