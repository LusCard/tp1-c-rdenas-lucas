import type { ICompetidor } from "../interfaces/ICompetidor";
import type { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {
  nombre: string;
  private integrantes: Jugador[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.integrantes = [];
  }

  agregarJugador(jugador: Jugador) {
    this.integrantes.push(jugador);
  }

  listarIntegrantes(): string[] {
    return this.integrantes.map((jugador) => jugador.nombre);
  }

  get cantidad(): number {
    return this.integrantes.length;
  }
}
