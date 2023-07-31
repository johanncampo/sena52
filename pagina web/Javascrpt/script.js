// Obtener todos los botones de "Mostrar/Ocultar"
const toggleButtons = document.querySelectorAll('.toggle-details');

// Agregar un evento de clic a cada botón
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el siguiente elemento después del botón (es decir, el elemento ul)
    const detailsElement = button.nextElementSibling;
    
    // Cambiar el estilo del elemento ul para mostrarlo u ocultarlo
    detailsElement.style.display = detailsElement.style.display === 'none' ? 'block' : 'none';
  });
});
