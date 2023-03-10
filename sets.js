// sets o conjuntos, listas

const array = [1,2,3,4,5,6,1,2,5,2,2,3];
const miSet = new Set(array);
console.log(array);
console.log(miSet);

// set es un conjunto donde no hay valores duplicados
// .add() delete()
miSet.add(9);
console.log(miSet);
miSet.add(10);
console.log(miSet);

miSet.delete(10)
console.log(miSet);

// miSet.clear()
// console.log(miSet);
// clear() elimina todos los elementos, deja un set vacio

console.log(miSet.has(4));
console.log(miSet.size);

miSet.forEach(val => {
  console.log(val)
});
const itMiSet = miSet.values();
console.log(itMiSet);

const setToArr = [...miSet];
console.log(setToArr);
// ****************************************************************


// Objetos
const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "González",
  isDeveloper: true,
  libros_favoritos: ["el método", "El código da vinci"],
  "4-juegos": [1,2,3,4]
}

console.log(obj.id);
console.log(obj["4-juegos"])

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Marcelo";
console.log(obj2.nombre);
console.log(obj.nombre);

const obj3 = {...obj};

obj.nombre = "Gianni";
console.log(obj3.nombre);
console.log(obj.nombre);


// *************************************

const listaPeliculas = [
  {titulo: "Lo que el viento se llevo", fecha: 1939},
  {titulo: "Titanic", fecha: 1997},
  {titulo: "Moana", fecha: 2016},
  {titulo: "El efecto mariposa", fecha: 2004},
  {titulo: "TED", fecha: 2012}
];
console.log(listaPeliculas);

