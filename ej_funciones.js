// - Una función sin parámetros que devuelva siempre "true"
function verdadero(){
  console.log(true)
}
verdadero();

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promesa = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000)
}).then(()=> console.log("Hola soy una promesa"))
.catch((reject)=> console.log("Error") );
console.log(promesa)

// - Una función generadora de índices pares automáticos

function* numerosPar(){
  let num = 1;
  while(true){
    num ++;
    if(num <= 20 && (num % 2 === 0) ) {
      yield num
    }
  }
}
let par = numerosPar();

console.log(par.next())
console.log(par.next())
console.log(par.next())
console.log(par.next())
console.log(par.next())
console.log(par.next())
console.log(par.next())

function* generate(){
  let id = 0
  while(true){
  yield id += 2
    }
  }
  
  let gen = generate();
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)