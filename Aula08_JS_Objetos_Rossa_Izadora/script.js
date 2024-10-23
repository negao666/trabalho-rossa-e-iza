// trabalhando com objetos no JS

// criar uma variavel do tipo objeto

let pessoa = {
    Nome: "Deivid",
    idade: 52,
    altura: 1.58,
    cargo: "estudante",
};

console.log(pessoa);
console.log(pessoa.Nome);
console.log(pessoa.altura);

let carro = {
    nome: 'Brasilia',
    cor: 'amarela',
    marca: 'volkswagen'
}

console.log(carro.nome + " " + carro.cor)

// criando array de objetos

let alunos = [
    {nome:"Flavia", CGM: 735682575, turma: "2DSA"},
    {nome:"Rossa", CGM: 587528375, turma: "2DSA"},
    {nome:"Gabriel", CGM: 547783856, turma: "2DSA"}
]
console.log (alunos)

console.log(alunos[1])

console.log(alunos[0])