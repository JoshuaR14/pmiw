class Jugador {

  constructor() { //crea el arreglo para guardar las eleccione del jugador
    this.elecciones = [];
  }

  registrarEleccion(color) { // agrega el color que toco el jugador en el arreglo
    this.elecciones.push(color);
  }

//compara boton uno por uno, si este es igual al de la secuencia, es true y se siguen al otro boton
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
