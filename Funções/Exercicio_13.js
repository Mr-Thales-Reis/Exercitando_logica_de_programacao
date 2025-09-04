/*
Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. 
O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.
Sua missão é criar três funções separadas, com responsabilidades bem definidas:

calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
classificarConsumo(consumo): Retorna a classificação com base na tabela:
*/


const consumomensal = function (consumo) {
    if (consumo < 50) {
        return "Baixo consumo";
    } else if (consumo >= 50 && consumo <= 199) {
        return "Consumo Baixo";
    } else {
        return "Alto consumo";
    }
};

const calcularConsumo = function (potencia, horasPorDia){
    let consumo = (potencia * horasPorDia * 30) / 1000
    return consumo
}

const nomeAparelho = "Geladeira"
const clasificacaoConsumo = consumomensal(20)
const niveldeConsumo = calcularConsumo(150, 4)

function exibirResumo(nomeAparelho, clasificacaoConsumo, niveldeConsumo){
    
    console.log(`${nomeAparelho} tem consumo de ${niveldeConsumo} kWh/mês e é classificada como ${clasificacaoConsumo}.`)

    
}

exibirResumo()