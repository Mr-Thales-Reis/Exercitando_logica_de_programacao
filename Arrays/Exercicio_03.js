//Filtrar um array e alterar valores especificos
//Exemplo: Alterar números para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const cpfsNumericos = cpfs.map(elementoDoArrayCpfs =>{
    if(typeof elementoDoArrayCpfs === "number"){
        return elementoDoArrayCpfs.toString()
    }
    return elementoDoArrayCpfs
})

console.log(cpfsNumericos)