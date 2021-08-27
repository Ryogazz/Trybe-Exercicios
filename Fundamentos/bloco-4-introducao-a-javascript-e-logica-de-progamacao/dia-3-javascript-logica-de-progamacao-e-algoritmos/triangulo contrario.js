let tamanho = 5;
let simbulo = '*';
let linha = '';
let posicao = tamanho

for(let i = 0; i <= tamanho; i ++){
    for(let coluna = 0; coluna <= tamanho; coluna ++ ){
        if(coluna < posicao){
            linha += ' '
        }else{
            linha += simbulo
        }
    }
    
    console.log(linha);
    linha = '';
    posicao -= 1;
    
}