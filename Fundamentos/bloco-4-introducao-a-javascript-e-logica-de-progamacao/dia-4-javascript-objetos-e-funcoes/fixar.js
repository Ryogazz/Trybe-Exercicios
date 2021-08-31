

let player = {
    name:  'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos');
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes')
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de outro e ' + player.medals.silver + ' medalhas de prata')

console.log('///////////////////////////////////////////////////////////////////////////////');

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let name in names){
    console.log('Olá ' + names[name])
}; 

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };


for(let index in car){
    console.log(index, car[index])
}

console.log('///////////////////////////////////////////////////////////////////////////////');

function conta (valor1, valor2, sinal){
    if(sinal === '+'){
        return valor1 + valor2
    };
    if(sinal === '-'){
        return valor1 - valor2
    };
    if(sinal === '*'){
        return valor1 * valor2
    };
    if(sinal === '/'){
        return valor1 / valor2
    };
}

console.log(conta(5, 3, '*'))