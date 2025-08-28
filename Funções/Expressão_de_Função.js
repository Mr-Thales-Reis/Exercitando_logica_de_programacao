/*
const nomeVariavel = function(parametros){
    // corpo da funcao
    return valorDeRetorno;
}

console.log(nomeVariavel(parametros));
*/

const imprimeolamundo = function(){
    console.log("Olá, mundo!");
};

imprimeolamundo()

const boasVndas = function(nome){ return `Seja bem-vindo, ${nome}!`};

console.log(boasVndas("João!"))

// Funcão recursiva -> Ela mesmo se auto chama
//Exemplo:

const fatorial = function f(n){
    if (n === 0 || n === 1){
        return 1;
    } else {
        return n * f(n - 1); //ela está se auto chamando
    }
}

console.log(fatorial(5)); // 120