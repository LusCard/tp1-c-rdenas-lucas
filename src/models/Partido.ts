import { Resultado } from "./Resultado";
import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Partido {
  private id: string;
  private deporte: Deporte;
  private equipoLocal: Equipo;
  private equipoVisitante: Equipo;
  private resultado: Resultado | null;

  constructor(
    id: string,
    deporte: Deporte,
    equipoLocal: Equipo,
    equipoVisitante: Equipo
  ) {
    if (equipoLocal === equipoVisitante) {
      throw new Error("Un equipo no puede jugar contra si mismo!!!");
    }
    if (
      equipoLocal.deporteDeEquipo !== deporte ||
      equipoVisitante.deporteDeEquipo !== deporte
    ) {
      throw new Error("Los equipos no pertenecen al deporte del partido!!!");
    }
    this.id = id;
    this.deporte = deporte;
    this.equipoLocal = equipoLocal;
    this.equipoVisitante = equipoVisitante;
    this.resultado = null;
  }

  public setResultado(golesLocal: number, golesVisitante: number): void {
    this.resultado = new Resultado(golesLocal, golesVisitante);
  }

  public getGanador(): string {
    if (this.resultado) {
      return this.resultado.getGanador();
    }
    return "El partido aún no ha terminado.";
  }

  public getDetallesPartido(): string {
    return `Partido: ${this.id}
Deporte: ${this.deporte}
Equipo Local: ${this.equipoLocal.nombre}
Equipo Visitante: ${this.equipoVisitante.nombre}
Resultado: ${
      this.resultado
        ? this.resultado.toString()
        : "El partido aún no ha terminado."
    }`;
  }
}
