// sintaxe de função sem parâmetros 
// function cadrastrar aluno()console.log("A casa caiu"))

//sintax de função com parâmetros
//function somar(a,b) return {somar(3,4)};
function somar(a,b){
  let total =a+b;
  console.log(total);
}

somar(7.8,9.17);

//sintaxe de função anonima
//()=>{}
//(): por onde a função recebe os argumentos (parâmetro) 
 // como ocorre nass funções traicionais
 // responsável pelo nome arow
 // o bloco de código que representa o escopo da função 

 let subtrair = (valor1, valor2)=> {
    let resultado = valor1 - valor2
    console.log(resultado);

 }

 subtrair(10.9865,-6,0989)

 let numeros = [1,3,5,10]

 numeros.map(item) =>  {
    console.log(item)
 }
