// EJ - 3
// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
const fecha = new Date()
console.log(fecha)
// - La fecha de tu nacimiento
const nacimiento = new Date(1980,10,3);
console.log(nacimiento)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const tiempo  = fecha > nacimiento;
console.log(tiempo);
const edad = (fecha - nacimiento);
console.log(edad);

// - Una variable que contenga el día de tu nacimiento
const dia = nacimiento.getDate();
console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = nacimiento.getMonth() + 1;
console.log(mes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const anio = nacimiento.getFullYear();
console.log(anio);