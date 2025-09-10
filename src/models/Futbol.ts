import { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";

export class Futbol extends Deporte {
  constructor() {
    super("Futbol", 11);
  }
  validar(equipo: Equipo): boolean {
    if (equipo.cantidad !== this.maxPorEquipo) {
      console.log(
        `${equipo.nombre} no es valido para este deporte ${this.nombre}.Se requieren exactamente ${this.maxPorEquipo} jugadores.`
      );
      return false;
    }
    return true;
  }
}
