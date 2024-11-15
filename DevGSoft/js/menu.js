// Obtener el botón de menú y los enlaces
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const menuItems = document.querySelectorAll('.nav__items'); // Obtener todos los elementos de los enlaces

// Agregar evento de clic al botón de menú hamburguesa
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'show' para mostrar/ocultar el menú
    navLinks.classList.toggle('show');
    
    // Alternar la clase 'active' para cambiar el color de las barras del menú hamburguesa
    menuToggle.classList.toggle('active');
});

// Agregar evento de clic a cada enlace del menú para cerrar el menú después de hacer clic
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        navLinks.classList.remove('show');
        menuToggle.classList.remove('active');
    });
});
