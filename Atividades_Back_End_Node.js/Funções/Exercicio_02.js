/*
    Criar função que calcula o fatorial de um número usando recursão.
    Fatorial; n! multiplicação de n por seus antecessores maiores ou iguais a 1.
    Exemplo; 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

const fatorial = function f(n){
    if (n === 0 || n === 1){
        return 1;
    } else {
        return n * f(n - 1); //ela está se auto chamando
    }
}

console.log(fatorial(5)); // 120