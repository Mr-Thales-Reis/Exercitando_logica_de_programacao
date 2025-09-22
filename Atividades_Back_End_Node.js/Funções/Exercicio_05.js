// Criar uma função que emita uma mensagem caso o usuário x não esteja interajindo com o sistema após a quantidade y de tempo

const userID = "454545"

const avisaUsuario = userID => console.log(`Sessão de ${userID} está inativa`)

setTimeout(avisaUsuario, 2000, userID)

setTimeout((userID) => console.log(`sessão de ${userID} está inativa`), 4000, userID)