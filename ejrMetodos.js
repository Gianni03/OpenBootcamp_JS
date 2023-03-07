//  Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const mercado = ["cerveza", "chorizo", "coliflor", "aceitunas", "sal"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
mercado.push("aceite de girasol");
console.log(mercado)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
mercado.splice(5,1);
console.log(mercado);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
  {titulo: "Matrix",director: "Watchovsky",fecha: 2001},
  {titulo: "fight club", director: "Fincher",fecha: 2004},
  {titulo:"toc toc",director: "de la Iglesia",fecha:2018}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newMovies = peliculas.filter(obj => obj.fecha > 2010);
console.log(newMovies);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((val,i) => `${i +1} Sr ${val.director}`);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(val => val.titulo);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const info = directores.concat(titulos);
console.log(info);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const info2 = [...directores,...titulos];
console.log(info2);