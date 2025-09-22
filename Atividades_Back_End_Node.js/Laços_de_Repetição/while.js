// While -> É um laço de repetição que repete um bloco de código enquanto uma condição for verdadeira.

let contador = 1;

while(contador <= 5){
    console.log("Contador:" + contador);
    contador++; //incremento para o loop não ficar infinito
}

// Do ... While -> É um laço de repetição que executa o bloco de código pelo menos uma vez, e só depois verifica a condição.

let c = 1;

do{
    console.log("Contador:" + c);
    c++
}while(c <= 5);