/*
Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.

Escreva um programa que:
    Crie um array com os valores das despesas.
    Use um loop for para somar os valores.
    Exiba o total gasto.
*/

const despesas = [120, 80, 45.5, 200, 60];
 
let total = 0; // Para cada vez que meu i passar ++
 
for (let i = 0; i < despesas.length; i++) {
  total += despesas[i]; //Vou armazenar o primeiro elemento e soma-lo com o proximo
}
 
console.log(`Total de despesas: R$ ${total}`);