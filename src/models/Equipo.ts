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

  agregarJugador(jugador: Jugador): boolean {
    if (this.integrantes.some((j) => j.id === jugador.id)) {
      console.log(`Jugador con id ${jugador.id} ya existe en el equipo`);
      return false;
    }
    this.integrantes.push(jugador);
    return true;
  }

  listarIntegrantes(): string[] {
    return this.integrantes.map((jugador) => jugador.mostrarDatos());
  }

  get cantidad(): number {
    return this.integrantes.length;
  }

  get deporteDeEquipo(): Deporte {
    return this.deporte;
  }
  public tieneJugador(id: string): boolean {
    return this.integrantes.some((j) => j.id === id);
  }
}
