// Mensaje de bienvenida en la página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Centro de Adopción cargado correctamente 🐶🐱");
});

// Botones de adopción
const botonesAdopcion = document.querySelectorAll(".btn-adoptar");

botonesAdopcion.forEach(boton => {
    boton.addEventListener("click", () => {
        alert("¡Gracias por querer adoptar! 🐾 Pronto nos comunicaremos contigo.");
    });
});

// Año automático en el pie de página
const año = document.querySelector("#año");

if (año) {
    año.textContent = new Date().getFullYear();
}