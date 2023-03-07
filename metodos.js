

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

// metodos avanzados map, filter, reduce
const ciudades = ["Rosario", "Roldan", "Carcaraña", "Rojas", "Fuentes"];

// a tener en cuenta, el forEach no devueve nada
const val = ciudades.forEach(v=>{console.log(v)});
console.log(val);

// map  nos da un nuevo array modificado
const conMap = ciudades.map((val, indice) =>`${indice +1} - ${val} `)
console.log(conMap);

console.log(listaObjetos);
// const mayorDeEdad = listaObjetos.filter(obj => {
//   if (obj.edad > 18){
//     return true
//   } else {
//     return false
//   }
// })
const mayorDeEdad = listaObjetos.filter(obj => obj.edad > 18); 
console.log(mayorDeEdad);
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Gianni");
console.log(nuevaLista);

const valores = [3, 56, 23, 5, 90, 100];
const sumaVal = valores.reduce((acumulado, actual, indice, original)=>{
  console.log(acumulado)
  console.log(actual)
  console.log(indice)
  console.log(original)
  return acumulado + actual
});
console.log(sumaVal);



// ordenar y comparacion de arrays
// sort()
const arrayNumeros = [2,5,9,15,1,2,0,4];
console.log(arrayNumeros);
arrayNumeros.sort((a,b)=>{
  if (a<b){
    return +1
  }else if(a>b){
    return -1
  }else {
    return 0
  }
})
console.log(arrayNumeros)

const ordenar = [4,5,3,10,0,34,2,6,35,57,23,90];
ordenar.sort((a,b)=> a - b)
console.log(ordenar);

// con objetos
console.log(listaObjetos)
listaObjetos.sort((a,b) =>{
  if(a.edad < b.edad){
    return -1
  }else if (a.edad > b.edad){
    return +1
  } else{
    return 0
  }
});
console.log(listaObjetos)


// comparar con every()

const comparo1 = [4,5,6,7,8,-1,-2,-3];
const resultado = comparo1.every(val => val > 0 )
console.log(resultado);

const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];
console.log(arr1 === arr1);
console.log(arr1 === arr2);
const comparar = (array1, array2) =>{
  if(array1.length !== array2.length) return false
  const res = array1.every((val, i)=>val === array2[i])
  return res
}

console.log(comparar(arr1,arr2));

const algunos = [3,7,2,4,9,42,7834,23,-6];
const res = algunos.some(valor => valor < 0);
console.log(res);

const existe = algunos.some( valor => valor === 90)
console.log(existe);

const existePersona = listaObjetos.some(pers => pers.nombre === "Gianni")
console.log(existePersona)


// como obtner una lista a partir de un objeto iterable 
const objIterable = "Hola soy Gianni";
console.log(objIterable[9]);

const fromArr = Array.from(objIterable);
console.log(fromArr);

const keys = comparo1.keys();
console.log(keys);
const arrKeys = Array.from(keys);
console.log(arrKeys);
