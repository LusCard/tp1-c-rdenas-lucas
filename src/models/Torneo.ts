import { Partido } from "./Partido";

export class Torneo {
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
    return this.partidos.find((partido) => partido.id === id);
  }
}
