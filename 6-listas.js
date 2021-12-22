console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Minas Gerais`
    );

//Push adiciona um item na lista
listaDeDestinos.push(`Curitiba`);

//Splice remove um item da lista
listaDeDestinos.splice(1,1); 
//(qual posição vc quer, quantos vc quer retirar)

console.log("Destinos possíveis");
console.log(listaDeDestinos);
