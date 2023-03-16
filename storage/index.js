
let nombre = "Gianni";
let apellido = "Pasquinelli";

const persona = {nombre : nombre, apellido: apellido }

sessionStorage.setItem("user", JSON.stringify(persona))
localStorage.setItem("user",JSON.stringify(persona))

document.cookie = JSON.parse(localStorage.getItem("user")) + new Date(2023,3,1).toUTCString();
document.cookie = "usuario = user; expires=" + new Date(2023,3,1).toUTCString();
console.log(document.cookie);