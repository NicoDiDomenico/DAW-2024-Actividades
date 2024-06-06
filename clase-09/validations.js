// "DOMContentLoaded" --> Evento que indica que la carga del HTML en el navegador ha finalizado
document.addEventListener("DOMContentLoaded", function() {
    // Forma no recomendada (solo puedo ejecutar una funcion = handler): objetoHTML.Evento = handler  
    // Forma 1: document.addEventListener("nombreEvento", function() { ... });    
    // Forma 2: document.addEventListener("nombreEvento", () => { ... }); 
    // Forma 3: function handleLoad() {}; document.addEventListener("DOMContentLoaded", handleLoad); 

    // Selecciono el formulario 
    var form = document.querySelector("form");
    /* 
    - querySelector() - Cómo se usa:
    var form = document.querySelector("form"); // Selecciona la primer etiqueta <form> en el documento.
    var form = document.querySelector(".miClase"); // Selecciona el primer elemento tipo clase. 
    var form = document.querySelector("#miId"); // Selecciona el primer elemento tipo ID."
    */
   
    // Selecciona el campo de entrada del nombre completo por su ID
    var fullNameInput = document.getElementById("nombre");

    // Añade un evento al formulario para manejar el envío
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto
        validateForm(); // Llama a la función que valida el formulario
    });

    // Añade eventos al campo de nombre completo para actualizar el título cuando se escribe o se enfoca en el campo
    fullNameInput.addEventListener("keydown", updateTitle); 
    fullNameInput.addEventListener("focus", updateTitle);

    // Obtiene todos los campos de entrada dentro del formulario
    var inputs = form.querySelectorAll("input");
    
    // Añade eventos a cada campo de entrada para validar y limpiar errores
    inputs.forEach(input => {
        input.addEventListener("blur", validateField); // Valida el campo cuando pierde el foco
        input.addEventListener("focus", clearError); // Limpia el error cuando se enfoca en el campo
    });

    // Función que valida todo el formulario
    function validateForm() {
        var isValid = true; // Variable para rastrear si el formulario es válido
        var errorMessages = []; // Arreglo para almacenar mensajes de error

        // Valida cada campo del formulario
        inputs.forEach(input => {
            var errorMessage = validateField({ target: input }); // Valida el campo
            if (errorMessage) { // Si hay un mensaje de error
                isValid = false; // Marca el formulario como inválido
                errorMessages.push(errorMessage); // Agrega el mensaje de error al arreglo
            }
        });

        // Muestra un modal con los errores si el formulario no es válido, o un mensaje de éxito si es válido
        if (!isValid) {
            showModal("modalError", "Errores en el formulario:\n" + errorMessages.join("\n"));
        } else {
            showModal("modalSuccess", "Formulario enviado correctamente:\n" + getFormData());
        }
    }

    // Función que valida un campo individual
    function validateField(event) {
        var field = event.target; // El campo que disparó el evento
        var errorElement = document.getElementById(`${field.id}Error`); // Elemento de error asociado al campo
        var errorMessage = ""; // Mensaje de error por defecto vacío

        // Validaciones específicas para cada campo basado en su ID
        switch (field.id) {
            case "nombre":
                if (!/^.+\s.+$/.test(field.value)) {
                    errorMessage = "Debe tener más de 6 letras y al menos un espacio entre medio.";
                }
                break;
            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    errorMessage = "Debe tener un formato de email válido.";
                }
                break;
            case "contraseña":
                if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(field.value)) {
                    errorMessage = "Debe tener al menos 8 caracteres, formados por letras y números.";
                }
                break;
            case "repContraseña":
                if (field.value !== document.getElementById("contraseña").value) {
                    errorMessage = "Las contraseñas no coinciden.";
                }
                break;
            case "edad":
                if (!/^\d+$/.test(field.value) || parseInt(field.value) < 18) {
                    errorMessage = "Debe ser un número entero mayor o igual a 18.";
                }
                break;
            case "telefono":
                if (field.value && !/^\d{7,}$/.test(field.value)) {
                    errorMessage = "Debe ser un número de al menos 7 dígitos, sin espacios, guiones ni paréntesis.";
                }
                break;
            case "direccion":
                if (!/.+\s.+/.test(field.value) || field.value.length < 5) {
                    errorMessage = "Debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.";
                }
                break;
            case "ciudad":
                if (field.value.length < 3) {
                    errorMessage = "Debe tener al menos 3 caracteres.";
                }
                break;
            case "codigoPostal":
                if (field.value.length < 3) {
                    errorMessage = "Debe tener al menos 3 caracteres.";
                }
                break;
            case "dni":
                if (!/^\d{7,8}$/.test(field.value)) {
                    errorMessage = "Debe ser un número de 7 u 8 dígitos.";
                }
                break;
            default:
                break;
        }

        // Muestra u oculta el mensaje de error basado en si hay un error
        if (errorMessage) {
            // Si el elemento de error no existe, crea uno nuevo
            if (!errorElement) {
                var newErrorElement = document.createElement("div");
                newErrorElement.id = `${field.id}Error`;
                newErrorElement.classList.add("error-message");
                field.parentNode.appendChild(newErrorElement);
            }
            document.getElementById(`${field.id}Error`).textContent = errorMessage; // Establece el mensaje de error
            document.getElementById(`${field.id}Error`).style.display = "block"; // Muestra el elemento de error
            return errorMessage; // Devuelve el mensaje de error
        } else {
            if (errorElement) {
                errorElement.textContent = ""; // Limpia el mensaje de error
                errorElement.style.display = "none"; // Oculta el elemento de error
            }
            return ""; // Devuelve una cadena vacía (sin errores)
        }
    }

    // Función para limpiar el error cuando el campo recibe el foco
    function clearError(event) {
        var field = event.target; // El campo que disparó el evento
        var errorElement = document.getElementById(`${field.id}Error`); // Elemento de error asociado al campo
        if (errorElement) {
            errorElement.textContent = ""; // Limpia el mensaje de error
            errorElement.style.display = "none"; // Oculta el elemento de error
        }
    }

    // Función que actualiza el título del formulario basado en el nombre completo del usuario
    function updateTitle() {
        var name = fullNameInput.value.trim(); // Obtiene y recorta el valor del campo de nombre completo
        var formTitle = document.querySelector("legend strong"); // Selecciona el elemento del título del formulario
        formTitle.textContent = name ? `Datos Usuario - HOLA ${name}` : "Datos Usuario"; // Actualiza el título con el nombre completo si existe, de lo contrario solo muestra "Datos Usuario"
    }

    // Función que obtiene los datos del formulario en un formato legible
    function getFormData() {
        return Array.from(inputs).map(input => `${input.name}: ${input.value}`).join("\n"); // Recorre todos los inputs y crea una cadena con sus nombres y valores
    }

    // Función para mostrar el modal
    function showModal(modalId, message) {
        var modal = document.getElementById(modalId);
        var modalMessage = modal.querySelector("p");
        modalMessage.textContent = message;
        modal.style.display = "block";

        // Añade el evento de cerrar el modal
        var closeModal = modal.querySelector(".close");
        closeModal.onclick = function() {
            modal.style.display = "none";
        };

        // Cerrar el modal si se hace clic fuera del contenido del modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
});
