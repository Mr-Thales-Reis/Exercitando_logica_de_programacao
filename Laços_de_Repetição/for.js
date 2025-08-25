/*
    var num = 2;

    for (var i = 0; i <=10; i++){
        const resultado = num * i
        console.log(`${num} X ${i} = ${resultado}`)
    }
*/

/*
    Gerar números aleatórios de 1 a 50 e interromper o laço caso o número seja 15.
    Interromper depois de 30 tentativas e contar a quantidade de tentativas.
*/

//                                                                 Utlizando o break

for (let contador = 1; contador <= 30; contador++){
    const numero = Math.floor(Math.random() * (50 - 1 +1) + 1)
    if(numero === 15){
        console.log(`${numero} em ${contador} tentativas`)
        break;
        }
}


/*
Gerar números aleatórios de 1 a 50
Criar um contador que só é incrementado caso os números não sejam divisíveis por 5
No final, deve exibir o valor do contador
*/

let contador = 0;

for (let c = 1; c <= 50; c++) {
    const number = Math.floor(Math.random() * 50) + 1; // gera de 1 a 50
    
    if (number % 5 !== 0) { // se NÃO for divisível por 5
        contador++;
    }
}

console.log("Quantidade de números não divisíveis por 5:", contador);
