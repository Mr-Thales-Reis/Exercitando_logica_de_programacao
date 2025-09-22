//ARRAY

//Construa arrays e acesse seus elementos através dos índices

const array = [5,8,7,6,4,];

console.log(array[0]);


array[0] = 20;
array[5] = 10;

//Manipulando o array com for

const arrnumerico = [20, 50, 40, 80, 158]


for(let contador = 0; contador < arrnumerico.length; contador++){
    console.log(arrnumerico[contador]);
}

//Somando valores com o array + o For

const vetor = [20, 50, 40, 80, 158];
console.log(vetor)

for(let i = 0; i < vetor.length; i++){
    vetor[i] = vetor[i] * 10;
}

console.log(vetor)

//Com Strings

const vetorString = ["Julia", "Fernanda", "Rosa", "Julio"];
console.log(vetorString)

for(let i = 0; i < vetorString.length; i++){
    vetorString[i] = vetorString[i].toUpperCase();
}
console.log(vetorString)

//Percorrendo um array com FOR OF

const arrays = [18, 28, 39, 54, 87]

for( numero of arrays){
    console.log(arrays)
}

//Percorrendo um array com FOR OF e realizando calculo
const vetores = [18, 28, 39, 54, 87];

for(let i of vetores){
    if(i + 10 > 100 || i > 100) continue;
    console.log(numero + 10)
}

//Métodos de Array

const arr = [12,15,14,17,58]

arr.push(67)//Acrecenta um número ao final do array
arr.pop();//Retira o ultimo número
console.log(arr)
const verifica = arr.indexOf(15);//Verifica em qual índice está o número que eu escolhi
console.log(verifica)

const arrayNovo = arr.slice(2);//Pega o restante do meu array apartir do index desejado!
console.log(arrayNovo)

//Método de array com funções - Callbacks
const arrayNumeros = [12,15,14,17,58];

const arrayCalculando = arrayNumeros.map((num) => {
    return num * 10;
})

console.log(arrayCalculando);

//Método com forEach -> Essa função percore meu array e guarda no 1º parâmetro os números do array e como 2º parâmetro o índice 

arrayNumeros.forEach((num, i) =>{ 
    console.log(`O número ${num} está no índice ${i}`)
});

// Criando um array com alguns números
const arrNumeros = [12, 23, 34, 45, 56];

// Usando o método filter()
// Esse método percorre cada elemento do array (um por um)
// e aplica a função de teste que passarmos (no caso: num % 5 === 0).
// Apenas os elementos que retornarem "true" nesse teste
// serão adicionados no novo array arrFiltrado.
const arrFiltrado = arrNumeros.filter(num => num % 5 === 0);

// Exibindo no console o array resultante
// Como apenas o número 45 é múltiplo de 5, o resultado será [45]
console.log(arrFiltrado);


