// funcion simple sin parametros
function saludar() {
  console.log("Hola")
}
saludar();

// funcion con parametros
function saludo(nombre) {
  console.log(`Hola ${nombre}`)
}
saludo("Gianni");

// pasando una variable en el parametro
const nom = "Belén"
function saludito(nombre) {
  console.log(`Hola ${nombre}`)
}
saludito(nom);

let persona = { nombre: "Juan", apellido: "Gonazalez"};

function saludarPersona(obj){
  console.log(`Hola ${obj.nombre} ${obj.apellido}`)
}
saludarPersona(persona);

// parametros por defecto, si no hay parametro coloca 7
function impNumero(numero = 7) {
  console.log(numero)
}
impNumero(9);

// parametros indeterminados
function imprimir(...parametros){
  console.log(parametros)
}
imprimir(1,2,3, "Hola", {id:9})

function suma(...nums){
  return (nums.reduce((a,b)=> a + b));
}
const s = suma(1,2,3,4)
console.log(s);
