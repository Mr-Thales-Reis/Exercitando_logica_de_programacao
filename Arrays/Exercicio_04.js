/*
Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.

Escreva um programa que:
    Crie um array com os itens iniciais da lista de compras.
    Acesse e exiba o segundo item da lista.
    Modifique o último item da lista para um novo valor.
*/

const listaDeCompras = ['Arroz', 'feijão', 'macarrão', 'tomate'];


console.log(`O segundo item da lista é: ${listaDeCompras[1]}`)

listaDeCompras[listaDeCompras.length - 1] = "Goiaba" // Dessa forma eu substituo o ultimo valor por outro

console.log(`lista após a modificação: ${listaDeCompras}`);

console.log("O array possui: " + listaDeCompras.length + " elementos")
