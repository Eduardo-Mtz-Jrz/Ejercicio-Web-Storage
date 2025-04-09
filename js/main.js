let btnGuardar = document.getElementById("btnGuardar");
let txtNombre = document.getElementById("txtNombre");

btnGuardar.addEventListener("click", function(event) {
    localStorage.setItem("nombre", txtNombre.value);
})