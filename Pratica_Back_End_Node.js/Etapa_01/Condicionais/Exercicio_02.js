/*
    Localizar o nível de bônus de acordo com a faixa sálarial
    Exemplo: 
            $11000 e acima: 3% de bônus
            $10999 a $7000: 5% de bônus
            $ 6999 a $4000: 7% de bônus
            $ 3999 p/ baixo: 9% de bõnus
*/

let salario = 3999;

if(salario >= 11000){
    console.log(`O seu salário é R$11000, logo seu bônus é de 3%, então seu salário será de R$ ${(salario * 3/100) + salario}`)
}else if(salario <= 10999 && salario >= 7000){
    console.log(`O seu salário é de R$10999 a R$7000, logo seu bônus é de 5%, então seu salário será de R$ ${(salario * 5/100) + salario}`)
}else if(salario <= 6999 && salario >= 4000){
    console.log(`O seu salário é de R$6999 a R$4000, logo seu bônus é de 7%, então seu salário será de R$ ${(salario * 7/100) + salario}`)
}else if(salario <=3999){
    console.log(`O seu salário é de R$3999 p/ baixo, logo seu bônus é de 9%, então seu salário será de R$ ${(salario * 9/100) + salario}`)
}else{
    console.log("Salário inválido!")
}