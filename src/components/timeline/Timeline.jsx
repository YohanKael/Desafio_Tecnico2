import './Timeline.css';

const Timeline = ({ timelineData }) => {
    return (
        <div className="scroll">
            <ol className="timeline" style={{ width: '70%' }}>
                {
                    timelineData.map((item, i) =>
                        <li key={i} className={"timeline " + item.tipo}>
                            <span className="details">
                                <div className="data">
                                    <p className="italico">{item.data}</p>
                                </div>
                                <p className="negrito">{item.titulo}</p>
                                <p className="italico">{item.subTitulo}</p>
                            </span>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default Timeline;
