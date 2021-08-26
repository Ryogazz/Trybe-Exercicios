let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    soma += numbers[i];
}


console.log(soma)

//media aritimetica

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
let media = soma / numbers.length

console.log("a media artimetica e: " + media)

if(media >= 20){
    console.log("valor maior que 20")
}else{
    console.log("valor menor que 20")
}

// descobrir maior valor
let maior = 0
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maior){
        maior = numbers[i]
    }
}

console.log("o maior valor e: " + maior)

// impares

let impar = []
let cont = 0
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
        impar.push(numbers[i])
        cont += 1
    }
}

if (cont === 0){
    console.log("nenhum valor ímpar encontrado")
}else{
    console.log(impar)
}


// descobrir menor valor
let menor = 1000
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < menor){
        menor = numbers[i]
    }
}

console.log("o menor valor e: " + menor)

// de 1 a 25
let valor = []
for (let i = 1; i <= 25; i++){
    valor.push(i)
}

console.log(valor)

// divisao de cada um
for(let i = 0; i < numbers.length; i++){
    console.log(valor[i] / 2)
}

// ordenado valores

let crecente = numbers.sort((a, b) => a - b)

console.log(crecente)

let decente = numbers.sort((a, b) => b - a)

console.log(decente)

let novo = []
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let i = 0; i < numbers.length; i ++){
    if(i + 1 < numbers.length){
        novo.push(numbers[i] * numbers[i +1])
    } else{
        novo.push(numbers[i] * 2);
    }
}

console.log(novo)
