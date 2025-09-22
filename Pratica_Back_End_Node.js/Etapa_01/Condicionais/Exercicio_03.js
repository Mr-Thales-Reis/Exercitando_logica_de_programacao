//OPERADORES

//verificar se um ano é bissexto.


const ano = 2003;

if (ano % 2 === 0 && ano % 100 !==0){
    console.log(`O ano de ${ano} é bixesto`)
} else if(ano % 100 === 0 && ano % 400 ===0){
    console.log(`O ano de ${ano} é bixesto`)
}else{
    console.log(`O ano de ${ano} não é bixesto`)
}

console.log(ano % 100)