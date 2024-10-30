// Spread operator com arrays
let primeiros = [1, 2, 3];
let numeros = [primeiros, 4, 5, 6];
let numeros2 = [...primeiros, 4, 5, 6];
console.log(numeros);
console.log(numeros2);


// Spread operator com objetos
let pessoa = {
    nome: "Izadora",
    idade: 16,
    cargo: "Aluna"
};

let dadosPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "Campo Largo"
};

console.log(dadosPessoa);
console.log(dadosPessoa.cargo);

// Função para criar um novo usuário
function novoUsario(info) {
    // console.log(info);
    let dados = {
        ...info,
        status: 'Ativo',
        incio: "17/02/2000",
        codigo: "123"

    }
    console.log(dados);
};

// Chamando a função com um objeto
novoUsario({ nome: "Cleiton", sobrenome: "Pereira", cargo: "estagiário" });
