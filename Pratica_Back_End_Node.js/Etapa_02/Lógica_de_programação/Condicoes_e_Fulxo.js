//Exercícios 

//1. Verificação de idade para compra de bebida
//Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".

const idade = 17;

idade >= 18 ? console.log("Pode comprar bebida alcoólica") : console.log("Venda proibida para menores de 18 anos");

//2. Saudação de acordo com a hora
//Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".

const horaAtual = 19

if(horaAtual >= 6 && horaAtual <= 12){
    console.log("Bom dia")
}else if(horaAtual > 12 && horaAtual <=18 ){
    console.log("Boa tarde")
}else{
    console.log("Boa noite")
}

//3. Verificação de número positivo ou negativo
//Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.

const num = 2;


if(num === 0 && num % 2 === 0){
    console.log("O número dígitado é 0")
}else if(num % 2 === 0){
    console.log("Par")
}else if(num % 2 !== 0){
    console.log("ìmpar")
}



