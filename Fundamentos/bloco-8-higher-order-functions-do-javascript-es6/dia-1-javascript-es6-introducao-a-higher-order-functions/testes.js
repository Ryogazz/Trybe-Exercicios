const novoFuncionario = (nomeCompleto) => {
    const obj ={
        name:nomeCompleto,
        email: (nomeCompleto.replace(' ', '_') + '@trybe.com'),
    }
    return obj
};


const newEmployees = (novoFuncionario) => {
    const employees = {
      id1: novoFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: novoFuncionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: novoFuncionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(novoFuncionario));

  console.log('////////////////////////////////////////////////////////////////');

  const valor = () => 3

  const aposta = (valor) => {
    const aleatorio =  Math.floor(Math.random() * 5 + 1);
    console.log(aleatorio);
    if(valor() === aleatorio){
        return ("Parabéns você ganhou");
    }else{
        return ("Tente novamente");
    }
};

console.log(aposta(valor));

console.log('////////////////////////////////////////////////////////////////');

const verificador = (notaA, notaB) => {
    let contador = 0;
    for(const index = 0; index < 3; index += 1){
        if(notaB[index] === 'N.A'){
            contador;
        }
        else if(notaA[index] === notaB[index]){
            contador += 1;
        }else{
            contador -= 0.5
        }
        return contador;
    }

}

console.log(verificador(['a','e','i'],['j','e','i']))