const array = [1,5,6,2,7,12,8,92];

const array2 = array.map((val)=> val * 2);

console.log(array2);

const dobleDelValor = valor => {
  valor * 2
}

// carga y sobrecarga de funciones

function saludar(){
  hola()
}
function hola(){
  console.log("soy la funcion hola")
}

saludar()


function recursiva(){
  recursiva()
}
// esto genera una sobrecarga - stackOverflow
