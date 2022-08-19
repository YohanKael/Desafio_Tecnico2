import './Informacoes.css';

const Informacoes = (props) => {
    return (
        <div>
            <div className='informacoes'>
                <Card titulo="Titulo 1" subTitulo="SubTitulo 1"/>
                <Card titulo="Titulo 2" subTitulo="SubTitulo 2"/>
                <Card titulo="Titulo 2" subTitulo="SubTitulo 2"/>
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
    <div className='card'>
        <div className='cima'>
            <p className='negrito'>{props.titulo}</p>
        </div>
        <div className='baixo'>
            <p>{props.subTitulo}</p>
        </div>
    </div>
    )
}

export default Informacoes;