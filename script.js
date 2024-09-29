let historialOperaciones = [];

function calcular() {

    var numero1 = parseFloat(document.getElementById('numero1').value);
    var operador = document.getElementById('operador').value;
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                alert("No se puede dividir entre cero.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Por favor, ingresa un operador válido (+, -, *, /).");
            return;
    }

    document.getElementById('resultado').value = resultado;


    let operacion = `${numero1} ${operador} ${numero2} = ${resultado}`;
    historialOperaciones.push(operacion);
    actualizarHistorial();
}

function actualizarHistorial() {
    let lista = document.getElementById('historial');
    lista.innerHTML = '';
    historialOperaciones.forEach(function(operacion) {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = operacion;
        lista.appendChild(li);
    });
}