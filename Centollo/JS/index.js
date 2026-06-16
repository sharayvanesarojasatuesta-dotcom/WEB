const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const animales = [
{
    nombre: "Centollo",
    descripcion: "También conocido como Changurro o Txangurro. Es un crustáceo braquiuro y decápodo que habita fondos rocosos y arenosos.",
    cientifico: "Maja squinado",
    ingles: "Spinous spider crab",
    frances: "Araignée européenne",
    peso: "500 gr - 4 kg",
    dimensiones: "12 - 20 cm"
},
{
    nombre: "Bogavante",
    descripcion: "Crustáceo marino de gran tamaño muy apreciado en gastronomía. Posee grandes pinzas y vive en fondos rocosos.",
    cientifico: "Homarus gammarus",
    ingles: "European lobster",
    frances: "Homard européen",
    peso: "1 - 8 kg",
    dimensiones: "20 - 60 cm"
},
{
    nombre: "Langosta",
    descripcion: "Crustáceo decápodo sin grandes pinzas. Habita zonas costeras y es muy valorado por su carne.",
    cientifico: "Palinurus elephas",
    ingles: "Spiny lobster",
    frances: "Langouste rouge",
    peso: "500 gr - 6 kg",
    dimensiones: "20 - 50 cm"
},
{
    nombre: "Pulpo",
    descripcion: "Molusco cefalópodo con ocho brazos y gran inteligencia. Vive en cuevas y grietas submarinas.",
    cientifico: "Octopus vulgaris",
    ingles: "Common octopus",
    frances: "Poulpe commun",
    peso: "1 - 15 kg",
    dimensiones: "30 - 100 cm"
},
{
    nombre: "Ostra",
    descripcion: "Molusco bivalvo que vive adherido a rocas y es famoso por producir perlas en ciertas especies.",
    cientifico: "Ostrea edulis",
    ingles: "European flat oyster",
    frances: "Huître plate",
    peso: "50 - 300 gr",
    dimensiones: "5 - 15 cm"
}
];

let indice = 0;

function actualizarInfo(i){

    document.getElementById("nombre").textContent = animales[i].nombre;
    document.getElementById("descripcion").textContent = animales[i].descripcion;
    document.getElementById("nombre-cientifico").textContent = animales[i].nombre;
    document.getElementById("cientifico").textContent = animales[i].cientifico;
    document.getElementById("ingles").textContent = animales[i].ingles;
    document.getElementById("frances").textContent = animales[i].frances;
    document.getElementById("peso").textContent = animales[i].peso;
    document.getElementById("dimensiones").textContent = animales[i].dimensiones;
}

function cambiarSlide(){

    slides[indice].classList.remove("active");
    dots[indice].classList.remove("active-dot");

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    slides[indice].classList.add("active");
    dots[indice].classList.add("active-dot");

    actualizarInfo(indice);
}

actualizarInfo(0);

setInterval(cambiarSlide, 3000);

function cerrarModal(){

document.getElementById("modalDia").style.display="none";

}