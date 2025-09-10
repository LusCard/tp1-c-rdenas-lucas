import type { IIdentificable } from "../interfaces/IIdentificable";
import { Partido } from "./Partido";

export class Torneo implements IIdentificable {
  public id: string;
  public nombre: string;
  public partidos: Partido[];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.partidos = [];
  }
  public programarPartido(partido: Partido): void {
    this.partidos.push(partido);
  }

  public listarPartidos(): Partido[] {
    return this.partidos;
  }

  public buscarPartido(id: string): Partido | undefined {
    return this.partidos.find((p) => p.id === id);
  }
  public mostrarDetalles(): string {
    return `Torneo: ${this.nombre} (ID: ${this.id})`;
  }
}
