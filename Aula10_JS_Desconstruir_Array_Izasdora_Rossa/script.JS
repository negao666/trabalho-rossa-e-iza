let pessoa = {
    nome: "Gabriel",
    sobrenome: "Rossa",
    empresa: "CESF",
    cargo: "Aluno"
};
console.log(pessoa);
console.log(pessoa.nome);

// desconstruir objeto
const { nome, cargo, empresa } = pessoa;
console.log(nome);
console.log(empresa);

let nomes = ['Roberto', 'Clovis', 'Astolfo'];
console.log(nomes);

let [primeiroNome, segundoNome, terceiroNome] = nomes;

console.log(primeiroNome);

// outro jeito de desconstruir o array
let [priNome, segNome, tercNome] = nomes;

console.log(segNome);
