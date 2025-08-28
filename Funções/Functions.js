/*
    function nomeDaFuncao (parametros) {
        // corpo da funcao
        return valorDeRetorno;
    }

*/

// Função com parâmetro e valor de retorno
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // Olá, Maria!

// Função sem parâmetro e sem valor de retorno
function dizerOla() {
    console.log("Olá, mundo!");
}   

dizerOla(); // Olá, mundo!