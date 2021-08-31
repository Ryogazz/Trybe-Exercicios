let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

console.log('Bem vinda ' + info.personagem);

console.log('///////////////////////////////////////////////////////////////////////////////');

console.log(info);

console.log('///////////////////////////////////////////////////////////////////////////////');

for (let index in info) {
    console.log(index);
};

console.log('///////////////////////////////////////////////////////////////////////////////');

for (let index in info) {
    console.log(info[index]);
};

console.log('///////////////////////////////////////////////////////////////////////////////');

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (let index in info, info2){
    if (info[index] !== info2[index]){
    console.log(info[index], ' e ', info2[index]);
    }else{
        console.log('Ambos')
    }
}