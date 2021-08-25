const A = 100;
const B = 45;
const C = 35;

let resultado

if (A + B + C === 180){
    resultado = true
} else if (A < 0 | B < 0 | C < 0){
    resultado = "Erro"
}
else{
    resultado = false
}

console.log(resultado);