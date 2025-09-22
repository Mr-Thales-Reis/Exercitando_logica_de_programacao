//Definir um fluxo para somar ou multiplicar dois números usando if/else

var forma = "m";

var num1 = 10;
var num2 = 20;

if(forma == "s"){
    console.log(num1 + num2)
}else if (forma == "m"){
    console.log(num1 * num2)
}else{
    console.log("Operação inválida")
}