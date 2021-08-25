const A = 15;
const B = 10;
const C = 8;

let resultado

if (A > B & A > C) {
    resultado = A
} else if (B > A & B > C) {
    resultado = B
} else {
    resultado = C
}

console.log(resultado);