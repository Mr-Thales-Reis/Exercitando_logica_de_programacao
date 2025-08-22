// Operadores Condicional ->  Switch/Case e Ternários

/*
    Verificar se estudante receberá bônus da nota.
    Estudantes recebem bônus se nota for 8 ou acima e se estiverem no máximo 2 faltas.
*/

const estudante = "João";
const nota = 8;
const faltas = 2;

const result = nota >= 8 && faltas <= 2 ? 'recebe' : 'Nrecebe';

switch (result){
    case 'recebe':
        console.log(`Olá, ${estudante}, você irá receber um Bônus!!`)
        break;
    case 'Nrecebe':
        console.log(`Olá, ${estudante}, você não irá receber um Bônus!!`)
        break;
}

/*
    Criar um tipo de fluxo que identifica o tipo de usuário e comunica de acordo
        Exemplo:
            User free tem acesso limitado ao app
            User premium tem acesso a todas as funções 
            User super premium tem acesso total e bõnus especial
*/

const user = "super premium";

switch (user){
    case 'free':
        console.log("acesso limitado ao app")
        break;
    case 'premium':
        console.log('acesso a todas as funções')
        break;
    case 'super premium':
        console.log('acesso total e bõnus especial')
        break;
    default:
        console.log("Usuário desconhecido!!")
}