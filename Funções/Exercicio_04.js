/*
    Criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
    Função deve receber por parâmentro: operação desejada, valor1 e valor2
*/

function soma(a,b){return a + b};
function multiplicação(a,b){return a * b};

function calcula(FnOperacao, valorA, ValorB){
    return FnOperacao(valorA, ValorB)
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplicação, 5, 5))