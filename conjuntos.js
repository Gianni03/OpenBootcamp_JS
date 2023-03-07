// EJ-1 
// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const familia = ["Gianni", "Belen", "Astor", "Milan"];
const setNombres = new Set(familia);
console.log(setNombres);
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setNombres.add("Gianni");
console.log(setNombres);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setNombres.add("Javascript")
console.log(setNombres);