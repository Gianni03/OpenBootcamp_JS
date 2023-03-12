function miAsync() {
  // llamada a una base de datos externa
  // puede dar algun error
}

const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);

  // si esta todo correcto
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

miPromesa
  .then(() => console.log("Se ha ejecutado correctamente"))
  .catch(() => console.log("Error"))
  .finally(() => console.log("finally siempre se ejecuta"));

// funciones generadoras
function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; //esperando hasta que se vuelva a llamar
  }
}
const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
