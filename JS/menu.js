// Array con las 12 opciones del menú
const menuData = [
    {
        id: 1,
        titulo: "Falsa mousse centollo en cucharitas",
        imagen: "../imagenes/img1.png", // <--- Cambia esto por la ruta de tu carpeta
        autor: "Berta Álvarez",
        meta: "1 Cooksnap",
        ingredientes: "huevos cocidos • palitos de cangrejo • mejillones al natural escurridos • berberechos al natural escurridos • mayonesa • nata para cocinar • sal • cucharitas comestibles",
        tiempo: "",
        porciones: ""
    },
    {
        id: 2,
        titulo: "Crema de centolla con crujiente de pan",
        imagen: "../imagenes/img2.png",
        autor: "Arianne",
        meta: "",
        ingredientes: "Centollas cocidas • Cebollas medianas • Leche entera con calcio • Maicena • Sal • Pimienta negra • Nuez moscada • Aceite de oliva virgen extra • Pan rallado tostado",
        tiempo: "50 minutos (+ tiempo de extraer la carne)",
        porciones: "8-10 Comensales"
    },
    {
        id: 3,
        titulo: "Palta rellena con salpicón de centolla",
        imagen: "../imagenes/img3.png",
        autor: "Jon Michelena",
        meta: "",
        ingredientes: "carne de centolla cocida • cebolla morada cortada en cuadritos • pimiento morrón cortado en cuadritos • apio cortado en cuadritos • cilantro picado • mayonesa • mostaza a la piedra",
        tiempo: "30 minutos",
        porciones: "2 raciones"
    },
    {
        id: 4,
        titulo: "Empanadas de chupe de centolla con camarones",
        imagen: "../imagenes/img4.png",
        autor: "Jon Michelena",
        meta: "",
        ingredientes: "ingredientes para el relleno • carne de centolla cocida • camarones descascarados, desvenados, cortados en trocitos • mantequilla sin sal • cebolla cortada en cuadritos",
        tiempo: "2 horas",
        porciones: "14-15 raciones"
    },
    {
        id: 5,
        titulo: "Mariscada de crustáceos y centolla rellena",
        imagen: "../imagenes/img5.png",
        autor: "Alexis Urrutia",
        meta: "",
        ingredientes: "centolla viva de 1 kilo y medio aproximadamente • conchas finas vivas • gambas frescas grandes • limones y medio medianos • ajos muy gruesos • perejil fresco no muy fino",
        tiempo: "",
        porciones: "4 personas"
    },
    {
        id: 6,
        titulo: "Spaghetti con carne de centolla",
        imagen: "../imagenes/img6.png",
        autor: "Arianne",
        meta: "",
        ingredientes: "Centollas (hervidas) • Spaghetti • Cebollas (en daditos) • ajo (en daditos) • Concentrado de tomate • Brandy • Estragón • ~10 Tomates cherry (partidos por la mitad) • Aceite de oliva",
        tiempo: "40 minutos (+ tiempo centolla)",
        porciones: "4 Comensales"
    },
    {
        id: 7,
        titulo: "Ceviche clásico de mariscos",
        imagen: "../imagenes/img7.png",
        autor: "Carlos Gómez",
        meta: "Destacado",
        ingredientes: "pescado blanco en cubos • camarones • pulpo cocido • jugo de limón fresco • cebolla morada en julianas • cilantro picado • ají limo • camote cocido • maíz choclo",
        tiempo: "20 minutos",
        porciones: "3 porciones"
    },
    {
        id: 8,
        titulo: "Cazuela de mariscos caribeña",
        imagen: "../imagenes/img8.png",
        autor: "Marina Silva",
        meta: "",
        ingredientes: "mixtura de mariscos • leche de coco • pimentón verde y rojo • cebolla • ajo • pasta de tomate • vino blanco • cilantro • crema de leche para espesar",
        tiempo: "45 minutos",
        porciones: "4 personas"
    },
    {
        id: 9,
        titulo: "Arroz con mariscos especial de la casa",
        imagen: "../imagenes/img9.png",
        autor: "Luis Fernando",
        meta: "",
        ingredientes: "arroz grano largo • calamares • camarones • mejillones • arvejas • zanahoria en cubos • pimentón dulce • fondo de pescado • aceite con achiote para dar color",
        tiempo: "35 minutos",
        porciones: "5 comensales"
    },
    {
        id: 10,
        titulo: "Croquetas crujientes de cangrejo y centolla",
        imagen: "../imagenes/img10.png",
        autor: "Elena Rostova",
        meta: "",
        ingredientes: "pulpa de cangrejo • carne de centolla desmenuzada • salsa bechamel espesa • cebollino picado • huevo • pan rallado panko • aceite para freír",
        tiempo: "1 hora",
        porciones: "12 unidades"
    },
    {
        id: 11,
        titulo: "Salmón sellado en salsa de alcaparras",
        imagen: "../imagenes/img11.png",
        autor: "Chef Andrews",
        meta: "Premium",
        ingredientes: "filete de salmón fresco con piel • alcaparras en salmuera • mantequilla • vino blanco • zumo de limón • pimienta blanca • puré de papas como guarnición",
        tiempo: "25 minutos",
        porciones: "1 porción"
    },
    {
        id: 12,
        titulo: "Chupe de centolla tradicional",
        imagen: "../imagenes/img12.png",
        autor: "Patricio Rey",
        meta: "",
        ingredientes: "carne de centolla • pan de molde remojado en leche • cebolla picada • ají color • queso mantecoso rallado • crema de leche • vino blanco • queso parmesano para gratinar",
        tiempo: "50 minutos",
        porciones: "6 raciones"
    }
];

// Función para renderizar dinámicamente las tarjetas en el HTML
function inicializarMenu() {
    const contenedor = document.getElementById('menu-cards-container');
    contenedor.innerHTML = ""; // Limpiamos por seguridad

    menuData.forEach(plato => {
        // Creamos el artículo contenedor de la tarjeta
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('recipe-card');

        // Validamos si tiene tiempo o porciones para no dejar iconos vacíos
        let footerHTML = "";
        if (plato.tiempo) {
            footerHTML += `<div class="meta-item"><i class="fa-regular fa-clock"></i> <span>${plato.tiempo}</span></div>`;
        }
        if (plato.porciones) {
            footerHTML += `<div class="meta-item"><i class="fa-solid fa-users"></i> <span>${plato.porciones}</span></div>`;
        }

        // Estructura interna de los textos y el autor
        let metaAutorHTML = "";
        if (plato.meta) {
            metaAutorHTML += `<span class="author-badge" style="color: #d35400;">${plato.meta}</span> `;
        }
        metaAutorHTML += `por ${plato.autor}`;

        // Armamos el HTML interno de la tarjeta
        tarjeta.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${plato.imagen}" alt="${plato.titulo}" onerror="this.src='https://placehold.co/180x180?text=Sin+Imagen'">
            </div>
            <div class="card-content">
                <div>
                    <div class="card-header">
                        <h2>${plato.titulo}</h2>
                        <button class="bookmark-btn" onclick="alternarFavorito(this)">
                            <i class="fa-regular fa-bookmark"></i>
                        </button>
                    </div>
                    <div class="recipe-meta">
                        ${metaAutorHTML}
                    </div>
                    <p class="recipe-ingredients">${plato.ingredientes}</p>
                </div>
                <div class="recipe-card-footer">
    ${footerHTML}
</div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Función dinámica para el botón de guardar de cada tarjeta
function alternarFavorito(boton) {
    boton.classList.toggle('active');
    const icono = boton.querySelector('i');
    
    if (boton.classList.contains('active')) {
        icono.classList.replace('fa-regular', 'fa-solid');
    } else {
        icono.classList.replace('fa-solid', 'fa-regular');
    }
}

// Se ejecuta automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', inicializarMenu);