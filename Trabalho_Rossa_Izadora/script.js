// Função para pedir um item
function pedir() {
    var valor = prompt("Digite uma opção de 1 a 7");

    switch (Number(valor)) {
        case 1:
            confirmacao("Suco");
            break;
        case 2:
            confirmacao("Água Gelada");
            break;
        case 3:
            confirmacao("Sorvete");
            break;
        case 5:
            confirmacao("Hambúrguer");
            break;
        case 6:
            confirmacao("Batata Frita");
            break;
        case 7:
            confirmacao("Refrigerante");
            break;
        default:
            alert("Esse item não existe, por favor escolha algo que tenha no nosso menu.");
            break;
    }
}

// Função para confirmação do pedido
function confirmacao(item) {
    var confirmar = confirm("Você selecionou o item " + item + ", deseja confirmar?");
    if (confirmar) {
        alert("Pedido confirmado!!! Apenas espere alguns minutos.");
    } else {
        alert("Pedido cancelado.");
    }
}

// Função para chamar o garçom
function confirmarGarcom() {
    var confirmar = confirm("Gostaria de confirmar a chamada do garçom?");
    if (confirmar) {
        alert("Garçon chamado, apenas espere um minuto.");
    } else {
        alert("Chamada de garçon cancelada.");
    }
}

// Função para contagem usando WHILE
function contarWhile() {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado = '';

    if (isNaN(numero) || numero < 1) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Contagem usando WHILE
    let i = 1;
    while (i <= numero) {
        resultado += i + '<br>'; // Adiciona uma quebra de linha após cada número
        i++;
    }
    // Adiciona o resultado ao elemento de saída
    document.getElementById('resultado').innerHTML += '<strong>Contagem usando WHILE:</strong><br>' + resultado + '<br>';
}

// Função para contagem usando FOR
function contarFor() {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado = '';

    if (isNaN(numero) || numero < 1) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Contagem usando FOR
    for (let j = 1; j <= numero; j++) {
        resultado += j + '<br>'; // Adiciona uma quebra de linha após cada número
    }
    // Adiciona o resultado ao elemento de saída
    document.getElementById('resultado').innerHTML += '<strong>Contagem usando FOR:</strong><br>' + resultado + '<br>';
}
