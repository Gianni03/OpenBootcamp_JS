// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

function factorialFor(numero){
  for (let i = numero - 1; i > 0; i--) {
    numero *= i;
    
  }
  console.log(numero);
  return numero
}
factorialFor(10);

// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
function factorialWhile(num){
  let factorial = num;
  while (num > 1){
    num--;
    factorial *= num;
  }
  return factorial
}
factorialWhile(10);


// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
function factorialSwich(num){
  while(num !== 0 ){
    return num * factorialSwich(num -1 );
    break;
  }

}


