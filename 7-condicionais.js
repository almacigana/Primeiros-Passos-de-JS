console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`,
    `Minas Gerais`
);

const idadeComprador = 11;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
//    console.log("Comprador maior de idade");
//    listaDeDestinos.splice(1, 1); //remove ítem
//} else if (estaAcompanhada) {
//    console.log("Comprador etá acompanhado");
//    listaDeDestinos.splice(1, 1); //remove ítem
//} else {
//    console.log("Não é maior de idade e não posso vender");
//}
// alt shift e F faz a formatação do arquivo/código ficar correta
// ou é ||

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem");
    listaDeDestinos.splice(1, 1); //remove ítem
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque:")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem")
}else{
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);