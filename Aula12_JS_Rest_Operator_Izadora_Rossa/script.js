// function listaAlunos(aluno1, aluno2, aluno3, aluno4){
//     console.log("Sejam bem vindos todos os alunos");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
//     console.log(aluno5);
//     console.log(aluno6);
//     console.log(aluno7);
//     console.log(aluno8);
//     console.log(aluno9);
//     console.log(aluno10);

// }

// listaAlunos('alastor', 'Rossa', 'Izadora', 'Flavia');

function listaAlunos(...alunos) {
    console.log("Sejam bem vindos todos os alunos");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);
}
listaAlunos('Alastor', 'Rossa', 'Izadora', 'Flavia', 'Carlos');

function sorteadorPrimo(...numeros) {
    console.log(numeros)
    // const numertoSorteado = Math.random() * numeros.length;

    const numertoSorteado = Math.floor (Math.random()*numeros.length);

    console.log(`posoção: ${numertoSorteado}`);
    console.log(`numero primo: ${numeros[numertoSorteado]}`);

}

sorteadorPrimo(2, 3, 5, 7, 11, 13, 17, 19)

//sorteador do D.s

function sorteadorAlunosDs(...AlunosDs) {
    console.log(AlunosDs)

    const alunoSorteado = Math.floor (Math.random()*numeros.length);

    console.log(`posição: ${alunoSorteado}`);
    console.log(`numero primo: ${AlunosDs[alunosSorteado]}`);

}

sorteadorPrimo('Aline', 'Ana Clara', 'André', 'Bernardo', 'Daniel', 'Deivid', 'Enrique', 'Fernanda', 'Gabriel Rossa', 'Gabriel Zattera', 'Heloise', 'Izadora', 'Jeft', 'Joao Matheus', 'Joao Mauricio', 'José', 'Julia', 'Kamila', 'Karina', 'Kevin ','Leonardo Freitas' , 'Leonardo S', 'Lorenzo', 'Lucas', 'Matheus Teixeixa', 'Nicolas', 'Nycolas', 'Pedro Portela','Rafaela', 'Rafael','Rayra','Valentina','Vinicius', 'Vitor G', 'Vitor S', 'Pedro S','Ana Luisa')






