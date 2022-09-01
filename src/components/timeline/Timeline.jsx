import './Timeline.css';
import { useEffect, useState } from 'react';

const MIN_WIDTH = 1000;
const MAX_EVENTS_WITH_MIN_WIDTH = 8;
const EXTRA_WIDTH_AFTER_MAX_EVENTS = 200;

const Timeline = ({ timelineData }) => {
    const [timelineWidth, setTimelineWidth] = useState(`${MIN_WIDTH}px`);

    useEffect(() => {
        const handleResize = () => {
            let numOfTimeEvents = timelineData.length;

            if (numOfTimeEvents > MAX_EVENTS_WITH_MIN_WIDTH) {
                let newTimeLineWidth = MIN_WIDTH + (numOfTimeEvents-MAX_EVENTS_WITH_MIN_WIDTH) * EXTRA_WIDTH_AFTER_MAX_EVENTS;
                setTimelineWidth(newTimeLineWidth);
            }
            else {
                setTimelineWidth(MIN_WIDTH);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => {
          window.removeEventListener("resize", handleResize)
        }
    }, [timelineData]);

    return (
        <div className="scroll">
            <ol className="timeline" style={{ width: `${timelineWidth}px`}}>
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
