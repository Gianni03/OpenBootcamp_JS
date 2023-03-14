class Persona {
  nombre;
  edad;
  isDeveloper;

  constructor(nombre,edad,isDeveloper){
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo(){
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
  }
}

const persona_1 = new Persona("Gianni", 42, true);
console.log(persona_1)

persona_1.saludo();

let numero = 40;
console.log(typeof numero);

let persona_2 = new Persona("Belén", 43, false);
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona);

