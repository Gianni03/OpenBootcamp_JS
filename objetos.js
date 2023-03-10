// EJ - 2
// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const persona = {
  nombre: "Gianni",
  apellido: "Pasquinelli",
  edad: 42,
  altura: 179,
  esDeveloper: true,
};
// - Una variable que obtenga tu edad a partir del objeto anterior
const anios = persona.edad;
console.log(anios);
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const persona2 = {
  nombre: "Belen",
  apellido: "Cortese",
  edad: 43,
  altura: 162,
  esDeveloper: false,
};
const persona3 = {
  nombre: "Ana",
  apellido: "Cortese",
  edad: 35,
  altura: 182,
  esDeveloper: false,
};

let amigos = [persona2,persona3]

const listaPersonas = [ persona, ...amigos ];
console.log(listaPersonas);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
console.log(listaPersonas)


listaPersonas.sort((a,b)=> a.edad - b.edad);
console.log(listaPersonas)
