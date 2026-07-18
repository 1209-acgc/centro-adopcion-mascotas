// Archivo JavaScript para futuras funcionalidades de KIZUNA

// Scroll suave para los enlaces del menú

document.querySelectorAll('a').forEach(link => {

link.addEventListener('click', function(e){

const destino = this.getAttribute('href');

if(destino.startsWith("#")){

e.preventDefault();

document.querySelector(destino).scrollIntoView({

behavior:'smooth'

});

}

});

});

// Mensaje del formulario

const formularios = document.querySelectorAll("form");

formularios.forEach(form => {

form.addEventListener("submit", function(e){

e.preventDefault();

alert("✅ Gracias por comunicarte con KIZUNA. Hemos recibido tu información.");

form.reset();

});

});