export class Resultado {
  private golesLocal: number;
  private golesVisitante: number;

  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  public getGolesLocal(): number {
    return this.golesLocal;
  }

  public getGolesVisitante(): number {
    return this.golesVisitante;
  }

  public getGanador(): string {
    if (this.golesLocal > this.golesVisitante) {
      return "Equipo Local";
    } else if (this.golesLocal < this.golesVisitante) {
      return "Equipo Visitante";
    } else {
      return "Empate";
    }
  }
}
