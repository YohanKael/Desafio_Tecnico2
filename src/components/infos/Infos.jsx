import './Infos.css';

const Infos = ({data}) => {
    return (
        <div>
            <div className='informacoes'>
                <Card titulo={!data ? null : data[0][0]} subTitulo={!data ? null : data[0][1]}/>
                <Card titulo={!data ? null : data[1][0]} subTitulo={!data ? null : data[1][1]}/>
                <Card titulo={!data ? null : data[2][0]} subTitulo={!data ? null : data[2][1]}/>
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

export default Infos;