// Función dinámica para el botón de guardar (marcador) de cada tarjeta
function alternarFavorito(boton) {
    boton.classList.toggle('active');
    const icono = boton.querySelector('i');
    
    if (boton.classList.contains('active')) {
        icono.classList.replace('fa-regular', 'fa-solid');
    } else {
        icono.classList.replace('fa-solid', 'fa-regular');
    }
}