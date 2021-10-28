import react from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends react.Component {
    render() {
        return (
            <div className="content">
                {conteudos.map((elemento) => (
                    <div key={elemento.conteudo} className="card">
                        <h4>{`O conteudo e ${elemento.conteudo}`}</h4>
                        <p>{`status ${elemento.status}`}</p>
                        <p>{`bloco: ${elemento.bloco}`}</p>
                    </div>
                ))}
            </div>
        );

    }
}

export default Content;