//Exercios de métodos de array

//Clonar array multidimensinal(É um array com outro array dentro [[1,2], 3, 4]) com "deep copy"
//Porque não podemos clonar arrays via variável?

const arr1 = [[1,2], 3, 4];//Isso é um array multidimensional



const copiaArray = (arr) => {//copiaArray é uma função recursiva ou seja ela chama ela mesma, usamos essa função pois pode haver um array dentro de um array.
    const copia = [];//Criamos um array vazio que vai receber os elementos copiados

    arr.forEach((elem) =>{//Percorremos cada elemento do array original
        if(Array.isArray(elem)){//Se o elemento atual for outro array
            copia.push(copiaArray(elem));//chamamos a função novamente para copiar esse subarray
        }else{
            copia.push(elem);//Se não for um array, nós apenas copiamos o valor
        }
    })
    return copia//Retornamos a cópia completa
}

// usamos a função para criar uma cópia profunda de arr1
const arr2 = copiaArray(arr1);

// alteramos o valor dentro do arr1
arr1[0][0] = 5;

console.log(arr1); // [[5, 2], 3, 4]  -> o original foi alterado
console.log(arr2); // [[1, 2], 3, 4]  -> a cópia continua intacta