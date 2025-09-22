/*
    Criar uma função para calcular juros composros
    A função deve receber os valores no formato inteiro: Valor, % de juros e tempo
    Fórmula: valor * (juros ^tempo)
*/

const jurosCompostos = (valor, juros, tempo) => {
    let taxaJuros = 1 + (juros/100);
    let calculo = valor * Math.pow(taxaJuros, tempo);
    console.log(calculo.toFixed(2));
}

jurosCompostos(1000, 5, 2);