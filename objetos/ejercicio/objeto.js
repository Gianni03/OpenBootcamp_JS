// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// - Crea una nueva instancia de "Estudiante"
// - Haz la llamada al método obtenDatos


class Estudiante {
  
  constructor(nombre, asig1, asig2, asig3){
    this.nombre = nombre
    this.asig1 = asig1
    this.asig2 = asig2
    this.asig3 = asig3
  }
  getDatos(){
    return console.log(`El estudiante ${this.nombre} esta realizando los cursos de ${this.asig1}, ${this.asig2} y ${this.asig3}`)
  }
  
}


const estudiante1 = new Estudiante("Gianni","JavaScript","HTML","CSS");
console.log(estudiante1)
estudiante1.getDatos()

const estudiante2 = new Estudiante("Astor","Matemáticas","Lengua","Geografía")
estudiante2.getDatos()