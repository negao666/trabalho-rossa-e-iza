var peso;
var altura;
var imc;
var resultado;

// reecebendo o evento

function calcular(event){
    // refresh dos inputs

    event.preventDefault();
    // alert(teste 1);

    // recebendo os dados digitados pelo usuario
    peso=document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    // calcule o imc
    imc = peso/(altura*altura);

    // recebendo a recepção dos valores

    console.log(imc);
}