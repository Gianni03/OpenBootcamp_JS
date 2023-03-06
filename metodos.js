

let array = [1, 2, "hola", "array", false];
console.log(array);
console.log(array[2]);

array.push("final");
console.log(array);

array.unshift("principio");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);


// eliminar y/o modificar elemtos con splice(x, y, z)
let arr = [1, 2, 3, 4, 5, 6];
// eliminar splice(indice, catidad de valores a eliminar)
arr.splice(2, 1);
console.log(arr);

arr.splice(2, 0, "hola");
// agregar splice(indice, 0, nuevo valor)
console.log(arr);

arr.splice(2, 1, 3 );
// modificar valor splice(indice, 1, valor )
console.log(arr);


// unir arrays concat()
const lista1 = ["hola", 2, false];
const lista2 = ["chau", 8, true];
console.log(lista1.concat(lista2));
const lista3 = lista1.concat(lista2);
console.log(lista3);

// factor de propagación
console.log(...lista3);
const lista4 = [...lista1,...lista2];
console.log(lista4);

// ERROR!!! Mal el concepto del spread operator
const lista5 = [lista1, lista2];
console.log(lista5);

// obtener un array a partir de otro slice()
const original = ["hola",1,2,3,"adios"];
console.log(original);
console.log(original.slice(1,4));
const slice = original.slice(1,4);
console.log(slice);

console.log(original.slice(1, -1));

// iterando en listas
const iterando = ["hola", 2 ,5 ,90, false, null];

for(let i=0; i < iterando.length; i++){
  console.log(iterando[i]);
}
iterando.forEach(valor => {
  console.log(valor);
})
let suma = 0;
const nums = [2,4,45,7,23,87,2,45];
nums.forEach( valor => {
  suma += valor;
  console.log(valor);
})
console.log(suma);

// busqueda de un valor en un array find()
const busca = iterando.find(valor =>{
  if (valor === 90){
    return true
  }
})
console.log(busca);

const listaObjetos = [
  {nombre: "Gianni", edad: 42},
  {nombre: "Belen", edad:43},
  {nombre: "Astor", edad:13},
  {nombre: "Milan", edad:8},
];

const obj = listaObjetos.find(o => {
  if(o.nombre === "Astor") {
    return true
  }
})
console.log(obj);
console.log(obj.edad);

const obj2 = listaObjetos.find(o => o.nombre === "Gianni")
console.log(obj2.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Belen");
console.log(edad)




