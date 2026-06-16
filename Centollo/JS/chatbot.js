// CREAR CHATBOT AUTOMATICAMENTE


document.body.insertAdjacentHTML("beforeend",`


<button class="chatbot-btn" onclick="abrirChat()">
🦀
</button>



<div class="chatbot" id="chatbot">


<div class="chat-header">

El Centollo 🦀

<span class="cerrar-chat" onclick="cerrarChat()">×</span>

</div>



<div class="chat-body" id="chatBody">

<div class="bot">

¡Hola! Soy el asistente de El Centollo 🦀  
¿En qué puedo ayudarte?

</div>

<div class="opciones-chat">


<button onclick="preguntaRapida('menu')">
🍽️ Ver menú
</button>


<button onclick="preguntaRapida('reserva')">
📅 Reservar mesa
</button>


<button onclick="preguntaRapida('ubicacion')">
📍 Ubicación
</button>


<button onclick="preguntaRapida('horario')">
🕒 Horarios
</button>


<button onclick="preguntaRapida('contacto')">
📞 Contacto
</button>


</div>

</div>



<div class="chat-input">

<input 
id="mensaje"
placeholder="Escribe tu pregunta..."
>


<button onclick="enviarMensaje()">
➤
</button>


</div>


</div>



`);





function abrirChat(){


document.getElementById("chatbot").style.display="flex";


}



function cerrarChat(){


document.getElementById("chatbot").style.display="none";


}





function enviarMensaje(){


let input=document.getElementById("mensaje");


let texto=input.value.toLowerCase();


if(texto==="") return;



mostrarUsuario(input.value);



let respuesta=buscarRespuesta(texto);



setTimeout(()=>{


mostrarBot(respuesta);


},500);



input.value="";


}





function mostrarUsuario(texto){


let chat=document.getElementById("chatBody");


chat.innerHTML+=`

<div class="usuario">
${texto}
</div>

`;

chat.scrollTop=chat.scrollHeight;


}





function mostrarBot(texto){


let chat=document.getElementById("chatBody");


chat.innerHTML+=`

<div class="bot">
${texto}
</div>

`;

chat.scrollTop=chat.scrollHeight;


}






function buscarRespuesta(pregunta){



if(pregunta.includes("horario") || pregunta.includes("hora"))

return "Nuestro horario es de lunes a sábado de 8:00 a 14:30 horas. 🕒";




if(pregunta.includes("ubicacion") || pregunta.includes("direccion"))

return "Estamos ubicados en Carrera 1 #93-50, Chicó Alto, Bogotá 📍";




if(pregunta.includes("reserva"))

return "Puedes reservar una mesa desde nuestra sección Reservas 🍽️";




if(pregunta.includes("menu") || pregunta.includes("comida"))

return "Tenemos pescados, mariscos, centollo, langosta y platos especiales del mar 🦀";




if(pregunta.includes("precio") || pregunta.includes("valor"))

return "Nuestros precios dependen del plato seleccionado. Puedes revisar nuestro menú.";





if(pregunta.includes("centollo"))

return "El centollo es nuestra especialidad: un crustáceo fresco preparado con técnicas tradicionales 🦀";





if(pregunta.includes("domicilio"))

return "Actualmente puedes comunicarte con nosotros para consultar disponibilidad de servicio.";





if(pregunta.includes("contacto") || pregunta.includes("telefono"))

return "Puedes contactarnos al Tel: (57) 316 690 0508 📞";





if(pregunta.includes("pago"))

return "Aceptamos diferentes métodos de pago en nuestro restaurante 💳";





if(pregunta.includes("gracias"))

return "¡Gracias por visitarnos! Esperamos verte pronto en El Centollo 🦀";





return "No entendí tu pregunta 😅. Puedes preguntarme por menú, reservas, horarios, ubicación o platos.";

}
function preguntaRapida(texto){


mostrarUsuario(texto);



let respuesta = buscarRespuesta(texto);



setTimeout(()=>{


mostrarBot(respuesta);


},400);



}   