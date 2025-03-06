// Seleccionamos todos los iconos
const icons = document.querySelectorAll(".aboutt__icon");

// Creamos el Intersection Observer para detectar la visibilidad de los iconos
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Cuando el icono entra en la vista, agregamos la clase 'visible' para activar la animación
        entry.target.classList.add("visible");
      } else {
        // Si el icono sale de la vista, eliminamos la clase 'visible' para que pueda animarse de nuevo
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.5 }
); // Umbral de visibilidad (50% del icono visible)

// Observamos todos los iconos
icons.forEach((icon) => {
  observer.observe(icon);
});
