import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";
import { Torneo } from "./models/Torneo";

console.log("--- INICIO DE PRUEBAS ---");

// 1. Creación de deportes
const futbol = new Futbol();
const basquet = new Basquet();

console.log("\nDeportes creados:", futbol.nombre, basquet.nombre);

// 2. Creación de jugadores de fútbol
const jugadoresFutbol1 = [
  new Jugador("f1", "Leo Messi", 38),
  new Jugador("f2", "Cristiano Ronaldo", 40),
  new Jugador("f3", "Kylian Mbappé", 26),
  new Jugador("f4", "Neymar Jr", 33),
  new Jugador("f5", "Kevin De Bruyne", 34),
  new Jugador("f6", "Erling Haaland", 25),
  new Jugador("f7", "Vinícius Júnior", 25),
  new Jugador("f8", "Jude Bellingham", 22),
  new Jugador("f9", "Robert Lewandowski", 37),
  new Jugador("f10", "Mohamed Salah", 33),
  new Jugador("f11", "Harry Kane", 32),
];

const jugadoresFutbol2 = [
  new Jugador("f12", "Manuel Neuer", 39),
  new Jugador("f13", "Sergio Ramos", 39),
  new Jugador("f14", "Virgil van Dijk", 34),
  new Jugador("f15", "Joshua Kimmich", 30),
  new Jugador("f16", "Luka Modric", 40),
  new Jugador("f17", "Toni Kroos", 35),
  new Jugador("f18", "Sadio Mané", 33),
  new Jugador("f19", "Karim Benzema", 38),
  new Jugador("f20", "Romelu Lukaku", 32),
  new Jugador("f21", "Son Heung-min", 33),
  new Jugador("f22", "Antoine Griezmann", 34),
];

// 3. Creación de equipos de fútbol
const equipoFutbol1 = new Equipo("Barcelona FC", futbol);
jugadoresFutbol1.forEach((j) => equipoFutbol1.agregarJugador(j));

const equipoFutbol2 = new Equipo("Real Madrid", futbol);
jugadoresFutbol2.forEach((j) => equipoFutbol2.agregarJugador(j));

console.log(
  `\nEquipos de fútbol creados: ${equipoFutbol1.nombre} (jugadores: ${equipoFutbol1.cantidad}) y ${equipoFutbol2.nombre} (jugadores: ${equipoFutbol2.cantidad})`
);

// 4. Creación de jugadores de básquet
const jugadoresBasquet1 = [
  new Jugador("b1", "LeBron James", 41),
  new Jugador("b2", "Stephen Curry", 37),
  new Jugador("b3", "Kevin Durant", 37),
  new Jugador("b4", "Nikola Jokic", 30),
  new Jugador("b5", "Giannis Antetokounmpo", 31),
];

const jugadoresBasquet2 = [
  new Jugador("b6", "Luka Doncic", 26),
  new Jugador("b7", "Kawhi Leonard", 34),
  new Jugador("b8", "Joel Embiid", 31),
  new Jugador("b9", "Damian Lillard", 35),
  new Jugador("b10", "Jayson Tatum", 27),
];

// 5. Creación de equipos de básquet
const equipoBasquet1 = new Equipo("LA Lakers", basquet);
jugadoresBasquet1.forEach((j) => equipoBasquet1.agregarJugador(j));

const equipoBasquet2 = new Equipo("Boston Celtics", basquet);
jugadoresBasquet2.forEach((j) => equipoBasquet2.agregarJugador(j));

console.log(
  `Equipos de básquet creados: ${equipoBasquet1.nombre} (jugadores: ${equipoBasquet1.cantidad}) y ${equipoBasquet2.nombre} (jugadores: ${equipoBasquet2.cantidad})`
);

// 6. Demostración de polimorfismo con validar() y control de cupos
console.log("\n--- DEMOSTRANDO POLIMORFISMO Y VALIDACIONES ---");

const equipoFutbolInvalido = new Equipo("Equi_Fut_Inv", futbol);
equipoFutbolInvalido.agregarJugador(new Jugador("i1", "Jugador", 25));

console.log(`\nValidando equipo de fútbol con solo 1 jugador:`);
futbol.validar(equipoFutbolInvalido); // Debería fallar

console.log("\nValidando equipo de fútbol válido:");
futbol.validar(equipoFutbol1); // Debería pasar

console.log("\nValidando equipo de básquet válido:");
basquet.validar(equipoBasquet1); // Debería pasar

// 7. Creación de partidos
console.log("\n--- CREANDO Y JUGANDO PARTIDOS ---");

const torneo = new Torneo("t1", "Liga de Campeones");
console.log(`Torneo creado: ${torneo.nombre}`);

const partidoFutbol = new Partido("p1", futbol, equipoFutbol1, equipoFutbol2);
torneo.programarPartido(partidoFutbol);

const partidoBasquet = new Partido(
  "p2",
  basquet,
  equipoBasquet1,
  equipoBasquet2
);
torneo.programarPartido(partidoBasquet);

// 8. Intentar crear un partido con el mismo equipo
try {
  const partidoInvalido = new Partido(
    "pi",
    futbol,
    equipoFutbol1,
    equipoFutbol1
  );
  partidoInvalido;
} catch (error: any) {
  console.log(`Validación exitosa: ${error.message}`);
}

// 9. Jugar los partidos
console.log("\nJugando partido de fútbol...");
partidoFutbol.jugar();
console.log(partidoFutbol.toString());

console.log("\nJugando partido de básquet...");
partidoBasquet.jugar();
console.log(partidoBasquet.toString());

// 10. Listar partidos del torneo
console.log("\n--- PARTIDOS DEL TORNEO ---");
torneo.listarPartidos().forEach((p) => console.log(p.toString()));

console.log('\nBuscando partido con ID "p1":');
const partidoEncontrado = torneo.buscarPartido("p1");
if (partidoEncontrado) {
  console.log("Partido encontrado:", partidoEncontrado.toString());
}

console.log("\nIntentando jugar el mismo partido de nuevo:");
partidoFutbol.jugar();

console.log("\n--- FIN DE PRUEBAS ---");
