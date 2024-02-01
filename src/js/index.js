
console.log("document")
const boton = document.querySelector(".btn-plataforma");
console.log(boton);
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
console.log(elementoPlataformas);
boton.addEventListener("click", () => {    
elementoPlataformas.classList.toggle("ativo");


});