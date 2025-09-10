import type { IIdentificable } from "../interfaces/IIdentificable";

export class Jugador implements IIdentificable {
  public readonly id: string;
  public nombre: string;
  public edad: number;
  public posicion?: string;

  constructor(id: string, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }

  public mostrarDatos(): string {
    return `${this.nombre} (ID: ${this.id}, ${this.edad} años)`;
  }
}
