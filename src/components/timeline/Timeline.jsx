import './Timeline.css';

const Timeline = (props) => {
    return (<div className="scroll">
        <ol className="timeline" style={{ width: '70%' }}>
            <li className="timeline contratacao">
                <span className="details">
                    <div className="data">
                        <p className="italico">fev/2018</p>
                    </div>
                    <p className="negrito">Contratação</p>
                    <p className="italico">Analista Júnior</p>
                </span>
            </li>
            <li className="timeline evento">
                <span className="details">
                    <div className="data">
                        <p className="italico">ago/2018</p>
                    </div>
                    <p className="negrito">1o AD</p>
                    <p className="italico">box 5</p>
                </span>
            </li>
            <li className="timeline progresso">
                <span className="details">
                    <div className="data">
                        <p className="italico">jan/2019</p>
                    </div>
                    <p className="negrito">Progressão</p>
                    <p className="italico">6%</p>
                </span>
            </li>
            <li className="timeline evento">
                <span className="details">
                    <div className="data">
                        <p className="italico">abr/2019</p>
                    </div>
                    <p className="negrito">Sucessor</p>
                </span>
            </li>
            <li className="timeline progresso">
                <span className="details">
                    <div className="data">
                        <p className="italico">agr/2020</p>
                    </div>
                    <p className="negrito">2o AD</p>
                    <p className="italico">box 8</p>
                </span>
            </li>
            <li className="timeline progresso">
                <span className="details">
                    <div className="data">
                        <p className="italico">dez/2020</p>
                    </div>
                    <p className="negrito">Promoção</p>
                    <p className="italico">Analista pleno</p>
                </span>
            </li>
            <li className="timeline progresso">
                <span className="details">
                    <div className="data">
                        <p className="italico">mar/2021</p>
                    </div>
                    <p className="negrito">Progressão</p>
                    <p className="italico">10%</p>
                </span>
            </li>
        </ol>
    </div>
    )

}

export default Timeline;
