  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  lesson3.turno = 'noite'

  const listarChave = funcao => Object.keys(funcao);
  

  const tamanhoObj = funcao => Object.keys(funcao).length;

  const valoresObjt = funcao => Object.values(funcao);

  const allLessons = Object.assign({} , {lesson1, lesson2, lesson3});

  const numeroAlunos = obj =>{
      let total = 0;
      const array = Object.keys(obj);
      for(index in array){
          total += obj[array[index]].numeroEstudantes
      }
    return total;
  }

  console.log(numeroAlunos(allLessons))