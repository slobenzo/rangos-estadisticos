function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const toggleButton = document.getElementById('toggle-dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerText = 'Modo Claro';
    } else {
        toggleButton.innerText = 'Modo Oscuro';
    }
}

function calcularRangos() {
    const rangoBase = parseFloat(document.getElementById("rangoBase").value);
    const rangosElement = document.getElementById("rangos");
    const rangoMaximo = document.getElementById("rangoMaximo");
    const rangoMinimo = document.getElementById("rangoMinimo");

    if (!isNaN(rangoBase) && rangoBase > 0) {
        const maximo = rangoBase * 1.3;
        const minimo = rangoBase * 0.7;

        rangoMaximo.value = maximo.toFixed(2);
        rangoMinimo.value = minimo.toFixed(2);

        rangosElement.classList.remove("oculto");
    } else {
        rangosElement.classList.add("oculto");
    }

    document.getElementById("nuevoRango").value = '';
    document.getElementById("resultadoVerificacion").innerText = '';
}

function reiniciar() {
    document.getElementById("rangoBase").value = '';
    document.getElementById("rangoMaximo").value = '';
    document.getElementById("rangoMinimo").value = '';
    document.getElementById("nuevoRango").value = '';
    document.getElementById("resultadoVerificacion").innerText = '';
    document.getElementById("rangos").classList.add("oculto");
}

function verificarRango() {
    const rangoBase = parseFloat(document.getElementById("rangoBase").value);
    const rangoMaximo = parseFloat(document.getElementById("rangoMaximo").value);
    const rangoMinimo = parseFloat(document.getElementById("rangoMinimo").value);
    const nuevoRango = parseFloat(document.getElementById("nuevoRango").value);
    const resultadoVerificacion = document.getElementById("resultadoVerificacion");

    if (!isNaN(nuevoRango)) {
        if (nuevoRango >= rangoMinimo && nuevoRango <= rangoMaximo) {
            resultadoVerificacion.innerText = "El rango está dentro del rango base.";
            mostrarNuevaCasilla();
        } else {
            resultadoVerificacion.innerText = "El rango no está dentro del rango base.";
            ocultarNuevaCasilla();
        }
    } else {
        resultadoVerificacion.innerText = '';
    }
}

function mostrarNuevaCasilla() {
    // Implementar lógica para mostrar una nueva casilla si es necesario
}

function ocultarNuevaCasilla() {
    // Implementar lógica para ocultar la nueva casilla si es necesario
}

// Inicialización del modo claro
document.body.classList.add('light-mode');
