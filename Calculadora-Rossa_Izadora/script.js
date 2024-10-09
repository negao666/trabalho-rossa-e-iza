var peso;
var altura;
var imc;
var resultado;

document.getElementById('imcForm').addEventListener('submit', calcular);

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);

    // Validação de entrada
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Cálculo do IMC
    imc = peso / (altura * altura);
    let classificacao = '';

    // Classificação do IMC
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Exibição do resultado
    resultado = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
    console.log(resultado);
    document.getElementById('resultado').innerText = resultado;
}
