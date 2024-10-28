let pessoa = {
    nome: "Gabriel",
    sobrenome: "Rossa",
    empresa: "CESF",
    cargo: "Aluno"
}
console.log(pessoa);
console.log(pessoa.nome);

// desconstruir objeto

const { nome, cargo, empresa } = pessoa;
console.log(nome);
console.log(empresa);

let nomes = ['Roberto, Clovis, Astolfo'];
console.log(nomes);

let { 0: primeiroNome, 1: segundoNome, 2: terceiroNome } = nomes;

console.log(primeiroNome);

// outro jeito de desconstruir o array

let [priNome, segNome, tercNome] = nomes;

console.log(segNome)