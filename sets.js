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
