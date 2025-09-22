//CRIAR UM ARRAY COM SEQUÊNCIA DE NÚMEROS ENTRE X e y

function criarArray(inicio, fim){
    const arr = [];   // cria um array vazio onde vamos armazenar os números
    let elemento = inicio; // variável que começa no número inicial

    // for com 2 contadores: i (índice do array) e j (número atual)
    for(let i = 0, j = 0; j < fim; i++, elemento++){
        arr[i] = elemento;  // coloca o "elemento" atual dentro do array, na posição i
        j = elemento;       // sincroniza j com o valor atual de "elemento"
    }
    return arr;  // retorna o array completo
}
console.log(criarArray(2, 5))
