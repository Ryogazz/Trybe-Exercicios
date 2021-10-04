// fatorial
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

const maiorPalavra = frase => frase.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];


console.log(maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));


const usuario = {
  primeiroNome: 'jos',
  idade: 27,
  cidade: 'Juiz de Fora'
}

console.log(usuario);

usuario.ultimoNome = 'gomes';


console.log(usuario);
console.log(Object.keys(usuario));

console.log('///////////////////////////////////////////////////////')
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('//////////////////////////////')
console.log(Object.values(usuario));
console.log('//////////////////////////////')
console.log(Object.entries(usuario));