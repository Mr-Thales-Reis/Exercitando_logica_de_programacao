//Operadores Ternários

/*
    Exemplos:

    const name = "Fernando"
    const saudacao = nome ? `Olá, ${name}` : 'olá, pessoa!'
    console.log(saudacao)//Olá, Fernado
*/

    const name = "";
    const saudacao = name ? `Olá, ${name}` : 'olá, pessoa!';
    console.log(saudacao)

//Switch/caso

const avaliacao = 2;

switch (avaliacao){
    case 5:
        console.log("Ótimo!")
        break;
    case 4:
        console.log("Bom!")
        break;
    case 3:
        console.log('Neutra')
        break;
    default:
        console.log("Nota baixa!")
        break;
}

    