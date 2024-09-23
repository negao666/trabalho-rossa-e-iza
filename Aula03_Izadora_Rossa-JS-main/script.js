var lista = ['aluno 1', 'aluno 2', 100];
// consumindo o array

console.log(lista);
// consumindo um elemento especifico do array
console.log(lista[2]);

// descobrindo o tamanho do array
console.log(lista.length);

// saber se um elemento está ou não no array
console.log(lista.indexOf('aluno 3'));
console.log(lista.indexOf('aluno 1'));

// alterar uma informação dentro do array
lista[0] = "Izadora";

console.log(lista);

lista[1] = "Rossa";

console.log(lista);

lista[2] = 3;

console.log(lista);

// inserindo uma nova informação dentro do array

lista.push('Klodeoswalldo');
console.log(lista);

// excluir o primeiro elemento do array
lista.shift();
console.log(lista);

// excluir o ultimo elemento do array
lista.pop();
console.log(lista);

// retornar e separar os elementos do Array
console.log(lista.join(':'));



