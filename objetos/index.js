const persona = {
  nombre: "Gianni",
  edad: 42,
  isDeveloper: true,
  saludo: function(){
    console.log("Hola")
  }
}

// console.log(persona);
persona.saludo()

const otraPersona = {
  nombre: "Astor",
  edad: 13,
  isDeveloper: false,
  saludo: function(){
    console.log("Hola")
  }
}

// factory function
const creaPersona = (nombre,edad,isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
    saludo: function(){
      console.log("Hello")
    }
  }
}

const nuevaPersona = creaPersona("Juan", 23, true);
console.log(nuevaPersona)
const nuevaPersona2 = creaPersona("Maria", 12, false);
console.log(nuevaPersona2)