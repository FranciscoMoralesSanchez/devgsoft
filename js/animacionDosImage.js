// Función para detectar si un elemento está en el viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar o eliminar la clase "visible" cuando la imagen entra o sale del viewport
function handleScroll() {
  const images = document.querySelectorAll(".knowledge__picture"); // Seleccionamos todas las imágenes con la clase .about__img

  images.forEach((image) => {
    if (isInViewport(image)) {
      // Si la imagen entra en el viewport, agregamos la clase "visible"
      image.classList.add("knowledge__picture--visible");
    } else {
      // Si la imagen ya no está en el viewport, eliminamos la clase "visible"
      image.classList.remove("knowledge__picture--visible");
    }
  });
}

// Ejecutamos la función handleScroll cuando el usuario haga scroll
window.addEventListener("scroll", handleScroll);

// Ejecutamos handleScroll también al cargar la página, por si la imagen ya está visible
window.addEventListener("load", handleScroll);
