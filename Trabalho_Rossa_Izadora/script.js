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

function confirmacao(item) {
    var confirmar = confirm("Você selecionou o item " + item + ", deseja confirmar?");
    if (confirmar) {
        alert("Pedido confirmado!!! Apenas espere alguns minutos.");
    } else {
        alert("Pedido cancelado.");
    }
}

function confirmarGarcom() {
    var confirmar = confirm("Gostaria de confirmar a chamada do garçom?");
    if (confirmar) {
        alert("Garçon chamado, apenas espere um minuto.");
    } else {
        alert("Chamada de garçon cancelada.");
    }
}
