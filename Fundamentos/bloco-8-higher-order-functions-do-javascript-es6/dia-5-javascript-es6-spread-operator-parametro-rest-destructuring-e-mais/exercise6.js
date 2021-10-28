const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (carro) => {[modelo, fabricante, ano] = carro}

const toObject2 = ([name, brand, year]) => ({ name, brand, year });


toObject(palio);

