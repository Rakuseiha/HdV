// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el formulario por su etiqueta 'form'
    var formulario = document.querySelector('form');

    // Agrega un evento de envío al formulario
    formulario.addEventListener('submit', function(event) {
        // Evita que el formulario se envíe de forma predeterminada
        event.preventDefault();

        // Muestra un alert al enviar el formulario
        alert('Formulario enviado con éxito');
    });
});
