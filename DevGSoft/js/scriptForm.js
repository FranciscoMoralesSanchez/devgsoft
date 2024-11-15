// Obtener el enlace de contacto y el formulario
const contactLink = document.querySelector('.nav__items--cta'); // El enlace dentro del nav
const contactForm = document.getElementById('contactForm'); // El contenedor del formulario flotante
const closeFormButton = document.getElementById('closeForm'); // El botón "Cerrar" dentro del formulario

// Mostrar el formulario cuando se haga clic en el enlace
contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir que el enlace navegue
    contactForm.style.display = 'flex'; // Mostrar el formulario flotante
});

// Cerrar el formulario cuando se haga clic en el botón "Cerrar"
closeFormButton.addEventListener('click', () => {
    contactForm.style.display = 'none'; // Ocultar el formulario flotante
});
