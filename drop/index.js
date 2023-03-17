const parrafos = document.querySelectorAll(".parrafo")
console.log(parrafos)

const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", event =>{
    console.log("drag");
    console.log("estoy arrastrando el párrafo " + parrafo.innerText )
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id", parrafo.id)
    const elemFantasma = document.querySelector(".imagen-fantasma")
    event.dataTransfer.setDragImage(elemFantasma,0,0)
  })

  parrafo.addEventListener("dragend", ()=>{
    console.log("termine de arrastrar ")
    parrafo.classList.remove("dragging")
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", (e)=>{
    e.preventDefault()
    console.log("drag over")
    e.dataTransfer.dropEffect = "link"
  })

  seccion.addEventListener("drop", (e) => {
    console.log("drop")
    const idParrafo = e.dataTransfer.getData("id")
    console.log(idParrafo)
    const parrafo = document.getElementById(idParrafo)
    seccion.appendChild(parrafo)
  })
})
