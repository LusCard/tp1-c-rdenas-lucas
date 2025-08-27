export class Jugador {
  id: number;
  nombre: string;
  edad: number;
  posicion?: string;

  mostrarDatos() {
    console.log(`ID: ${this.id}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    if (this.posicion) {
      console.log(`Posición: ${this.posicion}`);
    }
  }
  constructor(id: number, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    if (posicion) {
      this.posicion = posicion;
    }
  }
}
