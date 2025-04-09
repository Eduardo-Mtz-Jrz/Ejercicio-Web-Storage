let encabezado1 = document.getElementById("Saludo");

if (localStorage.getItem("nombre") != null){
     let nombre = localStorage.getItem("nombre"); 
     encabezado1.innerText = `Hola, ${nombre} bienvenido/a de nuevo`;
 }

 btnEliminar.addEventListener("click", function(event) {
    localStorage.removeItem("nombre");
    encabezado1.innerText = `Por favor ve al Index e ingresa tu nombre`;
})