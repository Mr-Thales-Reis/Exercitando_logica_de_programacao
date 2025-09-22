//Gerar um laço que tente "adivinhar" um dado número de 1 a 50 e conte a quantidade de tentativas até o resultado.

const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while(numeroSecreto !== numeroAleatorio){
    numeroAleatorio = Math.floor(Math.random() * 50) + 1; 
    tentativas ++;
}

console.log("O número de tentativas foi:" + tentativas)

// Criar um laço que gere um número aleatório de 1 a 50 e execute o laço enquanto não gerar um número par

let numeroaleatorio = 1;
let t = 0;

while(numeroaleatorio % 2 !== 0){
    numeroaleatorio = Math.floor(Math.random() * 50) + 1;
    t++
}

console.log("Número par encontrado: " + numeroaleatorio);
console.log("Tentativas: " + t);

do{
    numeroaleatorio = Math.floor(Math.random() * 50) + 1;
    t++
}while(numeroaleatorio % 2 !== 0);

console.log("Número par encontrado: " + numeroaleatorio);
console.log("Tentativas: " + t);

//Criar um laço que recebe um texto e verifica se é um palíndromo e imprimir no console o texto, informado se é ou não palíndromo

var texto = "arara";
var textoInvertido = "";

for(let i = texto.length -1; i >= 0; i--){
    textoInvertido += texto[i];
}

var res = texto === textoInvertido ? `${texto} é palíndromo` : `${texto} não é palíndromo`

console.log(res);
