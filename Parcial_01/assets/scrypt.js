//Hamburguer
//Se ocupo inteligencia artificial para el uso de la hamburguer
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

//Caracteristicas
//Se ocupo inteligancia artificial para el cambio de imagen en las caracteristicas
const properties = document.querySelectorAll('.property');
const propertyImage = document.getElementById('property-image'); 
const defaultImage = './assets/img/Glucometro.png'; 
let currentProperty = null; 

properties.forEach(property => {
    property.addEventListener('click', () => {
        const newImage = property.getAttribute('data-image');

        if (currentProperty) {
            currentProperty.classList.remove('active');
        }

        if (currentProperty !== property) {
            property.classList.add('active'); 
            propertyImage.src = newImage;
            currentProperty = property;
        } else {
            propertyImage.src = defaultImage;
            currentProperty = null;
        }
    });
});

//Carrusel
//Se ocupo como referencia un video para crear la funcionalidad de scroll de izquierda a derecha en los comentarios
const carousel = document.querySelector(".carousel");
const arrowsBtns = document.querySelectorAll(".wrapper i")
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop);


//Validacion formulario
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)){
        alert('El nombre solo debe contener letras.');
        limpiarCampos();
        return;
    }

    
    if(!nameRegex.test(lastName)){
        alert('El apellido solo debe contener letras.');
        limpiarCampos();
        return;
    }

    const email =   document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        alert('Porfabor, ingresa un correo valido.');
        limpiarCampos();
        return;
    }

    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?(\d{1,3}[-.\s]?){1,4}$/;

    if(!phoneRegex.test(phone)){
        alert('Porfavor, ingresa un numero de telefono valido.')
        limpiarCampos();
        return;
    }

    alert('Registro completo!');
    limpiarCampos();

});


function limpiarCampos() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}