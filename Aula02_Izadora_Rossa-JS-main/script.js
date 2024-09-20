var area = document.getElementById("area");
function entrar() {
    // alert("Clicou");
    var nome = prompt("Digite seu nome");
    // console.log(nome);
    area.innerHTML = "Bem Vindo " + nome + " ";

    // criando um botao dentro do HTML a partir do JS
    let botaoSair = document.createElement('button');

    botaoSair.innerHTML = "sair da conta";
    botaoSair.onclick = sair;

    area.appendChild(botaoSair);

}

function sair() {
    alert("até mais!!!");
    area.innerHTML = 'você saiu';
}