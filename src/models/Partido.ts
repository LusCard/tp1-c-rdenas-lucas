import { Resultado } from "./Resultado";
import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";
import type { IIdentificable } from "../interfaces/IIdentificable";

export class Partido implements IIdentificable {
  public readonly id: string;
  private deporte: Deporte;
  private equipoLocal: Equipo;
  private equipoVisitante: Equipo;
  private resultado?: Resultado | null;

  constructor(
    id: string,
    deporte: Deporte,
    equipoLocal: Equipo,
    equipoVisitante: Equipo
  ) {
    this.id = id;
    this.deporte = deporte;
    this.equipoLocal = equipoLocal;
    this.equipoVisitante = equipoVisitante;
    this.validarEquipos();
  }
  private validarEquipos(): void {
    if (this.equipoLocal.nombre === this.equipoVisitante.nombre) {
      throw new Error(
        "El equipo local no puede ser el mismo que el visitante."
      );
    }
  }
  public jugar(): boolean {
    if (this.resultado) {
      console.log("Este partido ya se jugó");
      return false;
    }
    this.resultado = new Resultado(
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4)
    );
    return true;
  }
  public toString(): string {
    return `Partido ID: ${this.id} - ${this.equipoLocal.nombre} vs ${
      this.equipoVisitante.nombre
    } (${this.deporte.nombre})
    ${this.resultado ? this.resultado.toString() : "Pendiente"}`;
  }
}
