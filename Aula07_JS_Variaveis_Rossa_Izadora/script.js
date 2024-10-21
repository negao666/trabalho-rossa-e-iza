// diferenças entre var,let e const

// var

var nome = 'Alastor';

console.log(nome);

if (nome === 'Alastor') {
    var escola = "CESF";
    console.log(escola);
}

console.log(escola);


escola = "sagrada";
console.log(escola);

// com variaveis do tipo var podemos acessar (visibilidade)
// fora do escopo de criação de variavel

// let


if (nome === 'Alastor'); {
    let curso = 'DS';
    console.log(curso);
}
 const cargo = 'estudante';
console.log('cargo');
cargo = "prpgramador";
console.log(cargo);

// variaveis sem atribuição inicial

var aluno1;
aluno1 = "Ana Clara";
console.log (aluno1);

let aluno2;
aluno2 = "Bernardo";
console.log(aluno2);


// const aluno3

const aluno3 = 'Clodersoswalderswon';
console.log(aluno3);

