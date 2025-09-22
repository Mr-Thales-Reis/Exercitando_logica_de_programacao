/*
const nomeVariavel = (parametro) => {
    // corpo da função
    return parametro;
}
*/

const soma = (num1, num2) => {
    console.log(num1 + num2);
}

soma(2, 3);

const boasVindas = nome => `Seja bem vindo, ${nome}!`;

console.log(boasVindas('João'));

//Funções de callback

setTimeout(() => {
    console.log('Executando um setTimeout');
}, 2000);

setTimeout(() => console.log('Executando um setTimeout com arrow function'), 2000);

setTimeout(exibirFrase, 3000); //Aqui eu consigo escrever minha função timeout e colocar um tempo e depois eu chamo ela como o nome da função e ela já está configurada, ai não precisa escrever todo o códiigo da função

function exibirFrase() {
    console.log('Executando uma função normal');
}

