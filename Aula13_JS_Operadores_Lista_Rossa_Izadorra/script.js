// MAP
// Percorre todo o array e executa a ação que tivermos programado

// let lista = ['Robson', 'Cleiton', 'Clovis'];

// lista.map((nome,posicao)=>(
//     console.log (`O nome é ${nome} e ele ocupa a posição ${posicao}`)
// ))

// REDUCE
// Procura reduzir um array normalmente atraves de operações matematicas
// Transformando todo o conteudo do array em um único valor

// let numeros = [2, 3, 5, 10];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//     console.log(`${acumulador} total até agora`);
//     console.log(`${numero} valor atual`);
//     console.log(`${indice} posição até agora`);
//     console.log(`${original} array original`);
//     return acumulador += numero;
// }, 0);

// console.log(`Total do reduce é ${total}`);

// FIND
// faz uma busca dentrodo array e devolve o primeiro item que ele encontra
// e corresponde ao criterio de busca

// let listagem = [2, 3, 'Flavia', 6, 'Estudante'];

// let busca = listagem.find((item2) => {
//     if (item2 === 'Flavia') {
//         console.log('Nome encontrado');
        
//     } else {
//         console.log('Nome não encontrado');
        
//     }
// });


// console.log(busca);

// FILTER

let palavras = ['alface', 'beterraba', 'cenoura', 'dedo','espinafre'];
let resultado = palavras.filter((item3) => {
  return item3.length >= 7;
});

console.log(resultado);


