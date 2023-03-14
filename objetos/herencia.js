class Persona {

    _nombre
    _edad
    constructor(nombre,edad){
      this._nombre = nombre;
      this._edad = edad;

    }
    saludo(){
      console.log(`Hola mi nombre es ${this._nombre} y tengo ${this._edad} años`)
    }

    
    
  }

  // herencia
  class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
      super(nombre, edad)
      this.lenguaje = lenguaje
    }
    // saludo(){ //override
    //   console.log("Hola, soy desarrollador")
    // }

    saludo(){ 
      super.saludo()
      console.log(`y soy desarrollador de ${this.lenguaje}`)
    }
  }
  const nuevoDev = new Desarrollador("Gianni", 42, "JavaScript");
  console.log(nuevoDev);
  nuevoDev.saludo();

  // polimorfismo
