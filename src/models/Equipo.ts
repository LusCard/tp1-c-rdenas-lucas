import type { ICompetidor } from "../interfaces/ICompetidor";
import type { Jugador } from "./Jugador";
import { Deporte } from "./Deporte";

export class Equipo implements ICompetidor {
  nombre: string;
  private integrantes: Jugador[];
  private deporte: Deporte;

  constructor(nombre: string, deporte: Deporte) {
    this.nombre = nombre;
    this.integrantes = [];
    this.deporte = deporte;
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

  get deporteDeEquipo(): Deporte {
    return this.deporte;
  }
}
