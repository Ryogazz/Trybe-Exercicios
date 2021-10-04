const {
    sum,
    myRemove,
} = require("./sum.js");

describe('Verificar se a funçao soma esta funcionando', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(9).toEqual(sum(4, 5));
    });

    it('sum(0, 0) e 0', () => {
        expect(0).toEqual(sum(0, 0));
    });

    it('sum(4, "5") recebe erro', () => {
        expect(() => sum(4, '5')).toThrowError();
    });
    it('sum(4, "5") recebe mensagem de erro', () => {
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});

describe('verificar se myRemove esta funcionado', () =>{

})


