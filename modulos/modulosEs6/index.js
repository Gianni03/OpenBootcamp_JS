// import { suma, eleva, nombre } from './modules/matematicas.js';
import * as moduloMatematicas from './modules/matematicas.js'
import getAutor, {libro} from './modules/literatura.js';


const sum = moduloMatematicas.suma(4,12);
console.log(sum);

const potencia = moduloMatematicas.eleva(2,22);
console.log(potencia)

console.log(moduloMatematicas.nombre);

console.log(getAutor());
console.log(libro)