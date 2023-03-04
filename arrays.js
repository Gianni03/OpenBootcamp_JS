// Strings

// let str = "cadena de texto";
// console.log(str);



// Métodos más comunes

let str = "Hola soy un string";

console.log(str.length);

// obtener partes de string
// slice() substring()

let sliceStr = str.slice(5,11);
console.log(sliceStr);

let subStr = str.substring(5,11);
console.log(subStr);

// reeplazar

let cadena = "mi nombre es Gianni";
console.log(cadena);


console.log(cadena.replace('Gianni', 'Belén'));


let textoLargo = "A mi me llegaron los 2 correos, avisando, uno para inscribirme al webinar y luego uno de los profesores aviso, que iba a subir el video, ese que te mande, pero bueno me alegro haberte ayudado";

console.log(textoLargo.replaceAll('uno', 'tres'));
console.log(textoLargo.replace(/uno/g, 'tres'));

// concatenar string

let str1 = "Soy el primer string. el";
let str2 = "Soy el segundo string.";

console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

// buscar un caracter

console.log(str1.charAt(4))
console.log(str1[4]);

console.log(str1.indexOf("el"));
console.log(str1.lastIndexOf("el"));


console.log(textoLargo.match(/uno/g));
console.log(textoLargo.includes("de"));



// Ejercicios

let nombre = "Gianni";
let apellido = "Pasquinelli";

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

let estudianteMayus = estudiante.toLowerCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toUpperCase();
console.log(estudianteMinus);

console.log(estudiante.length);

let inicial = nombre[0];
console.log(inicial);


console.log(estudiante.trim());

console.log(nombre.includes("Gianni"));