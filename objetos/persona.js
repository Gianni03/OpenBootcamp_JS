class Persona {
  // Privado -> # (privado, solo se accede desde dentro de la clase)
  #nombre
  #edad
  

  // protejidas -> _
  _isDeveloper = true;

  constructor(nombre,edad){
    this.#nombre = nombre;
    this.#edad = edad;
  }
  saludo(){
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
  }

  obtenNombre(){ // funcion getter
    return this.#nombre
  }

  #obtenEdad(){
    return this.#edad
  }
  getEdad(){
    return this.#edad
  }
  setEdad(nuevaedad){
this.#edad = nuevaedad;
  }
}

const persona_1 = new Persona("Gianni", 42);
console.log(persona_1.nombre);
persona_1.saludo();
console.log(persona_1.obtenNombre());
// console.log(persona_1.#obtenEdad())
// console.log(persona_1._isDeveloper);
// getter -> metodos que permiten obtener metodos o aaptributos privados o protegidos
// stter, nos permiten cambiar el valor de algun atributo protegido o privado
const edad = persona_1.getEdad()
console.log(edad)

persona_1.setEdad(34);
console.log(persona_1.getEdad());
