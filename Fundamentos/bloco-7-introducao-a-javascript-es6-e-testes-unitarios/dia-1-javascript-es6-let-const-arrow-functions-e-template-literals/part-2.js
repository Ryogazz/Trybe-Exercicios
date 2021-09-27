// fatorial
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

const maiorPalavra = frase => frase.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];


console.log(maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));