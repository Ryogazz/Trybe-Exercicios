const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    let reduzido = arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual), [])

   reduzido;
   return console.log(reduzido)
  };

flatten();