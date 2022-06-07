(function() {
    var formulario = document.getElementById("formulario"), 
        elementos = formulario.elements,
        boton = document.getElementById("btn");

    var validarNombre = function(e) {
        if (formulario.name.value == 0) {
            alert("Por favor, complete el campo nombre.");
            e.preventDefault();
        }
    }

    var validarTelefono = function(e) {
        if (formulario.num.value == 0) {
            alert("Por favor, complete el campo N° de teléfono.");
            e.preventDefault()
        }
    }

    var validarMotivo = function(e) {
        if (formulario.motivo.selectedIndex == 0) {
            alert("Debe seleccionar un motivo de consulta.");
            e.preventDefault()
        }
    }

    var validarCheckbox = function(e) {
        if (formulario.confirmacion.checked == false) {
            alert("Por favor, confirme sus datos a través de la casilla.");
            e.preventDefault()
        }
    }

    var validarConsulta = function(e) {
        if (formulario.consulta.value == 0) {
            alert("Por favor, escriba su consulta.");
            e.preventDefault()
        }
    }

    var validar = function(e) {
        validarNombre(e);
        validarTelefono(e);
        validarMotivo(e);
        validarConsulta(e);
        validarCheckbox(e);
    }
    

    formulario.addEventListener("submit", validar);
}())
