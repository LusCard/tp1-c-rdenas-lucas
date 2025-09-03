import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";

const futbol = new Futbol();
const basquet = new Basquet();

const jugadorF1 = new Jugador(1, "Juan", 22, "Delantero");
const jugadorF2 = new Jugador(2, "Pedro", 24, "Defensor");

const jugadorB1 = new Jugador(3, "Lucas", 20, "Base");
const jugadorB2 = new Jugador(4, "Martín", 21, "Alero");

const equipoFutbol = new Equipo("Tigres", futbol);
equipoFutbol.agregarJugador(jugadorF1);
equipoFutbol.agregarJugador(jugadorF2);

const equipoBasquet = new Equipo("Águilas", basquet);
equipoBasquet.agregarJugador(jugadorB1);
equipoBasquet.agregarJugador(jugadorB2);

console.log("¿Equipo fútbol válido?", futbol.validar(equipoFutbol));
console.log("¿Equipo básquet válido?", basquet.validar(equipoBasquet));

try {
  const partidoFutbol = new Partido("P1", futbol, equipoFutbol, equipoFutbol);
} catch (e) {
  console.log("Error al crear partido de fútbol:", (e as Error).message);
}

try {
  const partidoBasquet = new Partido(
    "P2",
    basquet,
    equipoBasquet,
    equipoBasquet
  );
} catch (e) {
  console.log("Error al crear partido de básquet:", (e as Error).message);
}

const equipos = [equipoFutbol, equipoBasquet];
equipos.forEach((equipo) => {
  console.log(
    `Validación polimórfica de ${equipo.nombre}:`,
    equipo.deporteDeEquipo.validar(equipo)
  );
});
