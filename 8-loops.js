console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Minas Gerais`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = true;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);
let contador = 0;
let destinoExiste = false;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro")
}

// Como usar o FOR ao invés do WHILE
//for(let cont = 0; cont < 3 ; cont += 1){
//    if(listaDeDestinos[contador] == destino){
//        destinoExiste = true;
//    }
//}