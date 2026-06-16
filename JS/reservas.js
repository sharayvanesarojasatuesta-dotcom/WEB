const fecha=document.getElementById("fecha");


let hoy=new Date().toISOString().split("T")[0];


fecha.min=hoy;



const formulario=document.querySelector(".formulario-reserva");


formulario.addEventListener("submit",(e)=>{


e.preventDefault();



alert("🦀 Reserva enviada correctamente.\n¡Te esperamos en El Centollo!");



formulario.reset();



});