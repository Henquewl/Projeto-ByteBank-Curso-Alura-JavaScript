console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos Possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let destinoExiste = false;
for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[contador] == destino) {        
        destinoExiste = true;
    }
}
console.log(`Destino: ${destino}`);