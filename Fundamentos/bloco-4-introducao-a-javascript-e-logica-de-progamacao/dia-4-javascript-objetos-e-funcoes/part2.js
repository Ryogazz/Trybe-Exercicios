function palindromo(palavra) {
    return (palavra === palavra.split('').reverse().join(''));
}

console.log(palindromo('arara'));

console.log('///////////////////////////////////////////////////////////////////////////////');

function maior(array) {
    let maior = 0;
    for (let x in array) {
        if (array[x] > maior) {
            maior = x
        }
    }
    return (maior);
}

console.log(maior([2, 3, 6, 7, 10, 25]))

console.log('///////////////////////////////////////////////////////////////////////////////');

function menor(array) {
    let menor = 0;
    for (let y in array) {
        if (array[y] < menor) {
            menor = array[y]
        }
    }
    for (let y in array) {
        if (array[y] === menor) {
            menor = y;
        }
    }
    return (menor);
}

console.log(menor([2, 4, 6, 7, -10, 0, -3]))

console.log('///////////////////////////////////////////////////////////////////////////////');

function letras(nomes) {
    let maior;
    let cont = 0;
    for (let nome in nomes) {
        if (nomes[nome].length > cont) {
            cont = nomes[nome].length;
            maior = nomes[nome];
        }

    }
    return (maior);
}

console.log(letras(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

console.log('///////////////////////////////////////////////////////////////////////////////');

function repeticao(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];

}

console.log(repeticao([2, 3, 2, 5, 8, 2, 3]));

console.log('///////////////////////////////////////////////////////////////////////////////');

function soma (valor){
    let soma = 0;
    for(let i = 1; i <= valor; i++){
        soma += i;
    }
    return soma;
}

console.log(soma(5));

console.log('///////////////////////////////////////////////////////////////////////////////');

//anyString.substring(anyString.length - 4)

function verificaFimPalavra(word, ending){
    
    let palavra = word.substring(word.length -ending.length); 
   
    if(palavra === ending){
        return true;
    }else{
        return false;
    }
}

console.log(verificaFimPalavra('joao', 'oao'));