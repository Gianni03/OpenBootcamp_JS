const miFuncion = val => {
  if(typeof val === "number"){
    return 2 * val
  }
  // return false
  throw new Error("El valor debe ser un numero")
}

console.log(miFuncion(2));
console.log(miFuncion(6));
// const elDoble = console.log(miFuncion("ala"));

const numero = 4
try{
  // codigo que puede fallar
console.log("esta ejecutandose correctamente");
const doble = miFuncion(numero);
console.log(doble);

} catch(e){
  // si falla ejecutar esto
  console.log("no es correcto!!!ERROR");
  console.log(e);
} finally {
  console.log("Esto se ejecuta siempre");
}

// internalError, syntaxError, TypeError, RangeError, ReferenceError
