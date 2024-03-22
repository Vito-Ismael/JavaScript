document.getElementById('tabuadaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('tabuadaResultado');

    if (!isNaN(numero)) {
        let tabuada = '<h2>Tabuada do ' + numero + '</h2>';
        tabuada += '<table>';
        for (let i = 1; i <= 10; i++) {
            tabuada += '<tr><td>' + numero + ' x ' + i + '</td><td> = </td><td>' + (numero * i) + '</td></tr>';
        }
        tabuada += '</table>';
        resultadoDiv.innerHTML = tabuada;
    } else {
        resultadoDiv.innerHTML = '<p>Por favor, digite um número válido.</p>';
    }
})
