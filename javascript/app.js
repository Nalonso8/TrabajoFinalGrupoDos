function toggleMenu() {
    // Obtener referencia al elemento del menú y al icono
    const menu = document.getElementById("menu");
    const icono = document.querySelector(".icono-hamburguesa");

    // Alternar la visibilidad del menú y cambiar el icono en consecuencia
    if (menu.style.display === "block") {
        menu.style.display = "none";
        icono.innerHTML = "&#9776;"; // Cambiar el icono a hamburguesa
    } else {
        menu.style.display = "block";
        icono.innerHTML = "&#10006;"; // Cambiar el icono a X
    }
}

    // Formulario de contacto

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('.formulario form');
    
        if (form) { // Verificar si el formulario existe en el documento
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
                // Obtener los valores de los campos del formulario
                const nombre = form.querySelector('input[type="text"][placeholder="Nombre"]').value;
                const apellido = form.querySelector('input[type="text"][placeholder="Apellido"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const interes = form.querySelector('select').value;
    
                // Expresión regular para validar que el nombre y apellido contengan solo letras
                const regexNombreApellido = /^[A-Za-z]+$/;
    
                // Verificar si los campos están vacíos o contienen números
                if (nombre === '' || apellido === '' || email === '' || interes === 'Me interesa...') {
                    alert('Por favor, completar todos los campos del formulario.');
                    return; // Detener la ejecución si hay campos vacíos
                } else if (!regexNombreApellido.test(nombre) || !regexNombreApellido.test(apellido)) {
                    alert('El nombre y el apellido solo pueden contener letras.');
                    return; // Detener la ejecución si el nombre o apellido contiene números
                }
    
                // Validar el formato del correo electrónico utilizando una expresión regular
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regexEmail.test(email)) {
                    alert('Dirección de correo electrónico no válida.');
                    return; // Detener la ejecución si el correo electrónico no es válido
                }
    
                // Simular el envío del formulario
                alert('¡Formulario enviado exitosamente!');
                form.reset(); // Limpiar el formulario después de enviarlo
            });
        } 
    });
    