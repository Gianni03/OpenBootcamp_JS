const a = 4;
const b = 8;

console.log(a*b);
console.log("Hola");

const p = document.getElementById("parrafo");
console.log(p);

const inputForm = document.getElementById("form");
console.log(form);

inputForm.addEventListener("submit", (e)=>{
  console.log(e);
  e.preventDefault()
});


const htexto = document.getElementById("h-texto");
console.log(htexto)

htexto.addEventListener("cambioTexto", evento => {
  console.log(evento.detail);
  htexto.innerText = evento.detail.texto;
  htexto.style.color = evento.detail.color;
});

function cambiarTexto(newText, color){
  const evento = new CustomEvent("cambioTexto", {
    detail: {
      texto: newText,
      color
    }
  });
  htexto.dispatchEvent(evento);
}



// JQuery
// $(selector).accion()
// $('li').hide();
$(document).ready(()=>{

  $(".btn-hide").click(()=>{
    console.log("Ocultar");
    // $("h3").hide()
    $("h3").fadeOut()
  })
  $(".btn-show").click(()=>{
    
    // $("h3").show()
    $("h3").fadeIn()
  })
  $("li").dblclick(()=>{
    $("h3").css({color: "red"})
  })


  $(".elemNuevo").click(()=>{
    $("ul").prepend("<li>opaaa</li>")
  })

  $("li").mouseenter((elem)=>{
    elem.target.style.color = "blue"
  })

  $("li").mouseleave(elem =>{
    elem.target.style.color = "black"
  })
})



const boton = document.querySelector("#btn");
console.log(boton)


boton.addEventListener("click", ()=>{
  console.log("click");
  // alert("Has hecho click");
  // confirm("Deseas continuar?") && console.log("OK");
  confirm("Deseas continuar?") ? console.log("OK"): console.log("No!");
  
});

const infoBtn = document.getElementById("info");
infoBtn.addEventListener("click", ()=>{
  const nombre = prompt("Cual es tu nombre?");
  if(nombre){
    console.log("tu nombre es " + nombre)
  }else {
    console.log("ingresa tu nombre")
  }
})

const lista = [
  {
  nombre: "Gianni",
  edad: 42
},
  {
  nombre: "Julen",
  edad: 25
},
  {
  nombre: "Amaya",
  edad: 32
}]

console.table(lista)